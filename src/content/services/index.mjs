// Service registry: order here drives the menu, footer and homepage index.
import garage from './garage-floors.mjs';
import residential from './interior-epoxy-floors.mjs';
import flake from './flake-floors.mjs';
import metallic from './metallic-epoxy.mjs';
import polyaspartic from './polyaspartic.mjs';
import polyurea from './polyurea.mjs';
import patio from './patio-coatings.mjs';
import commercial from './commercial-floors.mjs';
import warehouse from './warehouse-and-industrial.mjs';

export const services = [garage, residential, flake, metallic, polyaspartic, polyurea, patio, commercial, warehouse];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
