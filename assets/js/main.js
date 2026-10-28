/* ==========================================================================
   MMarchetti Digital — script del sito
   1. Menu mobile (sotto 840px): bottone Menu/Chiudi, Esc chiude.
   2. Modulo di contatto: convalida con messaggi "Errore: …", invio a Netlify Forms.
   Senza JavaScript il menu resta visibile e il modulo usa la convalida del browser.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 1. Menu mobile ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');

  // Con il pannello aperto il contenuto sotto non deve ricevere il focus da tastiera
  var behindMenu = [document.getElementById('main'), document.querySelector('.footer')];

  if (menuBtn && nav) {
    var setMenu = function (open) {
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? 'Chiudi' : 'Menu';
      nav.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      behindMenu.forEach(function (el) { if (el) el.inert = open; });
    };

    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        menuBtn.focus();
      }
    });

    // Un link interno (es. "Contattami") chiude il pannello
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    // Tornando sopra 840px il pannello non deve restare aperto
    window.matchMedia('(min-width: 840px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- 2. Modulo di contatto ---------- */
  var form = document.querySelector('[data-form]');
  if (!form) return;

  var done = document.getElementById('form-done');
  var status = document.getElementById('form-status');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  form.setAttribute('novalidate', '');

  // Ogni regola restituisce il testo dell'errore, o '' se il campo è a posto
  var rules = {
    nome: function () {
      return form.nome.value.trim() ? '' : 'scrivi il tuo nome.';
    },
    email: function () {
      var v = form.email.value.trim();
      if (!v) return 'scrivi un indirizzo email a cui risponderti.';
      if (!EMAIL_RE.test(v)) return 'l\'indirizzo email non è completo, per esempio nome@azienda.it.';
      return '';
    },
    chi: function () {
      return form.querySelector('input[name="chi"]:checked') ? '' : 'scegli l\'opzione che ti descrive meglio.';
    },
    messaggio: function () {
      return form.messaggio.value.trim() ? '' : 'scrivi due righe sul tuo caso.';
    },
    privacy: function () {
      return form.privacy.checked ? '' : 'per inviare la richiesta serve il consenso al trattamento dei dati.';
    }
  };

  // Elemento che riceve aria-invalid e il focus
  function target(name) {
    return name === 'chi' ? document.getElementById('chi') : form.elements[name];
  }

  function focusTarget(name) {
    return name === 'chi' ? form.querySelector('input[name="chi"]') : form.elements[name];
  }

  function showError(name, message) {
    var box = document.getElementById(name + '-error');
    var el = target(name);
    if (message) {
      box.querySelector('span').textContent = message;
      box.hidden = false;
      el.setAttribute('aria-invalid', 'true');
    } else {
      box.hidden = true;
      el.removeAttribute('aria-invalid');
    }
  }

  function validate() {
    var first = null;
    Object.keys(rules).forEach(function (name) {
      var message = rules[name]();
      showError(name, message);
      if (message && !first) first = name;
    });
    return first;
  }

  // Dopo un errore il messaggio sparisce appena il campo è corretto
  form.addEventListener('input', recheck);
  form.addEventListener('change', recheck);
  function recheck(e) {
    var name = e.target.name;
    if (rules[name] && target(name).getAttribute('aria-invalid') === 'true') {
      showError(name, rules[name]());
    }
  }

  // Uscendo da un campo compilato lo controllo subito (es. email incompleta);
  // i campi vuoti si segnalano solo all'invio, per non dare errori a chi sta solo scorrendo
  form.addEventListener('focusout', function (e) {
    var name = e.target.name;
    if ((name === 'nome' || name === 'email' || name === 'messaggio') && e.target.value.trim()) {
      showError(name, rules[name]());
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.hidden = true;

    var firstInvalid = validate();
    if (firstInvalid) {
      focusTarget(firstInvalid).focus();
      return;
    }

    var button = form.querySelector('button[type="submit"]');
    var label = button.querySelector('.mm-btn__label');
    var idleText = label.textContent;
    button.disabled = true;
    label.textContent = 'Invio in corso…';
    form.setAttribute('aria-busy', 'true');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.hidden = true;
        done.hidden = false;
        done.focus();
      })
      .catch(function () {
        status.querySelector('span').textContent = 'la richiesta non è partita. Riprova tra qualche minuto o scrivimi a mmarchetti.web@gmail.com.';
        status.hidden = false;
        button.disabled = false;
        label.textContent = idleText;
      })
      .then(function () {
        form.removeAttribute('aria-busy');
      });
  });
})();
