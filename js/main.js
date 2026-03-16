/* ═══════════════════════════════════════════════════════
   OAKWELL WORKFORCE — MAIN JS v2.0
   ═══════════════════════════════════════════════════════ */

function oakwellInit() {
  // Nav scroll effect
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (path.endsWith(href) || (path === '/' && href.includes('index'))) {
      a.classList.add('active');
    }
  });

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    });
  });

  // Cookie banner
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('owl_cookies')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 900);
  }
  document.getElementById('accept-cookies')?.addEventListener('click', () => {
    localStorage.setItem('owl_cookies', 'accepted');
    cookieBanner?.classList.remove('visible');
  });
  document.getElementById('decline-cookies')?.addEventListener('click', () => {
    localStorage.setItem('owl_cookies', 'declined');
    cookieBanner?.classList.remove('visible');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // Netlify form AJAX submission
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const successEl = form.querySelector('.form-success');
      const errorEl = form.querySelector('.alert--error');
      const originalText = btn?.textContent;
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString()
        });
        if (res.ok) {
          form.reset();
          if (successEl) successEl.style.display = 'block';
          if (btn) btn.textContent = 'Sent';
          setTimeout(() => { if (btn) { btn.textContent = originalText; btn.disabled = false; } }, 5000);
        } else { throw new Error(); }
      } catch {
        if (errorEl) errorEl.classList.add('show');
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      }
    });
  });
}

window.oakwellInit = oakwellInit;
document.addEventListener('DOMContentLoaded', () => {
  // Only run if components already injected (i.e. components.js ran first)
  setTimeout(oakwellInit, 50);
});
