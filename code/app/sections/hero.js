import Section from "../componentes/section.js";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <Section id="hero" title="Bienvenido">
      {/* HERO CONTENT */}
      <div className="flex flex-col justify-center text-center gap-4 ">
        <Image
          src="/favicon.ico"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg max-w-fit mx-auto"
        />
        <h1 className=" text-4xl md:text-6xl font-extrabold drop-shadow-lg self-center">
          Bienvenido a <span className="text-blue-200"> __Cliente__</span>
        </h1>
      </div>
      <p className="text-lg md:text-xl text-gray-200 mt-12 max-w-2xl">
        Descubre nuestros servicios y cómo podemos ayudarte a alcanzar tus
        objetivos.
      </p>

      {/**\ Carousel */}
      <Carousel className="w-1/2 max-w-md">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/favicon.ico"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};
export default Hero;
