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
  blueFloor: { file: 'ahwatukee-service-floor-blue-lift-pads-outlined', group: 'industrial', w: 4817, h: 3056, widths: [480, 800, 1200, 1600, 2200], alt: "Service floor with blue lift pads outlined in yellow safety lines" },
  cactusGold: { file: 'ahwatukee-saguaro-cholla-cactus-glowing-sunrise-light', group: 'scene', w: 5760, h: 3840, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro and cholla cactus glowing in sunrise light" },
  crewRolling: { file: 'ahwatukee-installer-spreading-high-gloss-coating-large', group: 'industrial', w: 8025, h: 5353, widths: [480, 800, 1200, 1600, 2200], alt: "Installer spreading a high-gloss coating across a large industrial floor" },
  crewWhite: { file: 'ahwatukee-installer-spiked-shoes-working-fresh-light', group: 'industrial', w: 6548, h: 4367, widths: [480, 800, 1200, 1600, 2200], alt: "Installer in spiked shoes working across a fresh light grey floor coating" },
  desertHome: { file: 'ahwatukee-southwestern-style-home-set-desert-hillside', group: 'scene', w: 3103, h: 1338, widths: [480, 800, 1200, 1600, 2200], alt: "Southwestern-style home set into a desert hillside" },
  emptyRoom: { file: 'ahwatukee-empty-room-sliding-glass-doors-opening', group: 'interior', w: 5727, h: 3473, widths: [480, 800, 1200, 1600, 2200], alt: "Empty room with sliding glass doors opening onto a garden" },
  garageCars: { file: 'ahwatukee-two-cars-parked-clean-light-grey', group: 'garage', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Two cars parked on a clean, light grey garage floor" },
  garageTruck: { file: 'ahwatukee-vintage-red-truck-parked-large-home', group: 'garage', w: 3740, h: 2104, widths: [480, 800, 1200, 1600, 2200], alt: "Vintage red truck parked in a large home workshop garage" },
  greyTexture: { file: 'ahwatukee-close-up-smooth-grey-concrete-surface', group: 'finish', w: 7360, h: 4912, widths: [480, 800, 1200, 1600, 2200], alt: "Close-up of a smooth grey concrete surface" },
  heroBackdrop: { file: 'ahwatukee-saguaro-cacti-below-rugged-desert-mountain', group: 'scene', w: 6016, h: 3577, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro cacti below a rugged desert mountain range at dusk" },
  heroFloor: { file: 'ahwatukee-bright-two-car-garage-grey-speckled', group: 'garage', w: 8192, h: 5464, widths: [480, 800, 1200, 1600, 2200], alt: "Bright two-car garage with a grey speckled flake floor and white doors" },
  kitchen: { file: 'ahwatukee-clean-stainless-steel-commercial-kitchen-light', group: 'commercial', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Clean stainless steel commercial kitchen over a light, seamless floor" },
  marble: { file: 'ahwatukee-bright-lobby-polished-white-marble-look', group: 'finish', w: 3000, h: 2000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright lobby with a polished white marble-look floor" },
  openRoom: { file: 'ahwatukee-bright-empty-room-large-windows-pale', group: 'interior', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright, empty room with large windows and a pale seamless floor" },
  palmHome: { file: 'ahwatukee-patio-dining-table-beside-sparkling-backyard', group: 'outdoor', w: 3264, h: 2448, widths: [480, 800, 1200, 1600, 2200], alt: "Patio dining table beside a sparkling backyard pool" },
  parkingLines: { file: 'ahwatukee-yellow-black-floor-markings-laid-out', group: 'industrial', w: 5458, h: 3070, widths: [480, 800, 1200, 1600, 2200], alt: "Yellow and black floor markings laid out on a commercial floor" },
  valleyView: { file: 'ahwatukee-camelback-mountain-rising-phoenix-sunrise', group: 'scene', w: 5243, h: 3926, widths: [480, 800, 1200, 1600, 2200], alt: "Camelback Mountain rising over Phoenix at sunrise" },
  warehouseShine: { file: 'ahwatukee-empty-warehouse-glossy-floor-reflecting-overhead', group: 'industrial', w: 5616, h: 3744, widths: [480, 800, 1200, 1600, 2200], alt: "Empty warehouse with a glossy floor reflecting the overhead lights" },
  xGarageStorage: { file: 'ahwatukee-home-garage-storage-shelves-light-tiled', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Home garage with storage shelves and a light tiled floor" },
  xGarageGym: { file: 'ahwatukee-bright-garage-set-up-as-home', group: 'garage', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Bright garage set up as a home gym on a light floor" },
  xFlakeRust: { file: 'ahwatukee-close-up-speckled-flake-finish-warm', group: 'finish', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Close-up of a speckled flake finish in warm red and brown tones" },
  xTerrazzo: { file: 'ahwatukee-close-up-light-speckled-floor-finish', group: 'finish', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Close-up of a light speckled floor finish with colored chips" },
  xPatio: { file: 'ahwatukee-shaded-patio-lounge-chairs-outside-desert', group: 'outdoor', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Shaded patio with lounge chairs outside a desert home" },
  xClinic: { file: 'ahwatukee-long-clinic-corridor-gleaming-seamless-floor', group: 'commercial', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Long clinic corridor with a gleaming, seamless floor" },
  flakeGarage: { file: 'ahwatukee-close-up-full-broadcast-flake-floor', group: 'finish', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Close-up of a full-broadcast flake floor in tan and grey" },
};
