'use client';
import Section from '../componentes/section';
import { useI18n } from '../i18n/I18nProvider.jsx';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import { Button } from '../../components/ui/button';

const Contacto = () => {
  const { t } = useI18n();
  return (
    <Section id="contacto">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t('contacto.title')}
        </h2>
        <p className="text-center">{t('contacto.intro')}</p>
        <form
          className="space-y-4"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Formulario enviado (ejemplo)');
          }}
        >
          <Input id="nombre" label={t('contacto.form.name.label')} name="nombre" required />
          <Input
            id="email"
            label={t('contacto.form.email.label')}
            name="email"
            type="email"
            required
          />
          <Textarea
            id="mensaje"
            label={t('contacto.form.message.label')}
            name="mensaje"
            rows={4}
            required
          />
          <Button type="submit" variant="default" size="lg" className="w-full">
            {t('contacto.form.submit')}
          </Button>
        </form>

        <div className="text-sm text-center">
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
      </div>
    </Section>
  );
};
export default Contacto;
