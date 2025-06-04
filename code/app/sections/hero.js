import Section from "../componentes/section.js" 
import Image from "next/image";
const Hero = () => {
	return (
			<Section id="hero" title="Bienvenido">
				<div className="bg-gradient-to-r from-blue-900 to-blue-700 h-full w-full flex text-white relative">
					{/* HERO CONTENT */}
					<div className="flex flex-col items-center justify-center text-center w-full px-4">
						<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
							Bienvenido a{" "}
							<span className="text-blue-200">Nuestra Empresa</span>
						</h1>
						<p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
							Soluciones innovadoras para tu negocio. Descubre cómo podemos ayudarte a
							crecer y destacar en el mercado.
						</p>
						<a
						href="#servicios"
						className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition text-lg"
						>
							Servicios
						</a>
					</div>
					
				</div>
			</Section>
	)
}
export default Hero;
