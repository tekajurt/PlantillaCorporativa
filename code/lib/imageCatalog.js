import hero from '@/app/data/images/hero.json';
import galeria from '@/app/data/images/galeria.json';
import nosotros from '@/app/data/images/nosotros.json';
import cuerpos from '@/app/data/images/cuerpos.json';

const catalogs = { hero, galeria, nosotros, cuerpos };

export function getImages(section) {
  const arr = catalogs[section] || [];
  return Array.isArray(arr) ? arr : [];
}

export function getImage(section, id) {
  const arr = getImages(section);
  return arr.find((i) => i.id === id) || null;
}
