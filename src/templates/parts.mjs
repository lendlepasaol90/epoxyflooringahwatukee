import { site } from '../site.mjs';
import { esc } from '../lib/html.mjs';
import { services } from '../content/services/index.mjs';

// Reusable lead form. Every instance posts to /api/lead and is enhanced by main.js.
export function leadForm({ id, variant = 'stacked', heading, intro, button = 'Request my estimate', withMessage = false, preset = '' }) {
  const f = (n) => `${id}-${n}`;
  const options = site.projectTypes
    .map((t) => `<option${t === preset ? ' selected' : ''}>${esc(t)}</option>`)
    .join('');
  return `<form class="lead-form lead-form--${variant}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${heading ? `<p class="lead-form__title">${esc(heading)}</p>` : ''}
  ${intro ? `<p class="lead-form__intro">${esc(intro)}</p>` : ''}
  <div class="lead-form__grid">
    <div class="field">
      <label for="${f('name')}">Name</label>
      <input id="${f('name')}" name="name" type="text" autocomplete="name" required minlength="2" maxlength="80">
      <p class="field__error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${f('phone')}">Phone</label>
      <input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required>
      <p class="field__error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${f('email')}">Email</label>
      <input id="${f('email')}" name="email" type="email" autocomplete="email" required maxlength="120">
      <p class="field__error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${f('project')}">Project type</label>
      <select id="${f('project')}" name="project" required>
        <option value="">Choose one</option>${options}
      </select>
      <p class="field__error" aria-live="polite"></p>
    </div>
    ${
      withMessage
        ? `<div class="field field--wide">
      <label for="${f('message')}">Tell us about the space <span class="field__optional">(optional)</span></label>
      <textarea id="${f('message')}" name="message" rows="4" maxlength="2000" placeholder="Approximate size, current condition, timing"></textarea>
    </div>`
        : ''
    }
    <div class="hp" aria-hidden="true"><label for="${f('company')}">Company</label><input id="${f('company')}" name="company" type="text" tabindex="-1" autocomplete="off"></div>
  </div>
  <button class="btn btn--primary lead-form__submit" type="submit"><span>${esc(button)}</span></button>
  <p class="lead-form__fine">We reply by phone or email. Your details are used only to answer this request — see our <a href="/privacy-policy/">privacy policy</a>.</p>
  <div class="lead-form__status" role="status" aria-live="polite"></div>
</form>`;
}

export const phoneLink = (cls = '') => `<a class="${cls}" href="${site.phoneHref}">${esc(site.phone)}</a>`;

export function header(current = '') {
  const svcLinks = services
    .map((s) => `<li><a href="/${s.slug}/"${current === s.slug ? ' aria-current="page"' : ''}><span>${esc(s.name)}</span><small>${esc(s.tagline)}</small></a></li>`)
    .join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="site-header__bar wrap">
    <a class="logo-slot" href="/" aria-label="${esc(site.name)} home">
      <!-- Logo placeholder: swap these spans for the final logo image. -->
      <span class="logo-slot__mark" aria-hidden="true"></span>
      <span class="logo-slot__name">${esc(site.name)}</span>
    </a>
    <nav class="nav" aria-label="Main">
      <ul class="nav__list">
        <li class="nav__item nav__item--has-menu">
          <button class="nav__link nav__toggle" type="button" aria-expanded="false" aria-controls="svc-menu">Services <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="menu" id="svc-menu">
            <ul class="menu__list">${svcLinks}</ul>
          </div>
        </li>
        <li class="nav__item"><a class="nav__link" href="/about-us/"${current === 'about' ? ' aria-current="page"' : ''}>About us</a></li>
        <li class="nav__item"><a class="nav__link" href="/service-areas/"${current === 'areas' ? ' aria-current="page"' : ''}>Service areas</a></li>
        <li class="nav__item"><a class="nav__link" href="/contact-us/"${current === 'contact' ? ' aria-current="page"' : ''}>Contact</a></li>
      </ul>
    </nav>
    <div class="site-header__actions">
      <a class="header-phone" href="${site.phoneHref}"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg><span>${esc(site.phone)}</span></a>
      <button class="btn btn--primary btn--sm" type="button" data-quote-toggle aria-expanded="false" aria-controls="quote-panel">Free estimate</button>
      <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span><span></span></button>
    </div>
  </div>
  <div class="quote-panel" id="quote-panel" hidden>
    <div class="quote-panel__inner wrap">
      <div class="quote-panel__copy">
        <p class="quote-panel__title">Tell us about your floor</p>
        <p>Four quick details and we'll be in touch to set up a free on-site look at your floor.</p>
        <p class="quote-panel__alt">Prefer to talk? ${phoneLink()}</p>
      </div>
      ${leadForm({ id: 'header-form', variant: 'inline', button: 'Send request' })}
      <button class="quote-panel__close" type="button" data-quote-close aria-label="Close estimate form">×</button>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    <nav aria-label="Mobile">
      <p class="mobile-nav__label">Services</p>
      <ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul>
      <ul class="mobile-nav__main">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us/">About us</a></li>
        <li><a href="/service-areas/">Service areas</a></li>
        <li><a href="/contact-us/">Contact</a></li>
      </ul>
      <a class="btn btn--primary btn--block" href="${site.phoneHref}">Call ${esc(site.phone)}</a>
    </nav>
  </div>
</header>`;
}

export function footer() {
  const m = site.map;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(m.query)}&ll=${m.lat},${m.lng}&z=${m.zoom}&output=embed`;
  const half = Math.ceil(services.length / 2);
  return `<footer class="site-footer">
  <div class="wrap site-footer__grid">
    <div class="site-footer__brand">
      <a class="logo-slot logo-slot--footer" href="/" aria-label="${esc(site.name)} home"><span class="logo-slot__mark" aria-hidden="true"></span><span class="logo-slot__name">${esc(site.name)}</span></a>
      <p>Garage, residential and commercial floor coatings for Ahwatukee Foothills and the surrounding East Valley.</p>
      <p class="site-footer__phone">${phoneLink()}</p>
      ${site.email ? `<p><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>` : ''}
    </div>
    <nav class="site-footer__links" aria-label="Footer services">
      <p class="site-footer__head">Coatings</p>
      <ul>${services.slice(0, half).map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul>
    </nav>
    <nav class="site-footer__links" aria-label="Footer more">
      <p class="site-footer__head">More</p>
      <ul>${services.slice(half).map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}
        <li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li></ul>
    </nav>
    <div class="site-footer__map">
      <p class="site-footer__head">Where we work</p>
      <div class="map-frame">
        <iframe title="Map of ${esc(m.query)}" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <p class="site-footer__small">Serving homes and businesses across ${esc(site.cityLong)} and nearby communities.</p>
    </div>
  </div>
  <div class="wrap site-footer__base">
    <p>© <span data-year>2026</span> ${esc(site.name)}</p>
    <p><a href="/privacy-policy/">Privacy policy</a> <a href="/sitemap.xml">Sitemap</a></p>
  </div>
</footer>
<a class="sticky-call" href="${site.phoneHref}" aria-label="Call ${esc(site.phone)}"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg> Call</a>`;
}
