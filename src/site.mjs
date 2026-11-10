// Site-wide configuration for Epoxy Flooring Ahwatukee.
// Everything that is business-specific lives here so it can be updated in one place.

export const site = {
  name: 'Epoxy Flooring Ahwatukee',
  domain: 'https://epoxyflooringahwatukee.com',
  city: 'Ahwatukee',
  cityLong: 'Ahwatukee Foothills',
  region: 'Phoenix, Arizona',
  state: 'AZ',
  locale: 'en_US',

  // PLACEHOLDER — replace with the real business number before launch.
  // phoneVerified stays false until a real number is added; while false the number
  // is shown on the page but kept out of structured data.
  phone: '(480) 555-0142',
  phoneHref: 'tel:+14805550142',
  phoneVerified: false,

  // Optional public email. Leave empty to hide.
  email: '',

  // City-centred map (no street address is claimed).
  map: {
    query: 'Ahwatukee Foothills, Phoenix, AZ',
    lat: 33.3434,
    lng: -111.9845,
    zoom: 12,
  },

  serviceAreas: [
    { name: 'Ahwatukee Foothills', note: 'Our home base, from the Foothills to Lakewood and Mountain Park Ranch.' },
    { name: 'Tempe', note: 'South Tempe and the Kyrene corridor, right across the I-10.' },
    { name: 'Chandler', note: 'West Chandler neighborhoods and light commercial along the Price corridor.' },
    { name: 'Phoenix', note: 'South Mountain Village, Arcadia and central Phoenix by appointment.' },
    { name: 'Laveen', note: 'Newer builds on the far side of South Mountain.' },
    { name: 'Gilbert', note: 'Residential garages and home workshops.' },
    { name: 'Guadalupe', note: 'Homes and small businesses next door to the Foothills.' },
    { name: 'Mesa', note: 'Shops, warehouses and residential projects in west Mesa.' },
    { name: 'Sun Lakes', note: 'Golf cart garages, patios and lanais.' },
  ],

  projectTypes: [
    'Garage floor coating',
    'Residential interior floor',
    'Decorative flake floor',
    'Metallic epoxy floor',
    'Polyaspartic coating',
    'Polyurea coating',
    'Patio or pool deck',
    'Commercial floor',
    'Warehouse or industrial floor',
    'Not sure yet',
  ],
};

// Licensed photography served from the Unsplash CDN (Unsplash License: free for
// commercial use). Swap any `id` for a self-hosted path or another CDN URL later;
// every image on the site is referenced from this list.
export const images = {
  blueFloor: { file: 'blueFloor', w: 4817, h: 3056, widths: [480, 800, 1200, 1600, 2200], alt: "Service floor with blue lift pads outlined in yellow safety lines" },
  cactusGold: { file: 'cactusGold', w: 5760, h: 3840, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro and cholla cactus glowing in sunrise light" },
  crewRolling: { file: 'crewRolling', w: 8025, h: 5353, widths: [480, 800, 1200, 1600, 2200], alt: "Installer spreading a high-gloss coating across a large industrial floor" },
  crewWhite: { file: 'crewWhite', w: 6548, h: 4367, widths: [480, 800, 1200, 1600, 2200], alt: "Installer in spiked shoes working across a fresh light grey floor coating" },
  desertHome: { file: 'desertHome', w: 3103, h: 1338, widths: [480, 800, 1200, 1600, 2200], alt: "Southwestern-style home set into a desert hillside" },
  emptyRoom: { file: 'emptyRoom', w: 5727, h: 3473, widths: [480, 800, 1200, 1600, 2200], alt: "Empty room with sliding glass doors opening onto a garden" },
  garageCars: { file: 'garageCars', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Two cars parked on a clean, light grey garage floor" },
  garageTruck: { file: 'garageTruck', w: 3740, h: 2104, widths: [480, 800, 1200, 1600, 2200], alt: "Vintage red truck parked in a large home workshop garage" },
  greyTexture: { file: 'greyTexture', w: 7360, h: 4912, widths: [480, 800, 1200, 1600, 2200], alt: "Close-up of a smooth grey concrete surface" },
  heroBackdrop: { file: 'heroBackdrop', w: 6016, h: 3577, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro cacti below a rugged desert mountain range at dusk" },
  heroFloor: { file: 'heroFloor', w: 8192, h: 5464, widths: [480, 800, 1200, 1600, 2200], alt: "Bright two-car garage with a grey speckled flake floor and white doors" },
  kitchen: { file: 'kitchen', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Clean stainless steel commercial kitchen over a light, seamless floor" },
  marble: { file: 'marble', w: 3000, h: 2000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright lobby with a polished white marble-look floor" },
  openRoom: { file: 'openRoom', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright, empty room with large windows and a pale seamless floor" },
  palmHome: { file: 'palmHome', w: 3264, h: 2448, widths: [480, 800, 1200, 1600, 2200], alt: "Patio dining table beside a sparkling backyard pool" },
  parkingLines: { file: 'parkingLines', w: 5458, h: 3070, widths: [480, 800, 1200, 1600, 2200], alt: "Yellow and black floor markings laid out on a commercial floor" },
  valleyView: { file: 'valleyView', w: 5243, h: 3926, widths: [480, 800, 1200, 1600, 2200], alt: "Camelback Mountain rising over Phoenix at sunrise" },
  warehouseShine: { file: 'warehouseShine', w: 5616, h: 3744, widths: [480, 800, 1200, 1600, 2200], alt: "Empty warehouse with a glossy floor reflecting the overhead lights" },
};
