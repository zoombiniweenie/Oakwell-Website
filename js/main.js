/* ═══════════════════════════════════════════════════════
   OAKWELL WORKFORCE — MAIN JS
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL ────────────────────────────────────────
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── ACTIVE NAV LINK ───────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPage ||
        (currentPage === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── HAMBURGER ─────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    });
  });

  // ── COOKIE BANNER ─────────────────────────────────────
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('owl_cookies')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 800);
  }
  document.getElementById('accept-cookies')?.addEventListener('click', () => {
    localStorage.setItem('owl_cookies', 'accepted');
    cookieBanner?.classList.remove('visible');
  });
  document.getElementById('decline-cookies')?.addEventListener('click', () => {
    localStorage.setItem('owl_cookies', 'declined');
    cookieBanner?.classList.remove('visible');
  });

  // ── SCROLL REVEAL ─────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  // ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── NETLIFY FORM ENHANCEMENT ───────────────────────────
  // Adds success/error feedback after Netlify form submission
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const successEl = form.querySelector('.form-success');
      const errorEl   = form.querySelector('.alert--error');
      const originalText = btn?.textContent;

      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

      try {
        const data = new FormData(form);
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString()
        });

        if (res.ok) {
          form.reset();
          if (successEl) { successEl.style.display = 'block'; }
          if (btn) { btn.textContent = '✓ Sent'; }
          setTimeout(() => {
            if (btn) { btn.textContent = originalText; btn.disabled = false; }
          }, 5000);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch {
        if (errorEl) { errorEl.classList.add('show'); }
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      }
    });
  });

  // ── COUNTER ANIMATION (stats) ──────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1800;
          const start = performance.now();
          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

});
