import { site } from '../site.mjs';
import { esc, md, img } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

function simpleHero({ title, lede, image = 'heroBackdrop', trail }) {
  return `<section class="page-hero page-hero--band">
  <div class="page-hero__bg" aria-hidden="true">${img(image, { widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap">
    ${crumbs(trail)}
    <div class="reveal is-in"><h1>${esc(title)}</h1><p class="lede">${lede}</p></div>
  </div>
</section>`;
}

const sideForm = (id, preset) => `<aside class="svc-aside"><div class="form-card">${leadForm({ id, heading: 'Free estimate', intro: 'Tell us about the floor and we will be in touch to schedule a visit.', preset })}</div></aside>`;

export function renderAbout() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About us', path: '/about-us/' }];
  const body = `${simpleHero({ title: 'About our flooring company', lede: 'A local concrete coatings crew working out of the Foothills, focused on careful prep, honest quotes and floors that survive Arizona summers.', image: 'desertHome', trail })}
<section class="section section--tight">
  <div class="wrap page-body">
    <div class="prose">
      ${md(`Our approach comes from a simple view of the trade: most coating failures are preparation failures. The resins on the market today are very good. What separates a floor that lasts fifteen years from one that peels by the second summer is almost always what happened to the concrete before the first coat went down, and whether the system was chosen for the conditions it would face.

That shapes everything about how we work. We spend more time on grinding, testing and repair than some companies spend on the whole job. We explain what we find in plain language. And we put it all in writing so you know exactly what you are paying for.`)}
      <h2>What we believe about floors</h2>
      <div class="values">
        <div><strong>Prep is the product</strong><span>Diamond grinding, crack repair and moisture checks come standard, not as upsells.</span></div>
        <div><strong>Right system, not the priciest</strong><span>A laundry room does not need a warehouse coating. We recommend what the space needs.</span></div>
        <div><strong>Clear paperwork</strong><span>Itemized estimates with layers, cure times and care instructions spelled out.</span></div>
        <div><strong>Respect for your home</strong><span>Dust control, protected surfaces and a clean site at the end of every day.</span></div>
      </div>
      ${md(`### Who we work with

Most of our work is residential: garages first, then casitas, laundry rooms, home gyms, patios and full interior floors. We also take on commercial and light industrial projects, including retail and restaurant floors, salons, clinics, auto bays, shops and warehouse space around Ahwatukee, Tempe, Chandler and the south Phoenix area.

### Why Ahwatukee

The village has thousands of garages that bake every summer and plenty of older slabs that have been painted, sealed and patched over the decades. That combination calls for people who understand both the chemistry and the climate. It is also a community where people talk to their neighbors, so we would rather earn a recommendation than chase a quick sale.

### What to expect when you call

We will ask a few questions about the space, then set a time to visit. At the visit we measure, check the slab, show you flake and color samples, and talk through two or three options that make sense. Your written estimate follows, with no pressure and no expiring "today only" discount.`)}
      <p><a class="btn btn--primary" href="/contact-us/">Contact us</a> <a class="btn btn--ghost" href="/garage-floor-coatings/">See garage coatings</a></p>
    </div>
    ${sideForm('about-form')}
  </div>
</section>`;
  return layout({
    path: '/about-us/',
    title: 'About Us | Epoxy Flooring Ahwatukee',
    description: 'Meet the Ahwatukee floor coating crew that puts concrete prep first. How we work, what we believe about floors and what to expect from your free estimate.',
    body,
    current: 'about',
    image: 'desertHome',
    breadcrumbs: trail,
  });
}

const areaDetail = {
  'Ahwatukee Foothills': 'Our home turf. From the older homes around the Lakes and Lakewood to the larger garages in the Foothills, Club West and Mountain Park Ranch, we know the slabs, the HOA rules and the summer heat these floors face.',
  Tempe: 'South Tempe homes along the Kyrene corridor and around the lakes are minutes away across the I-10. We also coat shop floors and small commercial units in Tempe business parks.',
  Chandler: 'West Chandler neighborhoods, garages near the Price corridor and light commercial spaces. Chandler homes often have newer slabs that are ideal candidates for fast polyaspartic systems.',
  Phoenix: 'South Mountain Village and central Phoenix projects by appointment, including older homes with painted or sealed garage floors that need full removal before coating.',
  Laveen: 'Newer construction on the west side of South Mountain. New slabs need time to cure before coating, so we will help you time the work after you move in.',
  Gilbert: 'Residential garages, home gyms and workshops. Many Gilbert homeowners pair a flake garage floor with a coated patio or side yard.',
  Guadalupe: 'Homes and small businesses right next to the Foothills, where we often handle crack repair and coating together.',
  Mesa: 'West Mesa shops, warehouses and homes. Commercial and industrial jobs here often call for high-build epoxy or polyurea with striping.',
  'Sun Lakes': 'Golf cart garages, lanais and patios. We often recommend a lightly textured topcoat here for steady footing.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas/' }];
  const body = `${simpleHero({ title: 'Areas we serve around Ahwatukee', lede: 'Based in the Foothills, covering the southeast Valley for residential projects and further for commercial work.', image: 'valleyView', trail })}
<section class="section section--tight">
  <div class="wrap">
    <div class="prose narrow">${md(`Travel time matters on coating jobs. Resin systems have working windows, especially in summer, and a crew that is close by can start early and react quickly if weather shifts. That is why we keep our residential work concentrated around Ahwatukee and the communities that border it.

