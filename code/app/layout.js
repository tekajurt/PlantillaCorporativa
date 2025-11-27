import './globals.css';
import Header from '../components/Header';
import Footer from './componentes/footer';
import { getDefaultMetadata } from '../lib/metadata';

export const metadata = getDefaultMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col text-center bg-background text-foreground">
        <Header />
        {/* Reserve space matching header height (h-16) to avoid content being hidden under sticky header */}
        <div className="flex-1 w-full pt-16 items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
