'use client';
import Section from '../componentes/section';

const servicios = () => {
  return (
    <Section id="calendario" className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Calendario y actividades
      </h2>
      <p className="text-center mb-6">
        Consulta la agenda de ensayos, talleres y presentaciones. Añade los eventos importantes a tu
        calendario personal.
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
        <button
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={() => {
            alert('Función de agregar al calendario (placeholder)');
          }}
        >
          Agregar al calendario
        </button>
      </div>
    </Section>
  );
};
export default servicios;
