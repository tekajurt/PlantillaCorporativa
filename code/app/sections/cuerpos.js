// import { loremIpsum } from "lorem-ipsum"; // removed: not used
import Section from '../componentes/section';

const equipo = () => {
  return (
    <Section id="cuerpos" className="text-left">
      <h2 className="text-3xl font-bold">Cuerpos del carnaval</h2>
      <p className="mt-2">
        Nuestra escuela se organiza en tres cuerpos principales. Cada uno tiene identidad, talleres
        y calendario propio. Selecciona un cuerpo para conocer más.
      </p>

      <div
        id="figuras"
        className="w-full bg-accent p-6 rounded-md text-accent-foreground shadow-md mt-6"
      >
        <h3 className="text-2xl font-bold">Figuras</h3>
        <p className="mt-2">
          Las figuras representan el alma visual del desfile. Trabajan en vestuario, estructuras y
          presencia escénica. Ofrecemos talleres de diseño de vestuario y manejo de estructuras.
        </p>
        <p className="mt-3 font-semibold">Talleres y ensayos:</p>
        <ul className="list-disc list-inside">
          <li>Martes 18:00 – 20:00 — Taller de figuras</li>
          <li>Domingos 10:00 – 13:00 — Ensayo general</li>
        </ul>
      </div>

      <div id="baile" className="w-full bg-destructive p-6 rounded-md text-white shadow-md mt-6">
        <h3 className="text-2xl font-bold">Baile</h3>
        <p className="mt-2">
          El cuerpo de baile se encarga de la coreografía y el movimiento. Practicamos distintos
          estilos y formamos grupos por niveles.
        </p>
        <p className="mt-3 font-semibold">Clases y horarios:</p>
        <ul className="list-disc list-inside">
          <li>Lunes y Miércoles 19:00 — Técnica y coreografía</li>
          <li>Sábados 09:00 — Ensayo de grupo</li>
        </ul>
      </div>

      <div
        id="banda"
        className="w-full bg-secondary p-6 rounded-md text-secondary-foreground shadow-md mt-6"
      >
        <h3 className="text-2xl font-bold">Banda</h3>
        <p className="mt-2">
          La banda aporta el ritmo y la energía. Contamos con secciones de percusión, vientos y
          bronces. Ofrecemos espacios para ensayos y formación musical.
        </p>
        <p className="mt-3 font-semibold">Ensayos:</p>
        <ul className="list-disc list-inside">
          <li>Miércoles 18:30 — Sección de percusión</li>
          <li>Viernes 20:00 — Ensayo general de banda</li>
        </ul>
      </div>
    </Section>
  );
};
export default equipo;
