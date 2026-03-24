/* ═══════════════════════════════════════════════════════
   OAKWELL WORKFORCE — MAIN JS v2.2
   Single init path — called by components.js after nav injection
   ═══════════════════════════════════════════════════════ */

function oakwellInit() {

  // ── NAV SCROLL ───────────────────────────────────────
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── ACTIVE LINK ──────────────────────────────────────
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function(a) {
    var href = a.getAttribute('href') || '';
    if (path.endsWith(href) || (path === '/' && href.indexOf('index') > -1)) {
      a.classList.add('active');
    }
  });

  // ── HAMBURGER ────────────────────────────────────────
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    // Remove any old listeners by cloning
    var newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);
    hamburger = newHamburger;
    mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── COOKIE BANNER ────────────────────────────────────
  var cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    if (!localStorage.getItem('owl_cookies')) {
      setTimeout(function() { cookieBanner.classList.add('visible'); }, 900);
    }
    var acceptBtn = document.getElementById('accept-cookies');
    var declineBtn = document.getElementById('decline-cookies');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('owl_cookies', 'accepted');
        cookieBanner.classList.remove('visible');
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', function() {
        localStorage.setItem('owl_cookies', 'declined');
        cookieBanner.classList.remove('visible');
      });
    }
  }

  // ── SCROLL REVEAL ────────────────────────────────────
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && window.IntersectionObserver) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el) { obs.observe(el); });
  }

  // ── SMOOTH SCROLL ────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── NETLIFY FORMS ────────────────────────────────────
  document.querySelectorAll('form[data-netlify]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('[type=submit]');
      var successEl = form.querySelector('.form-success');
      var errorEl = form.querySelector('.alert--error');
      var originalText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function(res) {
        if (res.ok) {
          form.reset();
          if (successEl) successEl.style.display = 'block';
          if (btn) btn.textContent = 'Sent';
          setTimeout(function() {
            if (btn) { btn.textContent = originalText; btn.disabled = false; }
          }, 5000);
        } else {
          throw new Error('Form error');
        }
      }).catch(function() {
        if (errorEl) errorEl.classList.add('show');
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      });
    });
  });

  // ── WHATSAPP BUTTON ──────────────────────────────────
  // Only inject once
  if (document.getElementById('wa-float-btn')) return;

  var waStyle = document.createElement('style');
  waStyle.textContent = [
    '.wa-float{position:fixed;bottom:28px;right:28px;z-index:9000;display:flex;flex-direction:column;align-items:flex-end;gap:10px;}',
    '.wa-bubble{background:#fff;border-radius:12px;padding:12px 16px;box-shadow:0 4px 24px rgba(0,0,0,0.15);font-family:"Nunito Sans",sans-serif;font-size:13px;font-weight:700;color:#1A2E4A;max-width:220px;line-height:1.4;position:relative;display:none;}',
    '.wa-bubble.visible{display:block;animation:waFadeIn 0.25s ease;}',
    '.wa-bubble span{display:block;font-size:11px;font-weight:600;color:#4A5568;margin-top:2px;}',
    '.wa-bubble::after{content:"";position:absolute;bottom:-8px;right:20px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff;}',
    '.wa-btn{width:58px;height:58px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,0.45);cursor:pointer;transition:transform 0.2s ease,box-shadow 0.2s ease;text-decoration:none;border:3px solid #fff;}',
    '.wa-btn:hover{transform:scale(1.08);box-shadow:0 8px 28px rgba(37,211,102,0.55);}',
    '.wa-btn svg{width:30px;height:30px;fill:#fff;}',
    '.wa-close{position:absolute;top:6px;right:10px;width:18px;height:18px;cursor:pointer;color:#9A9590;font-size:18px;line-height:18px;text-align:center;font-weight:800;border:none;background:none;padding:0;}',
    '@keyframes waFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
    '@media(max-width:480px){.wa-float{bottom:20px;right:16px;}}'
  ].join('');
  document.head.appendChild(waStyle);

  var waWrapper = document.createElement('div');
  waWrapper.className = 'wa-float';
  waWrapper.id = 'wa-float-btn';
  waWrapper.innerHTML = '<div class="wa-bubble" id="wa-bubble"><button class="wa-close" id="wa-close" aria-label="Close">&times;</button>Chat with us on WhatsApp<span>Typically replies within the hour</span></div><a class="wa-btn" href="https://wa.me/447563491603?text=Hi%20Oakwell%20Workforce%2C%20I%27d%20like%20to%20find%20out%20more." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>';
  document.body.appendChild(waWrapper);

  var bubbleEl = document.getElementById('wa-bubble');
  var closeEl = document.getElementById('wa-close');

  if (!sessionStorage.getItem('wa_dismissed')) {
    setTimeout(function() {
      if (bubbleEl) bubbleEl.classList.add('visible');
    }, 3000);
  }

  if (closeEl) {
    closeEl.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (bubbleEl) bubbleEl.classList.remove('visible');
      sessionStorage.setItem('wa_dismissed', '1');
    });
  }
}

// Expose for components.js to call after nav injection
window.oakwellInit = oakwellInit;
