import Section from "../componentes/section";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

const contacto = () => {
  return (
    <Section id="contacto" className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Contacto
      </h2>
      <form className="space-y-4" autoComplete="off">
        <Input id="nombre" label="Nombre" name="nombre" required />
        <Input id="email" label="Email" name="email" type="email" required />
        <Textarea
          id="mensaje"
          label="Mensaje"
          name="mensaje"
          rows={4}
          required
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
      </form>
    </Section>
  );
};
export default contacto;
