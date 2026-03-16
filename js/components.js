/* ═══════════════════════════════════════════════════════
   OAKWELL WORKFORCE — SHARED COMPONENTS v2.0
   Nav + Footer injected into every page
   All paths absolute — works from root and /pages/
   ═══════════════════════════════════════════════════════ */

const NAV_HTML = `
<nav id="main-nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <img src="/img/logo-white.png" alt="Oakwell Workforce Ltd" class="nav-logo-img">
    </a>
    <div class="nav-links">
      <a href="/index.html">Home</a>
      <a href="/pages/clients.html">For Clients</a>
      <a href="/pages/workers.html">For Workers</a>
      <a href="/pages/about.html">About Us</a>
      <a href="/pages/contact.html">Contact</a>
    </div>
    <div class="nav-right">
      <a href="tel:+441384000000" class="nav-tel">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        [INSERT PHONE]
      </a>
      <a href="/pages/clients.html#enquiry" class="btn btn--gold btn--sm">Get Workers</a>
    </div>
    <button class="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu">
    <a href="/index.html">Home</a>
    <a href="/pages/clients.html">For Clients</a>
    <a href="/pages/workers.html">For Workers</a>
    <a href="/pages/about.html">About Us</a>
    <a href="/pages/contact.html">Contact</a>
    <a href="tel:+441384000000" class="mobile-tel">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      [INSERT PHONE]
    </a>
    <div class="mobile-ctas">
      <a href="/pages/clients.html#enquiry" class="btn btn--gold">I Need Workers</a>
      <a href="/pages/workers.html#register" class="btn btn--outline-gold">Find Work</a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer id="main-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <img src="/img/logo-white.png" alt="Oakwell Workforce Ltd" style="height:44px;width:auto;">
          </div>
          <div class="footer-brand-tagline">Forged in the Black Country</div>
          <p class="footer-desc">A family-run industrial staffing agency serving manufacturers, warehouses, and logistics businesses across the Black Country and West Midlands. Every worker personally known to us.</p>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+441384000000">[INSERT PHONE]</a>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:hello@oakwellworkforce.co.uk">hello@oakwellworkforce.co.uk</a>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Stourbridge, West Midlands</span>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Services</div>
          <div class="footer-links">
            <a href="/pages/clients.html">For Clients</a>
            <a href="/pages/workers.html">For Workers</a>
            <a href="/pages/clients.html#roles">Roles We Fill</a>
            <a href="/pages/clients.html#how">How It Works</a>
            <a href="/pages/workers.html#pay">Pay &amp; Benefits</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <div class="footer-links">
            <a href="/pages/about.html">About Us</a>
            <a href="/pages/about.html#values">Our Values</a>
            <a href="/pages/contact.html">Contact</a>
            <a href="/pages/workers.html#register">Register as Worker</a>
            <a href="/pages/clients.html#enquiry">Client Enquiry</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Legal</div>
          <div class="footer-links">
            <a href="/pages/privacy.html">Privacy Policy</a>
            <a href="/pages/privacy.html#cookies">Cookie Policy</a>
            <a href="/pages/privacy.html#terms">Terms of Use</a>
          </div>
          <div style="margin-top:28px;">
            <div class="footer-col-title">Coverage</div>
            <div class="footer-links">
              <a href="/pages/about.html">Stourbridge</a>
              <a href="/pages/about.html">Dudley &amp; Brierley Hill</a>
              <a href="/pages/about.html">Halesowen &amp; Cradley Heath</a>
              <a href="/pages/about.html">Wolverhampton</a>
              <a href="/pages/about.html">Kidderminster</a>
              <a href="/pages/about.html">Birmingham South &amp; West</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-inner">
        <div class="footer-legal">
          <p>&copy; ${new Date().getFullYear()} Oakwell Workforce Limited. Registered in England &amp; Wales. Company No. [INSERT]. Registered Office: [INSERT ADDRESS], Stourbridge, West Midlands.</p>
          <p style="margin-top:4px;">Employment Business &mdash; Conduct of Employment Agencies and Employment Businesses Regulations 2003. ICO Registration No. [INSERT].</p>
        </div>
        <div class="footer-credentials">
          <span class="footer-cred-badge">EL Insured</span>
          <span class="footer-cred-badge">ICO Registered</span>
          <span class="footer-cred-badge">Companies House</span>
          <span class="footer-cred-badge">AWR Compliant</span>
        </div>
      </div>
    </div>
  </div>
</footer>

<div id="cookie-banner">
  <p>We use essential cookies to make our website work. We&rsquo;d also like to set analytics cookies to understand how you use our site. <a href="/pages/privacy.html#cookies">Learn more</a>.</p>
  <div class="cookie-btns">
    <button id="accept-cookies">Accept</button>
    <button id="decline-cookies">Decline</button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  if (window.oakwellInit) window.oakwellInit();
});
