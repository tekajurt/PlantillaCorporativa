'use client';
import Section from '../componentes/section';
import { Button } from '@/components/ui/button';

const servicios = () => {
  return (
    <Section id="calendario" className="text-left py-12">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Calendario y actividades
        </h2>
        <p className="text-center mb-6">
          Consulta la agenda de ensayos, talleres y presentaciones. Añade los eventos importantes a
          tu calendario personal.
        </p>
        <ul className="space-y-4 text-left">
          <li>
            <strong>12 Mar 2026 — Ensayo general</strong>
            <p>Plaza Central — 18:00</p>
          </li>
          <li>
            <strong>5 Abr 2026 — Taller de vestuario (Figuras)</strong>
            <p>Centro Cultural — 16:00</p>
          </li>
          <li>
            <strong>20 May 2026 — Presentación en la Fiesta Popular</strong>
            <p>Recinto Municipal — 20:00</p>
          </li>
        </ul>
        <div className="mt-6 text-center">
          <Button
            onClick={() => {
              alert('Función de agregar al calendario (placeholder)');
            }}
            size="lg"
            variant="default"
          >
            Agregar al calendario
          </Button>
        </div>
      </div>
    </Section>
  );
};
export default servicios;
