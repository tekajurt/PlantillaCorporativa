'use client';
import Section from '../componentes/section';
import { Button } from '@/components/ui/button';

const cta = () => {
  return (
    <Section id="cta" className="py-12 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          ¿Listo para participar?
        </h2>
        <p className="mb-6 text-muted">
          Únete a nuestras actividades: inscripciones abiertas para talleres y clases. ¡Trae tu
          energía y color!
        </p>
        <Button
          size="lg"
          variant="default"
          onClick={() =>
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Inscribirme
        </Button>
      </div>
    </Section>
  );
};
export default cta;
