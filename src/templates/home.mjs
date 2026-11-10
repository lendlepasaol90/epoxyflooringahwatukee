import { site } from '../site.mjs';
import { esc, md, inline, img, beginDedupe, endDedupe } from '../lib/html.mjs';
import { layout } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const faqs = [
  {
    q: 'How long before I can park in my garage again?',
    a: 'It depends on the system. With a polyaspartic topcoat, most garages are walkable the same evening and ready for cars in roughly 24 to 48 hours. A full epoxy build needs longer, usually around three days before vehicle traffic and about a week for full chemical cure. We give you the exact window for your floor before we start, and in July we usually beat it because heat speeds the cure.',
  },
  {
    q: 'Will the coating peel when I pull in on a hot afternoon?',
    a: 'Peeling under hot tires, usually called hot-tire pickup, happens when a thin coating sits on a slab that was never properly opened up. Tires coming off a 115-degree street soften cheap coatings, and the bond lets go. We diamond-grind every slab so the coating soaks into clean, porous concrete, and we use base coats and topcoats rated for that kind of heat. That combination is what stops the peeling, not a thicker layer of paint.',
  },
  {
    q: 'Do you work on floors that already have a coating?',
    a: 'Yes. If an older coating is failing, we grind it off down to sound concrete before anything new goes down. If it is well bonded and only worn, sometimes it can be scuffed and recoated, which saves money. We test it on the first visit and tell you which situation you are in.',
  },
  {
    q: 'What about cracks and the control joints in my slab?',
    a: 'Hairline and settlement cracks are cleaned out and filled with a repair material before coating. Control joints, the straight cuts in the slab, are usually honored, meaning we keep them visible so the floor can still move a little without cracking the coating. Some homeowners prefer them filled for a seamless look; we will talk through the trade-off with you.',
  },
  {
    q: 'Is an epoxy floor slippery?',
    a: 'A bare high-gloss coating can be slick when wet, especially with dusty monsoon water tracked in. Flake floors already have some texture, and we can broadcast a fine anti-slip additive into the topcoat to add grip without making it hard to mop. Tell us who uses the space, kids, older relatives, a dog, and we will set the texture accordingly.',
  },
  {
    q: 'Does my HOA need to approve a garage floor coating?',
    a: 'Interior garage floors usually do not need approval, but driveways, front walks and anything visible from the street often do. Check your CC&Rs before you commit to a color for an exterior surface. We are happy to provide product names and color samples for your architectural review submission.',
  },
  {
    q: 'How much does a garage floor coating cost?',
    a: 'Price depends on square footage, slab condition, the system you choose and how much repair work the concrete needs. A two-car garage with a sound slab and a standard flake system is very different from a three-car garage with old paint to remove and a cracked apron. We measure and look at the slab in person, then give you a written price per system so you can compare.',
  },
];

