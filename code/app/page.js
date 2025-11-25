import Hero from './sections/hero';
import Nosotros from './sections/nosotros';
import Proyectos from './sections/blog';
import Contacto from './sections/contacto';
import Cta from './sections/cta';
import Servicios from './sections/calendario';
import Ventajas from './sections/galeria';
import Equipo from './sections/cuerpos';
export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Equipo />
      <Servicios />
      <Ventajas />
      <Proyectos />
      <Contacto />
      <Cta />
    </>
  );
}
