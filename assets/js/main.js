/* ==========================================================================
   MMarchetti Digital — script del sito
   1. Menu mobile (sotto 840px): bottone Menu/Chiudi, Esc chiude.
   2. Modulo di contatto: convalida con messaggi "Errore: …", invio a Formspree con fetch.
   Senza JavaScript il menu resta visibile e il modulo usa la convalida del browser
   e il normale invio POST all'action del form (pagina di conferma di Formspree).
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
      return form.privacy.checked ? '' : 'per inviare la richiesta conferma di aver letto l\'informativa privacy.';
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

  // Mostra un errore d'invio nella regione aria-live (testo costruito senza innerHTML)
  function showStatus(message) {
    status.textContent = '';
    if (!message) return;
    var strong = document.createElement('strong');
    strong.textContent = 'Errore:';
    status.appendChild(strong);
    status.appendChild(document.createTextNode(' ' + message));
  }

  var sending = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending) return; // evita il doppio invio (doppio clic o Invio ripetuto)
    showStatus('');

    var firstInvalid = validate();
    if (firstInvalid) {
      focusTarget(firstInvalid).focus();
      return;
    }

    var button = form.querySelector('button[type="submit"]');
    var label = button.querySelector('.mm-btn__label');
    var idleText = label.textContent;
    // aria-disabled invece di disabled: il bottone resta disabilitato per clic e screen reader
    // (il doppio invio è bloccato da `sending`) ma non perde il focus da tastiera
    sending = true;
    button.setAttribute('aria-disabled', 'true');
    label.textContent = 'Invio in corso…';
    form.setAttribute('aria-busy', 'true');

    // Formspree risponde in JSON solo con Accept: application/json; FormData parte come multipart
    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        form.hidden = true;
        done.hidden = false;
        done.focus();
      })
      .catch(function () {
        showStatus('la richiesta non è partita e i dati che hai scritto sono ancora qui. Riprova tra qualche minuto o scrivimi direttamente a mmarchetti.web@gmail.com.');
        button.removeAttribute('aria-disabled');
        label.textContent = idleText;
      })
      .then(function () {
        sending = false;
        form.removeAttribute('aria-busy');
      });
  });
})();
