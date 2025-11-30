'use client';
import React, { useState } from 'react';
import Section from '../componentes/section';
import Card from '../../components/Card';
import GalleryModal from '../../components/ui/GalleryModal';
import { getImages } from '@/lib/imageCatalog';
import NormalizedImage from '@/components/media/NormalizedImage';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Galeria = () => {
  const { t, dict } = useI18n();
  const base = Array.isArray(dict?.galeria?.items) ? dict.galeria.items : [];
  const visuals = getImages('galeria');
  const items = base.map((b, i) => ({
    title: b.title,
    children: b.body,
    visual: visuals[i],
  }));
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openImage = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <Section id="galeria" className="text-left">
      <h2 className="text-2xl font-bold">{t('galeria.title')}</h2>
      <p>{t('galeria.intro')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            onClick={() => openImage({ title: item.title, visual: item.visual })}
          >
            <NormalizedImage item={item.visual} alt={item.title} />
            {item.children}
          </Card>
        ))}
      </div>
      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        image={selected?.visual?.src}
        alt={selected?.title}
        blurDataURL={selected?.visual?.blur}
      />
    </Section>
  );
};
export default Galeria;
