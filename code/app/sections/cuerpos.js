'use client';
import Section from '../componentes/section';
import { useI18n } from '../i18n/I18nProvider.jsx';
import NormalizedImage from '@/components/media/NormalizedImage';
import { getImages } from '@/lib/imageCatalog';

const Cuerpos = () => {
  const { t } = useI18n();
  const imgs = getImages('cuerpos');
  const imgFiguras = imgs.find((i) => i.id === 'figuras');
  const imgBaile = imgs.find((i) => i.id === 'baile');
  const imgBanda = imgs.find((i) => i.id === 'banda');
  return (
    <Section id="cuerpos" className="text-left">
      <h2 className="text-3xl font-bold">{t('cuerpos.title')}</h2>
      <p>{t('cuerpos.intro')}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          id="figuras"
          className="w-full bg-accent p-6 rounded-md text-accent-foreground shadow-md"
        >
          <h3 className="text-2xl font-bold">{t('cuerpos.figuras.title')}</h3>
          <p className="mt-2">{t('cuerpos.figuras.body')}</p>
          <div className="mt-4">
            <NormalizedImage item={imgFiguras} alt={t('cuerpos.figuras.title')} />
          </div>
          <p className="mt-3 font-semibold">Talleres y ensayos:</p>
          <ul className="list-disc list-inside">
            <li>Martes 18:00 – 20:00 — Taller de figuras</li>
            <li>Domingos 10:00 – 13:00 — Ensayo general</li>
          </ul>
        </div>

        <div id="baile" className="w-full bg-destructive p-6 rounded-md text-white shadow-md">
          <h3 className="text-2xl font-bold">{t('cuerpos.baile.title')}</h3>
          <p className="mt-2">{t('cuerpos.baile.body')}</p>
          <div className="mt-4">
            <NormalizedImage item={imgBaile} alt={t('cuerpos.baile.title')} />
          </div>
          <p className="mt-3 font-semibold">Clases y horarios:</p>
          <ul className="list-disc list-inside">
            <li>Lunes y Miércoles 19:00 — Técnica y coreografía</li>
            <li>Sábados 09:00 — Ensayo de grupo</li>
          </ul>
        </div>

        <div
          id="banda"
          className="w-full bg-secondary p-6 rounded-md text-secondary-foreground shadow-md"
        >
          <h3 className="text-2xl font-bold">{t('cuerpos.banda.title')}</h3>
          <p className="mt-2">{t('cuerpos.banda.body')}</p>
          <div className="mt-4">
            <NormalizedImage item={imgBanda} alt={t('cuerpos.banda.title')} />
          </div>
          <p className="mt-3 font-semibold">Ensayos:</p>
          <ul className="list-disc list-inside">
            <li>Miércoles 18:30 — Sección de percusión</li>
            <li>Viernes 20:00 — Ensayo general de banda</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
export default Cuerpos;
