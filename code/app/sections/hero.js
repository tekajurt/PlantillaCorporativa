'use client';
import Section from '../componentes/section.js';
import Image from 'next/image';
// import blurMap from '../../lib/blur-placeholders.json'; // removed: unused, use getBlur helper
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
    <Section id="hero" title="Bienvenido">
      {/* HERO CONTENT */}
      <div className="flex flex-col justify-center text-center gap-4">
        <Image
          priority
          src="/vercel.svg"
          alt="Desfile del carnaval"
          width={800}
          height={300}
          className="rounded-lg shadow-lg w-full max-w-2xl mx-auto object-cover"
          placeholder="blur"
          blurDataURL={getBlur('/vercel.svg')}
        />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg self-center">
          Escuela de Carnaval <span className="text-pink-300">Arcoíris</span>
        </h1>
        {/* commit-test: no-op comment to verify pre-commit hooks */}
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Color, ritmo y tradición: formando el carnaval del mañana
        </p>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-muted mt-8 sm:mt-12 max-w-2xl mx-auto">
        Bienvenido a la Escuela de Carnaval Arcoíris. Aquí te invitamos a ser parte de nuestra
        tradición: ensayos, talleres y presentaciones para todas las edades.
      </p>

      {/**\ Carousel */}
      <Carousel className="w-full max-w-3xl mx-auto mt-8">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/file.svg"
              alt="Ensayo de figuras"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL={getBlur('/file.svg')}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL={getBlur('/favicon.ico')}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL={getBlur('/favicon.ico')}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL={getBlur('/favicon.ico')}
            />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#cuerpos"
            className="px-4 py-2 bg-pink-500 text-white rounded"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cuerpos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Conocer los cuerpos
          </a>
          <a
            href="#calendario"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Próximos eventos
          </a>
          <a
            href="#galeria"
            className="px-4 py-2 bg-emerald-500 text-white rounded"
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
