/* ═══════════════════════════════════════════════════════
   OAKWELL WORKFORCE — SHARED COMPONENTS
   Injects nav and footer into every page
   ═══════════════════════════════════════════════════════ */

const NAV_HTML = `
<nav id="main-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-name">OAKWELL <span>WORKFORCE</span></span>
      <span class="nav-logo-sub">Industrial Staffing · Black Country</span>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="clients.html">For Clients</a>
      <a href="workers.html">For Workers</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="nav-right">
      <a href="tel:+441384000000" class="nav-tel">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
        [INSERT PHONE]
      </a>
      <a href="clients.html#enquiry" class="btn btn--gold btn--sm">Get Workers</a>
    </div>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu">
    <a href="index.html">Home</a>
    <a href="clients.html">For Clients</a>
    <a href="workers.html">For Workers</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <a href="tel:+441384000000" class="mobile-tel">📞 [INSERT PHONE]</a>
    <div class="mobile-ctas">
      <a href="clients.html#enquiry" class="btn btn--gold">I Need Workers</a>
      <a href="workers.html#register" class="btn btn--outline-gold">Register as Worker</a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer id="main-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="footer-brand-name">OAKWELL <span>WORKFORCE</span></div>
          <div class="footer-brand-tagline">Forged in the Black Country</div>
          <p class="footer-desc">A family-run industrial staffing agency serving manufacturers, warehouses, and logistics businesses across the Black Country and West Midlands. Every worker, personally known to us.</p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            <a href="tel:+441384000000">[INSERT PHONE]</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <a href="mailto:hello@oakwellworkforce.co.uk">hello@oakwellworkforce.co.uk</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Stourbridge, West Midlands</span>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Services</div>
          <div class="footer-links">
            <a href="clients.html">For Clients</a>
            <a href="workers.html">For Workers</a>
            <a href="clients.html#roles">Roles We Fill</a>
            <a href="clients.html#how">How It Works</a>
            <a href="workers.html#pay">Pay &amp; Benefits</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="about.html#values">Our Values</a>
            <a href="contact.html">Contact</a>
            <a href="workers.html#register">Register as Worker</a>
            <a href="clients.html#enquiry">Client Enquiry</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Legal</div>
          <div class="footer-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="privacy.html#cookies">Cookie Policy</a>
            <a href="privacy.html#terms">Terms of Use</a>
          </div>
          <div style="margin-top:24px;">
            <div class="footer-col-title">Coverage</div>
            <div class="footer-links">
              <a href="#">Stourbridge</a>
              <a href="#">Dudley &amp; Brierley Hill</a>
              <a href="#">Halesowen &amp; Cradley Heath</a>
              <a href="#">Wolverhampton</a>
              <a href="#">Kidderminster</a>
              <a href="#">Birmingham South &amp; West</a>
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
          <p>© ${new Date().getFullYear()} Oakwell Workforce Limited. Registered in England &amp; Wales. Company No. [INSERT]. Registered Office: [INSERT ADDRESS], Stourbridge, West Midlands.</p>
          <p style="margin-top:4px;">Employment Business — Conduct of Employment Agencies and Employment Businesses Regulations 2003. ICO Registration No. [INSERT].</p>
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
  <p>We use essential cookies to make our website work. We'd also like to set analytics cookies to understand how you use our site. <a href="privacy.html#cookies">Learn more</a>.</p>
  <div class="cookie-btns">
    <button id="accept-cookies">Accept</button>
    <button id="decline-cookies">Decline</button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Re-run main.js init after injection
  if (window.oakwellInit) window.oakwellInit();
});
