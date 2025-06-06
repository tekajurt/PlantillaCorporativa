import Section from "../componentes/section.js" 
import Image from "next/image";
const Hero = () => {
  return (
    <Section id="hero" title="Bienvenido">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-full w-full flex relative">
    {/* HERO CONTENT */}
        <div className="flex flex-col items-center justify-evenly text-center w-full">
			<div className="flex flex-col items-center justify-evenly mt-8">
				<h1 className=" text-4xl md:text-6xl font-extrabold drop-shadow-lg">
					Bienvenido a{" "}
								
					<span className="text-blue-200">Nuestra Empresa</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-200 mt-12 max-w-2xl">
					Descubre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos.
				</p>

			</div>
          <div className="flex w-full gap-4 justify-center mt-8 ps-4 pe-4">
          <Image
			src="/favicon.ico"
			alt="Hero Image"
			width={500}
			height={300}
			className="rounded-lg shadow-lg"
			
			/>
			<Image
			src="/favicon.ico"
			alt="Hero Image"
			width={500}
			height={300}
			className="rounded-lg shadow-lg"
			
			/>
			<Image
			src="/favicon.ico"
			alt="Hero Image"
			width={500}
			height={300}
			className="rounded-lg shadow-lg"
			
			/>
		  </div>
		</div>
                                
    </div>					
      
    </Section>
  )
}
export default Hero;
