'use client';
import Section from '../componentes/section';
import { Button } from '@/components/ui/button';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Calendario = () => {
  const { t } = useI18n();
  return (
    <Section id="calendario" className="text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t('calendario.title')}
        </h2>
        <p className="text-center">{t('calendario.intro')}</p>
        <ul className="space-y-4 text-center">
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
        <div className="text-center">
          <Button
            onClick={() => {
              alert('Función de agregar al calendario (placeholder)');
            }}
            size="lg"
            variant="default"
          >
            {t('common.addToCalendar', { default: 'Agregar al calendario' })}
          </Button>
        </div>
      </div>
    </Section>
  );
};
export default Calendario;
