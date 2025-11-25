'use client';
import Section from '../componentes/section';

const cta = () => {
  return (
    <Section id="cta" className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
        ¿Listo para participar?
      </h2>
      <p className="mb-6 text-muted">
        Únete a nuestras actividades: inscripciones abiertas para talleres y clases. ¡Trae tu
        energía y color!
      </p>
      <a
        href="#contacto"
        className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded shadow hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/20"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Inscribirme
      </a>
    </Section>
  );
};
export default cta;
