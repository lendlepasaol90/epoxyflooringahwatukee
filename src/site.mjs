// Site-wide configuration for Ahwatukee Epoxy Flooring.
// Everything that is business-specific lives here so it can be updated in one place.

export const site = {
  name: 'Ahwatukee Epoxy Flooring',
  owner: 'Lyndsey Muehl',
  category: 'Flooring Contractor',
  description: "Ahwatukee Epoxy Flooring helps homeowners and businesses upgrade ordinary concrete with durable, attractive floor coatings designed for Arizona living. Based in Ahwatukee, Phoenix, AZ, we specialize in garage epoxy flooring, decorative flake systems, metallic epoxy finishes, patio coatings, basement flooring, and commercial epoxy floors. From sun-exposed concrete to heavily used garage floors, we provide professional surface preparation and customized coating solutions that improve appearance and simplify maintenance. Whether you're refreshing a residential garage or upgrading a business space, Ahwatukee Epoxy Flooring delivers flooring solutions built for everyday use. Serving Ahwatukee, South Mountain, Chandler, Tempe, and nearby Phoenix communities.",
  address: {
    street: '3906 E Ray Rd #639',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85044',
    country: 'US',
  },
  // Days use schema.org names; shown on the site and output as openingHoursSpecification.
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], label: 'Monday – Saturday', opens: '07:00', closes: '18:00', text: '7:00 AM – 6:00 PM' },
    { days: ['Sunday'], label: 'Sunday', closed: true, text: 'Closed' },
  ],
  domain: 'https://epoxyflooringahwatukee.com',
  city: 'Ahwatukee',
  cityLong: 'Ahwatukee Foothills',
  region: 'Phoenix, Arizona',
  state: 'AZ',
  locale: 'en_US',

  phone: '(480) 576-6166',
  phoneHref: 'tel:+14805766166',
  phoneVerified: true,

  email: 'info@epoxyflooringahwatukee.com',

  // Footer map, centred on the business address.
  map: {
    query: '3906 E Ray Rd #639, Phoenix, AZ 85044',
    lat: 33.3203,
    lng: -111.9971,
    zoom: 13,
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
  blueFloor: { file: 'blueFloor', group: 'industrial', w: 4817, h: 3056, widths: [480, 800, 1200, 1600, 2200], alt: "Service floor with blue lift pads outlined in yellow safety lines" },
  cactusGold: { file: 'cactusGold', group: 'scene', w: 5760, h: 3840, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro and cholla cactus glowing in sunrise light" },
  crewRolling: { file: 'crewRolling', group: 'industrial', w: 8025, h: 5353, widths: [480, 800, 1200, 1600, 2200], alt: "Installer spreading a high-gloss coating across a large industrial floor" },
  crewWhite: { file: 'crewWhite', group: 'industrial', w: 6548, h: 4367, widths: [480, 800, 1200, 1600, 2200], alt: "Installer in spiked shoes working across a fresh light grey floor coating" },
  desertHome: { file: 'desertHome', group: 'scene', w: 3103, h: 1338, widths: [480, 800, 1200, 1600, 2200], alt: "Southwestern-style home set into a desert hillside" },
  emptyRoom: { file: 'emptyRoom', group: 'interior', w: 5727, h: 3473, widths: [480, 800, 1200, 1600, 2200], alt: "Empty room with sliding glass doors opening onto a garden" },
  garageCars: { file: 'garageCars', group: 'garage', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Two cars parked on a clean, light grey garage floor" },
  garageTruck: { file: 'garageTruck', group: 'garage', w: 3740, h: 2104, widths: [480, 800, 1200, 1600, 2200], alt: "Vintage red truck parked in a large home workshop garage" },
  greyTexture: { file: 'greyTexture', group: 'finish', w: 7360, h: 4912, widths: [480, 800, 1200, 1600, 2200], alt: "Close-up of a smooth grey concrete surface" },
  heroBackdrop: { file: 'heroBackdrop', group: 'scene', w: 6016, h: 3577, widths: [480, 800, 1200, 1600, 2200], alt: "Saguaro cacti below a rugged desert mountain range at dusk" },
  heroFloor: { file: 'heroFloor', group: 'garage', w: 8192, h: 5464, widths: [480, 800, 1200, 1600, 2200], alt: "Bright two-car garage with a grey speckled flake floor and white doors" },
  kitchen: { file: 'kitchen', group: 'commercial', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Clean stainless steel commercial kitchen over a light, seamless floor" },
  marble: { file: 'marble', group: 'finish', w: 3000, h: 2000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright lobby with a polished white marble-look floor" },
  openRoom: { file: 'openRoom', group: 'interior', w: 6000, h: 4000, widths: [480, 800, 1200, 1600, 2200], alt: "Bright, empty room with large windows and a pale seamless floor" },
  palmHome: { file: 'palmHome', group: 'outdoor', w: 3264, h: 2448, widths: [480, 800, 1200, 1600, 2200], alt: "Patio dining table beside a sparkling backyard pool" },
  parkingLines: { file: 'parkingLines', group: 'industrial', w: 5458, h: 3070, widths: [480, 800, 1200, 1600, 2200], alt: "Yellow and black floor markings laid out on a commercial floor" },
  valleyView: { file: 'valleyView', group: 'scene', w: 5243, h: 3926, widths: [480, 800, 1200, 1600, 2200], alt: "Camelback Mountain rising over Phoenix at sunrise" },
  warehouseShine: { file: 'warehouseShine', group: 'industrial', w: 5616, h: 3744, widths: [480, 800, 1200, 1600, 2200], alt: "Empty warehouse with a glossy floor reflecting the overhead lights" },
  xGarageStorage: { file: 'xGarageStorage', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Home garage with storage shelves and a light tiled floor" },
  xGarageGym: { file: 'xGarageGym', group: 'garage', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Bright garage set up as a home gym on a light floor" },
  xFlakeRust: { file: 'xFlakeRust', group: 'finish', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Close-up of a speckled flake finish in warm red and brown tones" },
  xTerrazzo: { file: 'xTerrazzo', group: 'finish', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Close-up of a light speckled floor finish with colored chips" },
  xPatio: { file: 'xPatio', group: 'outdoor', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Shaded patio with lounge chairs outside a desert home" },
  xClinic: { file: 'xClinic', group: 'commercial', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Long clinic corridor with a gleaming, seamless floor" },
  driveBefore: { file: 'driveBefore', group: 'project', w: 932, h: 660, widths: [480, 800, 932], alt: "Ahwatukee home with a plain grey concrete driveway before coating" },
  driveAfter: { file: 'driveAfter', group: 'project', w: 932, h: 660, widths: [480, 800, 932], alt: "The same Ahwatukee driveway after a tan decorative flake coating" },
  flakeGarage: { file: 'flakeGarage', group: 'finish', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Close-up of a full-broadcast flake floor in tan and grey" },
};
