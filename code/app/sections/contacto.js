import Section from "../componentes/section";

const contacto = () => {
  return (
    <Section id="contacto" className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Contacto
      </h2>
      {/* TODO: Agregar formulario accesible y responsive con labels y validación */}
    </Section>
  );
};
export default contacto;
