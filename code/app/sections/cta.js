'use client';
import Section from '../componentes/section';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <Section id="cta" className="text-center">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">¿Listo para participar?</h2>
        <p className="text-muted">
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
export default CTA;
