'use client';
import Section from '../componentes/section';
import { useI18n } from '@/app/i18n/I18nProvider.jsx';
import NormalizedImage from '@/components/media/NormalizedImage';
import { getImages } from '@/lib/imageCatalog';

const Nosotros = () => {
  const { t, dict } = useI18n();
  const imgs = getImages('nosotros');
  const mainImg = imgs.find((i) => i.id === 'main');
  return (
    <Section id="nosotros" className="text-center">
      <h2 className="text-3xl font-bold">{t('nosotros.title')}</h2>
      <p className="text-base">{t('nosotros.intro')}</p>
      <div className="flex flex-col items-center text-center gap-6">
        <h3 className="text-2xl font-bold">{t('nosotros.history.title')}</h3>

        <p className="text-sm mb-6">{t('nosotros.history.body')}</p>
        <h3 className="text-2xl font-bold">{t('nosotros.founders.title')}</h3>

        <ul className="list-disc list-inside text-center">
          {(dict.nosotros?.founders?.items || []).slice(0, 3).map((name, idx) => (
            <li key={idx} className="mb-2">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{t('nosotros.mission.title')}</h3>
        <p className="text-sm">{t('nosotros.mission.body')}</p>
        <h3 className="text-2xl font-bold">{t('nosotros.vision.title')}</h3>
        <p className="text-sm">{t('nosotros.vision.body')}</p>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center mx-auto">
        <NormalizedImage
          item={mainImg}
          alt={t('nosotros.image.alt', { default: 'Archivo histórico del carnaval' })}
        />
      </div>
    </Section>
  );
};
export default Nosotros;
