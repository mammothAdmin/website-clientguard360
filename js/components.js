/* ─────────────────────────────────────────────────
   ClientGuard360 v2 — Shared Web Components
   Usage: <site-header></site-header>
          <site-footer></site-footer>
───────────────────────────────────────────────── */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="nav" id="nav">
  <div class="nav__inner">

    <a href="index.html" class="nav__logo">
      <img src="img/logo_icon.png" width="32" height="32" alt="ClientGuard360">
      ClientGuard360
    </a>

    <ul class="nav__links">

      <li class="nav__item">
        <button class="nav__link">
          Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <ul class="nav__dropdown">
          <li><a class="nav__drop-link" href="client-verification.html">Client Verification<small>Identity, fraud, and more</small></a></li>
          <li><a class="nav__drop-link" href="injury-verification.html">Injury Verification<small>Health records and claim assessment</small></a></li>
          <li><a class="nav__drop-link" href="client-monitoring.html">Client Monitoring<small>Ongoing case-life tracking</small></a></li>
        </ul>
      </li>

      <li class="nav__item"><a class="nav__link" href="about.html">About</a></li>

    </ul>

    <a href="contact.html" class="nav__cta">
      Get Started
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </a>

    <button class="nav__burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>

  </div>

  <div class="nav__mobile" id="mobile-nav">
    <div class="mob-section">Services</div>
    <a href="client-verification.html">Client Verification</a>
    <a href="injury-verification.html">Injury Verification</a>
    <a href="client-monitoring.html">Client Monitoring</a>
    <div class="mob-section">Company</div>
    <a href="about.html">About</a>
    <a href="contact.html" style="color:var(--cyan); font-weight:700;">Get Started</a>
  </div>
</nav>`;

    const current = window.location.pathname.split('/').pop() || 'index.html';
    this.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href').split('/').pop();
      if (href === current) a.classList.add('nav__link--active');
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
<footer>
  <div class="wrap">
    <div class="footer__grid footer__grid--v2">

      <div>
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="img/logo_icon.png" width="28" height="28" alt="ClientGuard360">
            ClientGuard360
          </div>
          <p class="footer__tagline">Client verification, injury verification, and client monitoring for legal intake.</p>
        </div>
      </div>

      <div>
        <div class="footer__col-title">Services</div>
        <ul class="footer__links">
          <li><a href="client-verification.html">Client Verification</a></li>
          <li><a href="injury-verification.html">Injury Verification</a></li>
          <li><a href="client-monitoring.html">Client Monitoring</a></li>
        </ul>
      </div>

      <div>
        <div class="footer__col-title">Company</div>
        <ul class="footer__links">
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Get Started</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
        </ul>
        <div style="margin-top:20px; font-size:13px; color:#64748b;">
          <div>connect@clientguard360.com</div>
        </div>
      </div>

    </div>

    <div class="footer__bottom">
      <span style="display:inline-flex; align-items:center; gap:6px;"><img src="img/logo-icon.svg" width="16" height="16" alt="ClientGuard360"> ClientGuard360</span>
      <a href="https://www.mammothshift-labs.com" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:#64748b; text-decoration:none;">
        Powered by <img src="img/mammothshift-labs.png" width="16" height="16" alt="MammothShift Labs" style="border-radius:3px;"> MammothShift Labs
      </a>
      <a href="privacy.html" style="font-size:13px; color:#64748b;">Privacy Policy</a>
    </div>
  </div>
</footer>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
