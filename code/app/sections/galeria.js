'use client';
import React, { useState } from 'react';
import Section from '../componentes/section';
import Card from '../../components/Card';
import GalleryModal from '../../components/ui/GalleryModal';
// import blurMap from '../../lib/blur-placeholders.json'; // removed: unused, using getBlur helper
import getBlur from '../../lib/getBlur';

const Galeria = () => {
  const items = [
    {
      title: 'Desfile 2025',
      image: '/file.svg',
      imageWidth: 800,
      imageHeight: 450,
      blurDataURL:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' preserveAspectRatio='none'><rect width='16' height='10' fill='%23ff007f'/></svg>",
      children: 'Momentos destacados del desfile 2025: color y creatividad.',
    },
    {
      title: 'Taller de vestuario',
      image: '/globe.svg',
      imageWidth: 600,
      imageHeight: 400,
      blurDataURL:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' preserveAspectRatio='none'><rect width='16' height='10' fill='%23ffd166'/></svg>",
      children: 'Imágenes del taller de construcción de estructuras y máscaras.',
    },
    {
      title: 'Ensayo de la banda',
      image: '/window.svg',
      imageWidth: 700,
      imageHeight: 420,
      blurDataURL:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' preserveAspectRatio='none'><rect width='16' height='10' fill='%234ade80'/></svg>",
      children: 'Grabaciones y fotos de la sección musical en acción.',
    },
  ];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openImage = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <Section id="galeria" className="text-left">
      <h2 className="text-2xl font-bold mb-4">Galería multimedia</h2>
      <p className="mb-4">
        Fotos y videos organizados por año y por cuerpo (Figuras, Baile, Banda). Aquí mostramos una
        selección reciente.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const blur = getBlur(item.image) || item.blurDataURL;
          return (
            <Card
              key={idx}
              title={item.title}
              image={item.image}
              imageWidth={item.imageWidth}
              imageHeight={item.imageHeight}
              blurDataURL={blur}
              onClick={() => openImage({ ...item, blur })}
            >
              {item.children}
            </Card>
          );
        })}
      </div>
      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        image={selected?.image}
        alt={selected?.title}
        blurDataURL={selected?.blur}
      />
    </Section>
  );
};
export default Galeria;