If your town is not listed, give us a call. We take on commercial and warehouse projects across a wider area and will tell you straight away if we are not the right fit.`)}</div>
    <div class="area-cards">
      ${site.serviceAreas.map((a) => `<article class="reveal"><h2>${esc(a.name)}</h2><p>${esc(areaDetail[a.name] || a.note)}</p></article>`).join('')}
    </div>
    <div class="prose narrow" style="margin-top:3rem">
      <h2>Services available in every area</h2>
      <ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a>: ${esc(s.tagline)}</li>`).join('')}</ul>
    </div>
  </div>
</section>
<section class="section closer section--paper" id="estimate">
  <div class="wrap closer__grid">
    <div><h2>Check if we cover your address</h2><p>Send your details and the type of floor, and we will confirm coverage when we reach out to schedule.</p><p>Or call ${phoneLink()}</p></div>
    <div class="form-card">${leadForm({ id: 'areas-form', heading: 'Request an estimate', withMessage: true })}</div>
  </div>
</section>`;
  return layout({
    path: '/service-areas/',
    title: 'Service Areas | Epoxy Flooring Ahwatukee, Tempe & Chandler',
    description: 'Epoxy and garage floor coatings for Ahwatukee Foothills, Tempe, Chandler, south Phoenix, Laveen, Gilbert, Guadalupe, Mesa and Sun Lakes.',
    body,
    current: 'areas',
    image: 'valleyView',
    breadcrumbs: trail,
  });
}

export function renderContact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us/' }];
  const body = `${simpleHero({ title: 'Contact us', lede: 'Book a free estimate, ask about a coating system or check our schedule. The form takes under a minute.', image: 'cactusGold', trail })}
<section class="section section--tight" id="estimate">
  <div class="wrap closer__grid">
    <div class="prose">
      <h2>Talk to us about your floor</h2>
      <p>The more we know up front, the more useful the first visit will be. Helpful details include the rough size of the space, whether there is an existing coating, any cracks or stains you are worried about, and when you would like the work done.</p>
      <ul class="closer__contact">
        <li><span>Phone</span>${phoneLink()}</li>
        ${site.email ? `<li><span>Email</span><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>` : ''}
        <li><span>Service area</span><a href="/service-areas/">${esc(site.cityLong)} and nearby</a></li>
      </ul>
      <h3 style="margin-top:2rem">What happens next</h3>
      <ol><li>We get in touch to set a time for your estimate.</li><li>We visit, measure, test the slab and show samples.</li><li>You receive a written, itemized quote.</li></ol>
    </div>
    <div class="form-card">${leadForm({ id: 'contact-form', heading: 'Request your free estimate', withMessage: true })}</div>
  </div>
</section>`;
  return layout({
    path: '/contact-us/',
    title: 'Contact Us | Free Epoxy Floor Estimates in Ahwatukee',
    description: 'Request a free, in-person estimate for garage, residential or commercial epoxy flooring in Ahwatukee Foothills and nearby communities.',
    body,
    current: 'contact',
    image: 'cactusGold',
    breadcrumbs: trail,
  });
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Privacy policy', path: '/privacy-policy/' }];
  const body = `${simpleHero({ title: 'Privacy policy', lede: 'How we handle the information you send through this website.', trail })}
<section class="section section--tight"><div class="wrap prose narrow">${md(`## What we collect

When you submit a form on this site, we receive the details you enter: your name, phone number, email address, project type and any message. We also receive the page you sent it from. We do not use tracking cookies on this site.

## How we use it

We use your information only to respond to your request, schedule an estimate and communicate with you about your project. We do not sell or rent your information.

## Third parties

Form submissions may be delivered to us through an email or workflow service so we can respond. The map in the footer is provided by Google Maps and the photos are served from Unsplash's image network; those services may collect standard technical data such as your IP address under their own privacy policies.

## Your choices

You can ask us to update or delete the information you have sent by contacting us using the details on our [contact page](/contact-us/).

## Changes

We may update this policy from time to time. The current version is always on this page.`)}</div></section>`;
  return layout({ path: '/privacy-policy/', title: 'Privacy Policy | Epoxy Flooring Ahwatukee', description: 'How Epoxy Flooring Ahwatukee collects, uses and protects the information you submit through estimate and contact forms on this website.', body, breadcrumbs: trail });
}

export function render404() {
  const body = `<section class="section notfound"><div class="wrap narrow" style="margin-inline:auto">
  <h1>That page is not here</h1>
  <p class="lede">The link may be old or mistyped. Try one of these instead.</p>
  <p><a class="btn btn--primary" href="/">Go to the homepage</a> <a class="btn btn--ghost" href="/garage-floor-coatings/">Garage floor coatings</a> <a class="btn btn--ghost" href="/contact-us/">Contact us</a></p>
</div></section>`;
  return layout({ path: '/404.html', title: 'Page not found | Epoxy Flooring Ahwatukee', description: 'The page you requested could not be found.', body }).replace(
    '<meta name="robots" content="index, follow, max-image-preview:large">',
    '<meta name="robots" content="noindex">',
  );
}