export function renderHome() {
  beginDedupe(['blueFloor', 'flakeGarage', 'greyTexture', 'heroBackdrop', 'heroFloor', 'palmHome', 'warehouseShine', 'xFlakeRust', 'xTerrazzo']);
  const s = site;
  const body = `
<section class="home-hero" aria-labelledby="hero-h">
  <div class="home-hero__backdrop" aria-hidden="true">${img('heroBackdrop', { keep: true, widths: [800, 1400, 2000], alt: '', eager: true })}</div>
  <div class="wrap home-hero__grid">
    <div class="reveal is-in">
      <h1 id="hero-h">Garage and concrete floors built for Ahwatukee summers</h1>
      <p class="lede">We grind, repair and coat concrete for homes and businesses in the Foothills and across the East Valley. Epoxy, flake, metallic, polyaspartic and polyurea systems, chosen for the slab you actually have and the heat it actually sees.</p>
      <div class="home-hero__ctas">
        <a class="btn btn--primary" href="#estimate">Book a free estimate</a>
        <a class="btn btn--ghost" href="#services">See floor coatings</a>
      </div>
      <dl class="home-hero__facts">
        <div><dt><span data-count="9">9</span></dt><dd>coating systems we install</dd></div>
        <div><dt><span data-count="100" data-suffix="+">100+</span></dt><dd>Phoenix days a year above 100°F</dd></div>
        <div><dt><span data-count="24">24</span>h</dt><dd>typical walk-on time for polyaspartic</dd></div>
      </dl>
    </div>
    <div class="home-hero__visual">
      <span class="arch-ring" aria-hidden="true"></span>
      <div class="arch">${img('heroFloor', { keep: true, eager: true, sizes: '(max-width: 1020px) 90vw, 520px', widths: [480, 760, 1040], ratio: 0.8 })}</div>
      <p class="home-hero__chip"><strong>Ground, not etched</strong>Every slab is diamond-ground before coating so the bond holds when tires come in hot.</p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="intro-h">
  <div class="wrap intro-split">
    <h2 id="intro-h" class="reveal">A flooring crew that starts with the concrete, not the color chart</h2>
    <div class="prose reveal reveal-delay-1">
      <p>Most of the floors we are asked to fix in Ahwatukee did not fail because of a bad color choice. They failed because somebody rolled a coating onto dusty, sealed or damp concrete and hoped for the best. Within a summer or two the floor lifted under the tires, yellowed by the garage door or turned chalky where the afternoon sun hits it.</p>
      <p>So our work starts underneath. We look at the slab, check for moisture, mark the cracks and figure out what is already on the surface. Then we grind it, repair it and pick a coating system that fits how you use the space. A garage that holds a truck, a golf cart and a workbench needs something different from a casita floor or a salon on Ray Road.</p>
      <p>We install <a href="/garage-floor-coatings/">garage floor coatings</a>, <a href="/residential-epoxy-flooring/">residential epoxy</a> for interior rooms, <a href="/decorative-flake-flooring/">decorative flake</a> and <a href="/metallic-epoxy-flooring/">metallic epoxy</a> finishes, fast-curing <a href="/polyaspartic-floor-coatings/">polyaspartic</a> and <a href="/polyurea-floor-coatings/">polyurea</a> systems, <a href="/patio-concrete-coatings/">patio and pool deck coatings</a>, and floors for <a href="/commercial-epoxy-flooring/">commercial spaces</a> and <a href="/warehouse-floor-coatings/">warehouses</a>. Every estimate is free, done in person, and written down so you can compare options side by side.</p>
    </div>
  </div>
</section>

<section class="section section--paper" id="services" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="svc-h">Floor coatings we install</h2>
      <p class="muted">Nine systems, each with its own page explaining finishes, cure times, cost drivers and where it makes sense. Not sure which one fits? That is what the estimate visit is for.</p>
    </div>
    <ul class="svc-index">
      ${services
        .map(
          (sv) => `<li class="reveal"><a href="/${sv.slug}/">
        <span class="svc-index__name">${esc(sv.name)}</span>
        <span class="svc-index__desc">${esc(sv.summary)}</span>
        <span class="svc-index__go" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span>
      </a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="garage-h">
  <div class="wrap chapter">
    <div class="chapter__media">
      <div class="arch reveal-img">${img('garageTruck', { sizes: '(max-width: 1020px) 90vw, 560px', widths: [500, 800, 1100], ratio: 5 / 6 })}</div>
      <p class="chapter__note reveal"><strong>Three-car, tandem, RV bay</strong>Larger Foothills garages are common. We price by the real square footage, not a flat "two-car" rate.</p>
    </div>
    <div class="prose reveal">
      <h2 id="garage-h">Garage floors that handle 120-degree afternoons</h2>
      <p>The garage is the hardest-working floor in most Ahwatukee homes, and the hottest. With the door closed in July, the air inside can run well past 110 degrees, and the slab soaks up that heat for hours. Tires roll in hot, drip coolant or pool chemicals, and every monsoon storm blows fine dust under the door seal.</p>
      <p>A good garage system shrugs that off. Ours typically pairs a penetrating epoxy or polyurea base coat with a decorative flake broadcast and a UV-stable polyaspartic topcoat. The base grabs the ground concrete, the flakes hide dust and add grip, and the topcoat resists hot tires, chemicals and the sun that hits the first few feet inside the door.</p>
      <ul class="checks">
        <li>Diamond grinding and crack repair included in every quote</li>
        <li>Flake blends from tight, speckled granite looks to bold, full-coverage chips</li>
        <li>Stem walls and the first few inches of wall can be coated for a cleaner edge</li>
      </ul>
      <p><a class="text-link" href="/garage-floor-coatings/">How our garage coatings are built</a></p>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="res-h">
  <div class="wrap chapter chapter--flip">
    <div class="chapter__media chapter__media--wide">
      <div class="arch reveal-img">${img('openRoom', { sizes: '(max-width: 1020px) 90vw, 560px', widths: [500, 800, 1100], ratio: 4 / 3 })}</div>
    </div>
    <div class="prose reveal">
      <h2 id="res-h">Residential epoxy beyond the garage</h2>
      <p>Coated concrete has moved indoors in a lot of Arizona homes. It stays cool underfoot, it cleans with a damp mop, and it does not trap dust and allergens the way carpet does. Homeowners ask us about it for casitas, laundry rooms, home gyms, mudrooms off the garage, game rooms and full open-plan living areas where the tile is coming up anyway.</p>
      <p>Interior floors get a different approach than garages. We pay closer attention to sheen, color consistency across large areas and how the floor reads next to cabinetry and wall color. Satin finishes hide footprints better than full gloss, and a sealed metallic floor can carry a whole room on its own. See our <a href="/residential-epoxy-flooring/">residential epoxy flooring</a> page for room-by-room advice.</p>
    </div>
  </div>
</section>

<section class="section section--stone" aria-labelledby="biz-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="biz-h">Commercial and industrial floors</h2>
      <p>Businesses need floors that stay open. We schedule around operating hours, phase larger jobs so part of the space keeps working, and choose systems with cure times that fit your calendar.</p>
    </div>
    <div class="duo">
      <article class="duo__panel reveal">
        <figure>${img('kitchen', { sizes: '(max-width: 680px) 90vw, 600px', widths: [500, 800, 1200], ratio: 16 / 9 })}</figure>
        <div class="duo__body">
          <h3>Commercial epoxy flooring</h3>
          <p>Retail floors, restaurant back-of-house, salons, medical and dental suites, fitness studios, showrooms and office break rooms. These spaces need a seamless surface that is easy to sanitize, holds up to rolling carts and chairs, and still looks sharp in front of customers. Common choices are solid-color epoxy with a urethane or polyaspartic topcoat, flake systems in high-traffic corridors, and slip-resistant textures for wet areas.</p>
          <p><a class="text-link" href="/commercial-epoxy-flooring/">Commercial flooring details</a></p>
        </div>
      </article>
      <article class="duo__panel reveal reveal-delay-1">
        <figure>${img('warehouseShine', { sizes: '(max-width: 680px) 90vw, 600px', widths: [500, 800, 1200], ratio: 16 / 9 })}</figure>
        <div class="duo__body">
          <h3>Industrial and warehouse solutions</h3>
          <p>Warehouses, distribution space, fabrication shops, auto bays and storage units along the I-10 and into Tempe and Chandler. Here the priorities shift to forklift traffic, dust control, chemical resistance and visibility. We use thicker high-build epoxies or polyurea, add safety striping and walkway markings, and can include a light-reflective color that brightens the whole building without new fixtures.</p>
          <p><a class="text-link" href="/warehouse-floor-coatings/">Warehouse coating details</a></p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="deco-h">
  <div class="wrap">
    <div class="texture-band">
      <div class="texture-band__bg" aria-hidden="true">${img('xFlakeRust', { keep: true, widths: [800, 1400], alt: '' })}</div>
      <div class="texture-band__grid">
        <div class="reveal">
          <h2 id="deco-h">Decorative and metallic finishes</h2>
          <p>Not every floor needs to look like a garage. Decorative systems use the same tough resins, but the finish becomes the design. Metallic epoxy uses suspended mica pigments that we move by hand while the resin is wet, so the floor ends up with depth and drift that looks like polished stone, poured marble or moving water. No two are the same, which is the point.</p>
          <p>Flake floors are the practical cousin. Vinyl chips broadcast into the base coat give a speckled, terrazzo-like texture that hides dust and wear. In Ahwatukee, warm blends with tan, cream and a little charcoal tend to sit well next to stucco and desert landscaping.</p>
          <p><a class="text-link" href="/metallic-epoxy-flooring/">Metallic epoxy</a>&ensp;&ensp;<a class="text-link" href="/decorative-flake-flooring/">Decorative flake</a></p>
        </div>
        <ul class="finish-list reveal reveal-delay-1">
          <li><strong>Metallic swirl</strong><span>Hand-worked pearl, copper, bronze or slate tones with real depth. Best indoors or in a showcase garage.</span></li>
          <li><strong>Full-broadcast flake</strong><span>Chips cover the whole base coat for a granite-like look that hides almost everything.</span></li>
          <li><strong>Partial-broadcast flake</strong><span>A solid color with lighter chip coverage, a cleaner look for laundry rooms and studios.</span></li>
          <li><strong>Solid color with satin topcoat</strong><span>Simple, modern and easy to keep clean. Popular for gyms and commercial back rooms.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="why-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="why-h">Why choose our epoxy flooring services</h2>
      <p>We would rather show you how we work than make big promises. These are the habits that separate a floor that lasts from one that peels.</p>
    </div>
    <div class="commit">
      <article class="commit__item reveal"><h3>We grind every slab</h3><p>Acid etching and a quick rinse leave a weak surface. Diamond grinding removes sealers, laitance and old coatings and opens the pores so the base coat bonds into the concrete itself, not just onto it.</p></article>
      <article class="commit__item reveal reveal-delay-1"><h3>We test before we quote</h3><p>Moisture, old sealers and soft concrete change what will work. We check on the first visit, so the price you see is for the floor you have.</p></article>
      <article class="commit__item reveal"><h3>Written, itemized estimates</h3><p>Prep, repairs, system layers and cure times are listed, so you can compare us fairly with anyone else.</p></article>
      <article class="commit__item reveal reveal-delay-1"><h3>Systems matched to heat</h3><p>We favor UV-stable topcoats and products that tolerate high slab temperatures, and we schedule summer pours for early mornings.</p></article>
      <article class="commit__item reveal reveal-delay-2"><h3>Clean, careful crews</h3><p>Dust-controlled grinding, protected walls and doors, and a garage you can recognize when we leave.</p></article>
    </div>
  </div>
</section>

<section class="fullbleed" aria-labelledby="heat-h">
  <div class="fullbleed__bg" data-parallax aria-hidden="true">${img('valleyView', { widths: [800, 1400, 2000, 2600], alt: '' })}</div>
  <div class="wrap fullbleed__content">
    <div class="fullbleed__box reveal">
      <h2 id="heat-h">Heat, sun and monsoon dust: what Ahwatukee floors deal with</h2>
      <p>Floors here face a specific set of problems. Garage slabs heat up all day and cool overnight, which works the concrete and anything bonded to it. Low western sun pours through open garage doors and turns cheaper epoxies amber. Summer storms push fine dust and water under doors, and pool chemicals, fertilizer and coolant end up on the floor sooner or later.</p>
      <div class="fullbleed__temps">
        <div><b>110°F+</b><span>common July air temps in a closed garage</span></div>
        <div><b>June–Sept</b><span>monsoon season dust and runoff</span></div>
        <div><b>UV</b><span>afternoon sun on west-facing doors</span></div>
      </div>
      <p>So we plan around all of it. Coatings go down in the cooler morning hours when resins behave, topcoats are chosen for UV stability, and textures are set so a wet floor still has grip.</p>
      <a class="btn btn--light" href="#estimate">Get a floor built for the heat</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="proc-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="proc-h">Our flooring installation process</h2>
      <p>A typical two- or three-car garage takes one to two days on site. Larger homes and commercial projects get a written schedule before we start.</p>
    </div>
    <ol class="path">
      <li class="reveal"><h3>Estimate visit</h3><p>We measure, check moisture and existing coatings, look at cracks and talk through how you use the space.</p></li>
      <li class="reveal reveal-delay-1"><h3>Grind and repair</h3><p>Dust-controlled diamond grinding, then crack, spall and pit repair so the surface is sound and level.</p></li>
      <li class="reveal reveal-delay-2"><h3>Base coat</h3><p>A penetrating primer or base coat is applied while the concrete is open and clean.</p></li>
      <li class="reveal reveal-delay-3"><h3>Finish layer</h3><p>Flake broadcast, metallic work or a solid color coat, depending on the system you chose.</p></li>
      <li class="reveal reveal-delay-3"><h3>Topcoat and handover</h3><p>A protective topcoat, a walkthrough, and clear instructions on when to walk, park and clean.</p></li>
    </ol>
  </div>
</section>

<section class="section section--paper" aria-labelledby="ben-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="ben-h">Benefits of professional epoxy flooring</h2>
      <p>The difference between a professional system and a weekend kit shows up after the first summer. Here is how bare concrete, a store-bought kit and a ground, multi-layer system compare over time.</p>
    </div>
    <div class="compare-wrap reveal">
      <table class="compare">
        <thead><tr><th scope="col">What matters</th><th scope="col">Bare concrete</th><th scope="col">DIY kit</th><th scope="col">Professional system</th></tr></thead>
        <tbody>
          <tr><th scope="row">Surface prep</th><td>None</td><td>Acid etch or scrub</td><td>Diamond grinding and repairs</td></tr>
          <tr><th scope="row">Hot tires</th><td>Stains and tire marks</td><td>Often lifts and peels</td><td>Bonded into the slab, resists pickup</td></tr>
          <tr><th scope="row">Stains and spills</th><td>Soaks in oil, coolant, rust</td><td>Some protection at first</td><td>Wipes up; chemical-resistant topcoat</td></tr>
          <tr><th scope="row">Dust</th><td>Constant concrete dust</td><td>Reduced</td><td>Sealed, dust-free surface</td></tr>
          <tr><th scope="row">Sunlight</th><td>Not affected</td><td>Yellows near the door</td><td>UV-stable topcoat options</td></tr>
          <tr><th scope="row">Look</th><td>Grey and blotchy</td><td>Thin, uneven color</td><td>Flake, metallic or solid finishes</td></tr>
        </tbody>
      </table>
    </div>
    <div class="prose narrow reveal" style="margin-top:2rem">
      <p>There is also a quieter benefit: a sealed floor reflects more light, so garages and shops feel brighter without new fixtures, and cleaning goes from sweeping concrete dust every week to an occasional dust mop. Coated floors also help with resale. Buyers walking through a home notice a finished garage more than you might expect.</p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="local-h">
  <div class="wrap local">
    <div class="reveal">
      <h2 id="local-h">Why property owners in Ahwatukee choose us</h2>
      <p>Ahwatukee is a particular kind of place. It is technically part of Phoenix, but it lives like its own town, wedged between South Mountain and the I-10, with neighborhoods that were built in waves from the 1970s through the 2000s.</p>
      <p>That build history matters for flooring. Older homes near the Lakes often have slabs that were sealed, painted or patched over the years. Newer Foothills homes tend to have bigger garages, more storage cabinets and owners who want a floor that matches a finished, organized space. Many households keep a golf cart, a boat or a project car alongside the daily drivers.</p>
    </div>
    <div class="prose reveal reveal-delay-1">
      <p>What people tell us they want is pretty consistent: a floor that will not peel, an honest price, a crew that shows up when it says it will, and a finish that looks right with the home. We focus on those things and keep the sales pitch short.</p>
      <p>We work throughout the village, including:</p>
      <ul class="hood-list">
        <li>The Foothills</li><li>Club West</li><li>Mountain Park Ranch</li><li>Lakewood</li><li>The Lakes at Ahwatukee</li><li>Foothills Reserve</li><li>Ahwatukee Custom Estates</li><li>Calabrea</li>
      </ul>
      <p style="margin-top:1.5rem">Commercial clients along Ray Road, Warner and Chandler Boulevard and in the business parks near the freeway get the same approach, with scheduling built around their hours.</p>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="gal-h">
  <div class="wrap">
    <div class="narrow reveal">
      <h2 id="gal-h">Finishes and floor styles</h2>
      <p class="muted">A look at the kinds of surfaces we build. Ask to see physical flake and color samples at your estimate.</p>
    </div>
    <div class="gallery">
      <figure class="reveal-img">${img('flakeGarage', { keep: true, sizes: '(max-width: 680px) 90vw, 600px', widths: [500, 900], ratio: 1 })}<figcaption><b>Full-flake garage floor</b>Speckled color that hides dust and tire marks</figcaption></figure>
      <figure class="reveal-img">${img('xTerrazzo', { keep: true, sizes: '(max-width: 680px) 45vw, 600px', widths: [500, 900], ratio: 1.6 })}<figcaption><b>Fine-chip decorative blend</b>Light base scattered with colored chips</figcaption></figure>
      <figure class="reveal-img">${img('blueFloor', { keep: true, sizes: '(max-width: 680px) 45vw, 400px', widths: [400, 700], ratio: 1 })}<figcaption><b>Solid color with striping</b>Shops and studios</figcaption></figure>
      <figure class="reveal-img">${img('greyTexture', { keep: true, sizes: '(max-width: 680px) 45vw, 200px', widths: [300, 500], ratio: 0.5 })}<figcaption><b>Satin grey</b></figcaption></figure>
      <figure class="reveal-img">${img('warehouseShine', { keep: true, sizes: '(max-width: 680px) 45vw, 600px', widths: [500, 900], ratio: 1.6 })}<figcaption><b>Industrial high-build</b>Thick, light-reflective coating</figcaption></figure>
      <figure class="reveal-img">${img('palmHome', { keep: true, sizes: '(max-width: 680px) 45vw, 600px', widths: [500, 900], ratio: 1.6 })}<figcaption><b>Outdoor living</b>Cool-touch patio and deck coatings</figcaption></figure>
    </div>
  </div>
</section>

<section class="section section--stone" aria-labelledby="areas-h">
  <div class="wrap areas">
    <div class="reveal">
      <h2 id="areas-h">Service areas</h2>
      <p>We are centered in Ahwatukee and regularly cover the communities around it. If you are a little outside this list, call anyway. For larger commercial jobs we travel further across the Valley.</p>
      <p><a class="text-link" href="/service-areas/">All service areas</a></p>
    </div>
    <div class="area-grid reveal reveal-delay-1">
      ${s.serviceAreas.map((a) => `<div><strong>${esc(a.name)}</strong><span>${esc(a.note)}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="faq-h">
  <div class="wrap faq">
    <div class="reveal">
      <h2 id="faq-h">Frequently asked questions</h2>
      <p class="muted">The things Ahwatukee homeowners ask before they book. Something else on your mind? ${phoneLink()} and ask.</p>
    </div>
    <div class="faq__list">
      ${faqs.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq__answer">${md(f.a)}</div></details>`).join('')}
    </div>
  </div>
</section>

<section class="section closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img('desertHome', { widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="reveal">
      <h2 id="est-h">Start with a free on-site estimate</h2>
      <p>Tell us a little about the floor and we will set a time to see it. You will get a written quote with each option priced out, plus our honest take on which one fits.</p>
      <ul class="closer__contact">
        <li><span>Call or text</span>${phoneLink()}</li>
        <li><span>Estimates</span><b>Free, in person, in writing</b></li>
        <li><span>Serving</span><b>${esc(s.cityLong)} &amp; nearby</b></li>
      </ul>
    </div>
    <div class="form-card reveal reveal-delay-1">${leadForm({ id: 'home-form', heading: 'Request your estimate', intro: 'Takes under a minute. We will get in touch to set a time that suits you.', withMessage: true })}</div>
  </div>
</section>`;

  endDedupe();
  return layout({
    path: '/',
    title: 'Epoxy Flooring Ahwatukee | Garage & Concrete Floor Coatings',
    description: 'Garage floor coatings, flake and metallic epoxy, polyaspartic and commercial floors for Ahwatukee Foothills homes and businesses, built for Arizona heat.',
    body,
    image: 'heroFloor',
    schema: [
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  });
}
