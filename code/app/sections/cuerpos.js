import { loremIpsum } from "lorem-ipsum";
import Section from "../componentes/section";

const equipo = () => {
  return (
    <Section id="equipo">
      <h2 className="text-3xl font-bold">Cuerpos del carnaval</h2>
      <p>{loremIpsum({ count: 3 })}</p>
      <div className="w-full bg-green-500 p-4 rounded-md text-white shadow-md mt-4">
        <h3 className="text-2xl font-bold">Figuras</h3>
        <p>{loremIpsum({ count: 3 })}</p>
      </div>
      <div className="w-full bg-red-500 p-4 rounded-md text-white shadow-md mt-4">
        <h3 className="text-2xl font-bold">Baile</h3>
        <p>{loremIpsum({ count: 3 })}</p>
      </div>
      <div className="w-full bg-yellow-500 p-4 rounded-md text-black shadow-md mt-4">
        <h3 className="text-2xl font-bold">Banda</h3>
        <p>{loremIpsum({ count: 3 })}</p>
      </div>
    </Section>
  );
};
export default equipo;
