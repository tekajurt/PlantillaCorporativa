'use client';
import Section from '../componentes/section';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';

const contacto = () => {
  return (
    <Section id="contacto" className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">Contacto</h2>
      <p className="text-center mb-4">
        Escríbenos para consultas sobre inscripciones, talleres o presentaciones.
      </p>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Formulario enviado (ejemplo)');
        }}
      >
        <Input id="nombre" label="Nombre" name="nombre" required />
        <Input id="email" label="Correo electrónico" name="email" type="email" required />
        <Textarea id="mensaje" label="Mensaje" name="mensaje" rows={4} required />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          Enviar
        </button>
      </form>

      <div className="mt-6 text-sm text-center">
        <p>
          Correo institucional:{' '}
          <a href="mailto:info@carnaval-arcoiris.org" className="text-primary">
            info@carnaval-arcoiris.org
          </a>
        </p>
        <p className="mt-2">
          Síguenos:{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>{' '}
          ·{' '}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>{' '}
          ·{' '}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            YouTube
          </a>
        </p>
      </div>
    </Section>
  );
};
export default contacto;
