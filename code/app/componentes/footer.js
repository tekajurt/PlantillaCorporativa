'use client';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-card text-card-foreground py-6 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <p className="text-xs mt-2">
          Contacto:{' '}
          <a href="mailto:info@carnaval-arcoiris.org" className="underline">
            info@carnaval-arcoiris.org
          </a>
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-accent"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-primary"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-destructive"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
