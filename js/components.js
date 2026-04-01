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
      <a href="tel:07563491603" class="nav-tel">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        07563 491603
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
    <a href="tel:07563491603" class="mobile-tel">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      07563 491603
    </a>
    <a href="https://wa.me/447563491603" target="_blank" rel="noopener" class="mobile-tel" style="color:#25D366;border-bottom-color:rgba(255,255,255,0.06);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp Us
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
            <a href="tel:07563491603">07563 491603</a>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:hello@oakwellworkforce.com">hello@oakwellworkforce.com</a>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:hire@oakwellworkforce.com">hire@oakwellworkforce.com</a>
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
          <p>&copy; ${new Date().getFullYear()} Oakwell Workforce Limited. Registered in England &amp; Wales. Company No. 17098259. Registered Office: Stourbridge, West Midlands.</p>
          <p style="margin-top:4px;">Employment Business &mdash; Conduct of Employment Agencies and Employment Businesses Regulations 2003. ICO Registration No. ZC107299.</p>
        </div>
        <div class="footer-credentials">
          <span class="footer-cred-badge">EL Insured &pound;10m</span>
          <span class="footer-cred-badge">PL Insured &pound;5m</span>
          <span class="footer-cred-badge">PI Insured &pound;5m</span>
          <span class="footer-cred-badge">Cyber Insured</span>
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

document.addEventListener('DOMContentLoaded', function() {
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  // Small delay ensures main.js has fully parsed and oakwellInit is defined
  setTimeout(function() {
    if (typeof window.oakwellInit === 'function') {
      window.oakwellInit();
    }
  }, 10);
});
