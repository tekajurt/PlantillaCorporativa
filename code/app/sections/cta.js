"use client";
import Section from "../componentes/section";

const cta = () => {
  return (
    <Section id="cta" className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        ¿Listo para participar?
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Únete a nuestras actividades: inscripciones abiertas para talleres y
        clases. ¡Trae tu energía y color!
      </p>
      <a
        href="#contacto"
        className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#contacto")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Inscribirme
      </a>
    </Section>
  );
};
export default cta;
