import Hero from "./sections/hero";
import Nosotros from "./sections/nosotros";
import Proyectos from "./sections/proyectos";
import Contacto from "./sections/contacto";
import Cta from "./sections/cta";
import Servicios from "./sections/servicios";
import Ventajas from "./sections/ventajas";
import Equipo from "./sections/equipo";
export default function Home() {
return (
	<div className=" w-full ">
		<Hero />
		<Nosotros />
		<Servicios/>
		<Ventajas/>
		<Equipo />
		<Proyectos />
		<Contacto />
		<Cta />
	</div>
);
}
