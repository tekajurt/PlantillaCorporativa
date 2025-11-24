import Section from '../componentes/section';
import Image from 'next/image';
import blurMap from '../../lib/blur-placeholders.json';
import getBlur from '../../lib/getBlur';
import { loremIpsum } from 'lorem-ipsum';

const nosotros = () => {
  return (
    <Section id="nosotros">
      <h2 className="text-3xl font-bold">Quiénes somos</h2>
      <p className="text-base mt-2">
        La <strong>Escuela de Carnaval Arcoíris</strong> nace en 1998 con el objetivo de preservar y
        transmitir la tradición del carnaval local. Somos una comunidad diversa de bailarines/as,
        músicos/as y artesanos/as comprometidos con la cultura popular.
      </p>
      <div className="flex flex-col text-left mt-8 gap-4">
        <h3 className="text-2xl font-bold">Nuestra historia</h3>

        <p className="text-sm mb-6">
          Desde nuestros primeros pasacalles, hemos crecido hasta convertirnos en una escuela que
          ofrece formación en danza, música y técnicas de figuras. Participamos anualmente en el
          desfile regional y organizamos talleres abiertos a la comunidad.
        </p>
        <h3 className="text-2xl font-bold">Integrantes fundadores</h3>

        <ul className="list-disc list-inside">
          <li className="mb-2">María Pérez — Coordinación general</li>
          <li className="mb-2">Carlos Gómez — Dirección musical</li>
          <li className="mb-2">Ana Ruiz — Coreografía</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">Misión</h3>
        <p className="text-sm">
          Formar y acompañar a nuevas generaciones en el arte del carnaval, combinando tradición y
          creatividad, con inclusión y respeto por nuestras raíces.
        </p>
        <h3 className="text-2xl font-bold mt-4">Visión</h3>
        <p className="text-sm">
          Ser un referente cultural que impulse el desarrollo artístico local y la participación
          comunitaria en festividades populares.
        </p>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center mx-auto mt-8">
        <Image
          src="/file.svg"
          alt="Archivo historico del carnaval"
          width={700}
          height={400}
          className="max-w-full rounded-lg shadow-lg"
          placeholder="blur"
          blurDataURL={getBlur('/file.svg')}
        />
      </div>
    </Section>
  );
};
export default nosotros;
