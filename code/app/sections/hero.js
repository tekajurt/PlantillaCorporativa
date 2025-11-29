'use client';
import Section from '../componentes/section.js';
import Image from 'next/image';
import getBlur from '../../lib/getBlur';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = () => {
  return (
    <Section id="hero" className="text-left">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Color, ritmo y tradición</h1>
        <p className="text-lg text-muted mt-6">
          Formando el carnaval del mañana. Bienvenido a la Escuela de Carnaval Arcoíris — talleres,
          ensayos y presentaciones para todas las edades.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contact" className="btn btn-accent shadow md:h-12 md:px-6">
            Contactar
          </a>
          <a href="#nosotros" className="btn btn-secondary">
            Conócenos
          </a>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-1200/500">
          <Image
            priority
            src="/vercel.svg"
            alt="Desfile del carnaval"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 1200px"
            placeholder="blur"
            blurDataURL={getBlur('/vercel.svg')}
          />
        </div>
      </div>

      <Carousel className="w-full mt-8">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="rounded-lg overflow-hidden shadow-md aspect-5/3">
              <Image
                src="/file.svg"
                alt="Ensayo de figuras"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlur('/file.svg')}
              />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="rounded-lg overflow-hidden shadow-md aspect-5/3">
              <Image
                src="/favicon.ico"
                alt="Ensayo"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlur('/favicon.ico')}
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#cuerpos"
            className="btn btn-accent"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cuerpos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Conocer los cuerpos
          </a>
          <a
            href="#calendario"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Próximos eventos
          </a>
          <a
            href="#galeria"
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#galeria')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver galería
          </a>
        </div>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default Hero;
