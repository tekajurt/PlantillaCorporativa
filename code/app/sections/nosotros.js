import Section from "../componentes/section";
import Image from "next/image";
import { loremIpsum } from "lorem-ipsum";

const nosotros = () => {
  return (
    <Section id="nosotros">
      <h2 className="text-3xl font-bold">Quienes somos</h2>
      <p className="text-sm">{loremIpsum({ count: 3 })}</p>
      <div className="flex flex-col text-center mt-8 ">
        <h3 className="text-2xl font-bold">Nuestra historia</h3>

        <p className="text-sm mb-6">{loremIpsum({ count: 3 })}</p>
        <h3 className="text-2xl font-bold">Integrantes fundadores</h3>

        <p className="text-lg mb-6">Integrante 1</p>
        <p className="text-lg mb-6">Integrante 2</p>
        <p className="text-lg mb-6">Integrante 3</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Mision</h3>
        <p className="text-sm">{loremIpsum({ count: 3 })}</p>
        <h3 className="text-2xl font-bold">Vision</h3>
        <p className="text-sm">{loremIpsum({ count: 3 })}</p>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center mx-auto mt-8">
        <Image
          src="/favicon.ico"
          alt="Imagen de Nosotros"
          width={500}
          height={300}
          className="max-w-xs sm:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </Section>
  );
};
export default nosotros;
