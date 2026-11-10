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
  heroBackdrop: { id: 'photo-1649694446947-8b3a361e1fdc', alt: 'Rocky desert mountainside with saguaro cactus under a clear Arizona sky' },
  heroFloor: { id: 'photo-1551522435-98395ae5e4b8', alt: 'Classic cars parked on a glossy, light-reflecting showroom floor' },
  valleyView: { id: 'photo-1649261224669-c342d93eb3da', alt: 'View over the Phoenix valley from a desert mountain trail' },
  desertHome: { id: 'photo-1649181353619-d3ed1e023984', alt: 'Modern desert home set against rugged mountains' },
  palmHome: { id: 'photo-1622059796766-f2b1f9d2d119', alt: 'Palm tree beside a home with outdoor living space in the desert sun' },
  garageTruck: { id: 'photo-1734477127040-c5845f5af500', alt: 'Pickup truck parked inside a clean residential garage' },
  garageCars: { id: 'photo-1551522435-a13afa10f103', alt: 'Several vehicles parked side by side on a sealed concrete floor' },
  greyTexture: { id: 'photo-1652305461546-bf0a76934433', alt: 'Close-up of a smooth grey resin surface with subtle movement' },
  marble: { id: 'photo-1523251836828-b75d28b89804', alt: 'Polished white surface with soft veining and a long shadow' },
  blueFloor: { id: 'photo-1721704988929-58b5f64c9266', alt: 'Large open room with a coated blue floor and a yellow safety line' },
  kitchen: { id: 'photo-1589109807644-924edf14ee09', alt: 'Commercial kitchen with stainless steel equipment over a sealed floor' },
  warehouseShine: { id: 'photo-1771531072574-af6ed6b954c0', alt: 'Warehouse floor with a high-gloss finish reflecting overhead lights' },
  crewRolling: { id: 'photo-1772209415876-76ea6cbc2f0c', alt: 'Installers applying coating across a large empty warehouse floor' },
  crewWhite: { id: 'photo-1772305595483-6b058aff40f9', alt: 'Crew rolling a light-colored coating across an industrial floor' },
  parkingLines: { id: 'photo-1654032390388-eb193af12315', alt: 'Concrete floor marked with yellow and white traffic lines' },
  openRoom: { id: 'photo-1731481562702-0e94ce06ebb3', alt: 'Bright open room with large windows and a seamless floor' },
  cactusGold: { id: 'photo-1572099258616-b132c0a063e1', alt: 'Saguaro cactus glowing in golden hour light' },
  emptyRoom: { id: 'photo-1741105820091-3d150a451cfe', alt: 'Empty room with white walls, glass doors and a smooth floor' },
};
