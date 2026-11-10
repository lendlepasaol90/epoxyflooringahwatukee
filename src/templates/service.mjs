import { site } from '../site.mjs';
import { esc, md, inline, img, abs } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { bySlug } from '../content/services/index.mjs';

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function block(b, i) {
  const id = b.id || slugify(b.heading);
  const head = `<h2 id="${id}">${esc(b.heading)}</h2>`;
  switch (b.kind) {
    case 'split':
      return `<section class="block block--split${b.flip ? ' is-flip' : ''}" aria-labelledby="${id}">
  <div class="prose reveal">${head}${md(b.body)}</div>
  <figure class="block__media"><div class="arch reveal-img">${img(b.image, { sizes: '(max-width: 1020px) 90vw, 360px', widths: [400, 700, 900], ratio: 0.8 })}</div></figure>
</section>`;
    case 'options':
      return `<section class="block" aria-labelledby="${id}">
  <div class="prose reveal">${head}${md(b.body || '')}</div>
  <div class="options">${b.items.map((o, n) => `<article class="reveal reveal-delay-${n % 3}"><h3>${esc(o.name)}</h3><p>${inline(o.body)}</p></article>`).join('')}</div>
  ${b.after ? `<div class="prose" style="margin-top:1.5rem">${md(b.after)}</div>` : ''}
</section>`;
    case 'uses':
      return `<section class="block" aria-labelledby="${id}">
  <div class="prose reveal">${head}${md(b.body || '')}</div>
  <div class="uses reveal">${b.items.map((u) => `<div><strong>${esc(u.name)}</strong><span>${inline(u.body)}</span></div>`).join('')}</div>
</section>`;
    case 'steps':
      return `<section class="block" aria-labelledby="${id}">
  <div class="prose reveal">${head}${md(b.body || '')}</div>
  <ol class="steps">${b.items.map((s) => `<li class="reveal"><div><h3>${esc(s.name)}</h3><p>${inline(s.body)}</p></div></li>`).join('')}</ol>
</section>`;
    case 'callout':
      return `<section class="block block--callout reveal" aria-labelledby="${id}"><div class="prose">${head}${md(b.body)}</div></section>`;
    case 'local':
      return `<section class="block block--local" aria-labelledby="${id}">
  <div class="block__bg" aria-hidden="true">${img(b.image || 'valleyView', { sizes: '(max-width: 1020px) 100vw, 820px', widths: [600, 1000, 1400], alt: '' })}</div>
  <div class="prose">${head}${md(b.body)}</div>
</section>`;
    case 'table':
      return `<section class="block" aria-labelledby="${id}">
  <div class="prose reveal">${head}${md(b.body || '')}</div>
  <div class="compare-wrap reveal"><table class="compare"><thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
  <tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
  ${b.after ? `<div class="prose" style="margin-top:1.5rem">${md(b.after)}</div>` : ''}
</section>`;
    default:
      return `<section class="block prose reveal" aria-labelledby="${id}">${head}${md(b.body)}</section>`;
  }
}

export function renderService(s) {
  const path = `/${s.slug}/`;
  const trail = [{ name: 'Home', path: '/' }, { name: s.name, path }];
  const toc = s.blocks.map((b) => `<li><a href="#${b.id || slugify(b.heading)}">${esc(b.toc || b.heading)}</a></li>`).join('');
  const related = (s.related || []).map((r) => bySlug[r]).filter(Boolean);

  const body = `
<section class="page-hero page-hero--${s.heroStyle || 'arch'}">
  <div class="page-hero__bg" aria-hidden="true">${img(s.heroBackdrop || 'heroBackdrop', { widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap">
    ${crumbs([{ name: 'Home', path: '/' }, { name: s.name, path }])}
    <div class="page-hero__grid">
      <div class="reveal is-in">
        <h1>${esc(s.h1)}</h1>
        <p class="lede">${inline(s.lede)}</p>
        <div class="page-hero__ctas">
          <a class="btn btn--primary" href="#estimate">Get a free estimate</a>
          <a class="btn btn--ghost" href="${site.phoneHref}">Call ${esc(site.phone)}</a>
        </div>
        ${s.chips ? `<ul class="page-hero__meta">${s.chips.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
      </div>
      <figure class="page-hero__media" style="margin:0"><div class="arch">${img(s.image, { eager: true, sizes: s.heroStyle === 'band' ? '100vw' : '(max-width: 1020px) 90vw, 480px', widths: s.heroStyle === 'band' ? [800, 1400, 2000] : [480, 800, 1000], ratio: s.heroStyle === 'band' ? 21 / 8 : 4 / 4.6 })}</div></figure>
    </div>
  </div>
</section>

<div class="section section--tight">
  <div class="wrap svc-layout">
    <article>
      <div class="prose lede-block block reveal">${md(s.intro)}</div>
      ${s.blocks.map(block).join('\n')}
    </article>
    <aside class="svc-aside" aria-label="On this page">
      <nav class="toc" aria-label="Table of contents"><p>On this page</p><ol>${toc}<li><a href="#faq">Questions</a></li></ol></nav>
      <div class="form-card">
        <p class="lead-form__title" style="font-size:1.25rem">Free on-site estimate</p>
        <p class="muted" style="font-size:0.94rem">We measure, check the slab and quote in writing. No charge, no pressure.</p>
        <a class="btn btn--primary btn--block" href="#estimate">Start my estimate</a>
        <p style="margin:0.9rem 0 0;font-size:0.94rem">Or call ${phoneLink()}</p>
      </div>
    </aside>
  </div>
</div>

<section class="section section--paper" id="faq" aria-labelledby="faq-h">
  <div class="wrap faq">
    <div class="reveal"><h2 id="faq-h">${esc(s.faqHeading || `${s.name}: common questions`)}</h2><p class="muted">${inline(s.faqIntro || 'Straight answers to what people ask us most before they book.')}</p></div>
    <div class="faq__list">${s.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq__answer">${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>

${related.length ? `<section class="section section--tight" aria-labelledby="rel-h">
  <div class="wrap">
    <h2 id="rel-h" class="reveal">${esc(s.relatedHeading || 'Related coatings')}</h2>
    <div class="related">${related.map((r) => `<a href="/${r.slug}/" class="reveal"><figure>${img(r.image, { sizes: '(max-width: 680px) 90vw, 380px', widths: [400, 700], ratio: 1.6 })}</figure><div><strong>${esc(r.name)}</strong><span>${esc(r.tagline)}</span></div></a>`).join('')}</div>
  </div>
</section>` : ''}

<section class="section closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img(s.closerImage || 'cactusGold', { widths: [800, 1400], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="reveal">
      <h2 id="est-h">${esc(s.cta.heading)}</h2>
      ${md(s.cta.body)}
      <ul class="closer__contact"><li><span>Call or text</span>${phoneLink()}</li><li><span>Service area</span><a href="/service-areas/">${esc(site.cityLong)} &amp; nearby</a></li></ul>
    </div>
    <div class="form-card reveal reveal-delay-1">${leadForm({ id: `${s.slug}-form`, heading: 'Request your estimate', withMessage: true, preset: s.formPreset })}</div>
  </div>
</section>`;

  const schema = [
    {
      '@type': 'Service',
      '@id': abs(path) + '#service',
      name: s.name,
      serviceType: s.serviceType || s.name,
      description: s.description,
      provider: { '@id': abs('/#business') },
      areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: `${a.name}, AZ` })),
      url: abs(path),
    },
    {
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })),
    },
  ];
  return layout({ path, title: s.title, description: s.description, body, current: s.slug, image: s.image, schema, breadcrumbs: trail });
}
