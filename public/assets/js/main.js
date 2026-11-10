/* Epoxy Flooring Ahwatukee — interactions (no dependencies) */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* Header shadow on scroll */
  const header = $('[data-header]');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Services dropdown */
  const toggle = $('.nav__toggle');
  const menu = $('#svc-menu');
  const setMenu = (open) => {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  };
  if (toggle) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    const item = toggle.parentElement;
    let t;
    item.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) { clearTimeout(t); setMenu(true); } });
    item.addEventListener('mouseleave', () => { if (matchMedia('(hover: hover)').matches) t = setTimeout(() => setMenu(false), 180); });
    document.addEventListener('click', (e) => { if (!item.contains(e.target)) setMenu(false); });
    item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) setMenu(false); });
  }

  /* Quote panel + mobile nav (only one open at a time) */
  const panel = $('#quote-panel');
  const quoteBtns = $$('[data-quote-toggle]');
  const burger = $('[data-burger]');
  const mobile = $('#mobile-nav');
  const setPanel = (open, focus = true) => {
    if (!panel) return;
    panel.hidden = !open;
    panel.classList.toggle('is-open', open);
    quoteBtns.forEach((b) => b.setAttribute('aria-expanded', String(open)));
    if (open) {
      setMobile(false);
      if (focus) setTimeout(() => $('input', panel)?.focus({ preventScroll: true }), 60);
    }
  };
  const setMobile = (open) => {
    if (!mobile) return;
    mobile.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) setPanel(false);
  };
  quoteBtns.forEach((b) => b.addEventListener('click', () => setPanel(panel.hidden)));
  $('[data-quote-close]')?.addEventListener('click', () => { setPanel(false); quoteBtns[0]?.focus(); });
  burger?.addEventListener('click', () => setMobile(mobile.hidden));
  $$('a', mobile || document.createElement('div')).forEach((a) => a.addEventListener('click', () => setMobile(false)));
  // Any link to #estimate opens the header form instead of jumping when the page has no on-page form.
  $$('a[href="#quote"]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); setPanel(true); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    setMenu(false);
    if (panel && !panel.hidden) { setPanel(false); quoteBtns[0]?.focus(); }
    if (mobile && !mobile.hidden) { setMobile(false); burger.focus(); }
  });

  /* Reveal on scroll */
  const revealEls = $$('.reveal, .reveal-img');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    // A fully clipped image never counts as intersecting, so .reveal-img is watched through its parent.
    const watch = new Map();
    revealEls.forEach((el) => { const t = el.classList.contains('reveal-img') ? el.parentElement : el; if (!watch.has(t)) watch.set(t, []); watch.get(t).push(el); });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { watch.get(en.target).forEach((el) => el.classList.add('is-in')); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.02 });
    watch.forEach((_, t) => io.observe(t));
  }

  /* Gentle parallax on marked backgrounds */
  const plx = $$('[data-parallax]');
  if (plx.length && !reduce) {
    let ticking = false;
    const run = () => {
      const vh = window.innerHeight;
      plx.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(p * -60).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
    run();
  }

  /* Animated counters */
  const counters = $$('[data-count]');
  const fmt = (n) => Math.round(n).toLocaleString('en-US');
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    const start = performance.now();
    const dur = 1400;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - t, 3))) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { animate(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else counters.forEach(animate);

  /* Table of contents highlighting */
  const tocLinks = $$('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const to = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { tocLinks.forEach((a) => a.classList.remove('is-active')); map.get(en.target.id)?.classList.add('is-active'); }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) to.observe(el); });
  }

  /* Lead forms: validation + submission */
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a 10-digit phone number.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address.'),
    project: (v) => (v ? '' : 'Choose the closest project type.'),
  };
  const check = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const msg = rule(input.value);
    const field = input.closest('.field');
    field.classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    const err = $('.field__error', field);
    if (err) {
      err.id = err.id || `${input.id}-err`;
      input.setAttribute('aria-describedby', err.id);
      err.textContent = msg;
    }
    return !msg;
  };
  $$('[data-lead-form]').forEach((form) => {
    const phone = form.elements.phone;
    phone?.addEventListener('input', () => {
      const d = phone.value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      if (d.length > 6) phone.value = `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
      else if (d.length > 3) phone.value = `(${d.slice(0, 3)}) ${d.slice(3)}`;
      else phone.value = d;
    });
    $$('input, select', form).forEach((el) => {
      el.addEventListener('blur', () => { if (el.value) check(el); });
      el.addEventListener('input', () => { if (el.closest('.field')?.classList.contains('has-error')) check(el); });
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = $('.lead-form__status', form);
      const fields = $$('input[name], select[name]', form).filter((el) => rules[el.name]);
      const ok = fields.map(check).every(Boolean);
      if (!ok) { fields.find((f) => f.getAttribute('aria-invalid') === 'true')?.focus(); return; }
      const btn = $('.lead-form__submit', form);
      btn.disabled = true;
      const label = btn.textContent;
      btn.querySelector('span').textContent = 'Sending…';
      status.className = 'lead-form__status';
      status.textContent = '';
      const data = Object.fromEntries(new FormData(form));
      data.page = location.pathname;
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !out.ok) throw new Error(out.error || 'Request failed');
        form.classList.add('is-sent');
        status.classList.add('is-ok');
        status.textContent = `Thanks, ${data.name.split(' ')[0]} — your request is in. We'll reach out shortly to set up your free estimate.`;
        status.setAttribute('tabindex', '-1');
        status.focus({ preventScroll: true });
      } catch (err) {
        status.classList.add('is-err');
        const tel = document.querySelector('.header-phone')?.getAttribute('href') || '';
        status.innerHTML = `The request didn't go through. Check your connection and try again, or call us at <a href="${tel}">${document.querySelector('.header-phone span')?.textContent || 'our office'}</a>.`;
      } finally {
        btn.disabled = false;
        btn.querySelector('span').textContent = label;
      }
    });
  });

  $$('[data-year]').forEach((y) => (y.textContent = new Date().getFullYear()));
})();
