'use client';
import Section from '../componentes/section.js';
import { useI18n } from '@/app/i18n/I18nProvider.jsx';
import { getImages } from '@/lib/imageCatalog';
import NormalizedImage from '@/components/media/NormalizedImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = () => {
  const { t } = useI18n();
  const heroImages = getImages('hero') || [];
  const cover = heroImages.find((i) => i.id === 'cover');
  const slides = heroImages.filter((i) => i.id !== 'cover');

  return (
    <Section id="hero" className="text-center">
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{t('hero.title')}</h1>
        <p className="text-lg text-muted">{t('hero.subtitle')}</p>
        <div className="flex justify-center gap-4">
          <a
            href="#contacto"
            className="btn btn-primary shadow px-4 py-2 sm:px-5 sm:py-2 md:px-6 whitespace-normal break-words text-sm sm:text-base"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.cta.primary')}
          </a>
          <a
            href="#nosotros"
            className="btn btn-secondary inline-flex items-center justify-center px-2 py-2 sm:px-4 sm:py-2 whitespace-nowrap leading-normal text-xs sm:text-sm md:text-base min-h-[2.5rem]"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.cta.secondary')}
          </a>
        </div>
      </div>

      {cover && (
        <div className="w-full">
          <NormalizedImage item={cover} alt={t('hero.cover.alt')} className="shadow-lg" />
        </div>
      )}

      {slides.length > 0 && (
        <div>
          <Carousel>
            <CarouselContent>
              {slides.map((img, idx) => (
                <CarouselItem key={img.id} className="md:basis-1/2 lg:basis-1/3">
                  <NormalizedImage
                    item={img}
                    alt={t(img.altKey || `hero.slide${idx + 1}.alt`)}
                    className="shadow-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <a
          href="#cuerpos"
          className="btn btn-secondary inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 whitespace-nowrap leading-normal text-xs sm:text-sm md:text-base min-h-[2.5rem]"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#cuerpos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="sm:hidden">{t('hero.cta.bodiesShort')}</span>
          <span className="hidden sm:inline">{t('hero.cta.bodies')}</span>
        </a>
        <a
          href="#calendario"
          className="btn btn-accent inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 whitespace-nowrap leading-normal text-xs sm:text-sm md:text-base min-h-[2.5rem]"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#calendario')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="sm:hidden">{t('hero.cta.eventsShort')}</span>
          <span className="hidden sm:inline">{t('hero.cta.events')}</span>
        </a>
        <a
          href="#galeria"
          className="btn btn-outline px-4 py-2 sm:px-5 sm:py-2 whitespace-normal break-words text-xs sm:text-sm md:text-base"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#galeria')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {t('hero.cta.gallery')}
        </a>
      </div>
    </Section>
  );
};

export default Hero;
