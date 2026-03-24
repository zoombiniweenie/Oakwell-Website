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

// ── WHATSAPP FLOATING BUTTON ─────────────────────────────
(function() {
  const WA_NUMBER = '447563491603';
  const WA_MESSAGE = encodeURIComponent('Hi Oakwell Workforce, I\'d like to find out more about your services.');

  const style = document.createElement('style');
  style.textContent = `
    .wa-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }
    .wa-bubble {
      background: #fff;
      border-radius: 12px;
      padding: 12px 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      font-family: 'Nunito Sans', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #1A2E4A;
      max-width: 220px;
      line-height: 1.4;
      position: relative;
      display: none;
      animation: waFadeIn 0.25s ease;
    }
    .wa-bubble::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 20px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #fff;
    }
    .wa-bubble.visible { display: block; }
    .wa-bubble span { display: block; font-size: 11px; font-weight: 600; color: #4A5568; margin-top: 2px; }
    .wa-btn {
      width: 58px;
      height: 58px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(37,211,102,0.45);
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-decoration: none;
      border: 3px solid #fff;
    }
    .wa-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 28px rgba(37,211,102,0.55);
    }
    .wa-btn svg { width: 30px; height: 30px; fill: #fff; }
    .wa-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      color: #9A9590;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      font-weight: 800;
    }
    @keyframes waFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    @media(max-width:480px) { .wa-float { bottom: 20px; right: 16px; } }
  `;
  document.head.appendChild(style);

  const wrapper = document.createElement('div');
  wrapper.className = 'wa-float';
  wrapper.innerHTML = `
    <div class="wa-bubble" id="wa-bubble">
      <span class="wa-close" id="wa-close">&times;</span>
      Chat with us on WhatsApp
      <span>Typically replies within the hour</span>
    </div>
    <a class="wa-btn" href="https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" id="wa-btn">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `;
  document.body.appendChild(wrapper);

  // Show bubble after 3 seconds, first visit only
  const bubbleEl = document.getElementById('wa-bubble');
  const closeEl = document.getElementById('wa-close');

  if (!sessionStorage.getItem('wa_dismissed')) {
    setTimeout(() => { bubbleEl?.classList.add('visible'); }, 3000);
  }

  closeEl?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    bubbleEl?.classList.remove('visible');
    sessionStorage.setItem('wa_dismissed', '1');
  });
})();
