import './globals.css';
import Header from '../components/Header';
import Footer from './componentes/footer';
import { getDefaultMetadata } from '../lib/metadata';
import I18nProvider from './i18n/I18nProvider.jsx';
export const metadata = getDefaultMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Escuela de Carnaval Arcoíris',
              url: 'https://www.carnaval-arcoiris.org/',
              description:
                'Formación artística comunitaria en danza, música y producción de carnaval.',
              foundingDate: '1998',
              sameAs: [
                'https://instagram.com/escuela-arcoiris',
                'https://facebook.com/escuela-arcoiris',
              ],
              department: [
                { '@type': 'PerformingGroup', name: 'Cuerpo de Figuras' },
                { '@type': 'DanceGroup', name: 'Cuerpo de Baile' },
                { '@type': 'MusicGroup', name: 'Banda Percusión y Bronces' },
              ],
            }),
          }}
        />
      </head>
      <body>
        <I18nProvider>
          <Header />
          {/* Reserve space matching header height (h-16) to avoid content being hidden under sticky header */}
          <div className="flex-1 w-full max-w-screen-2xl mx-auto pt-16 items-center overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
