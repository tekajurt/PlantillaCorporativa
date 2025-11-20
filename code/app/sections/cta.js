import Section from "../componentes/section";

const cta = () => {
  return (
    <Section id="cta" className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        ¿Listo para participar?
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Únete a nuestras actividades y forma parte de la comunidad.
      </p>
      <button
        type="button"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Participar ahora"
      >
        Participar ahora
      </button>
    </Section>
  );
};
export default cta;
