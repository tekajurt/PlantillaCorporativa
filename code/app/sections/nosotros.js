import Section from "../componentes/section";
import Image from "next/image";
const nosotros = () => {
    return (
        <Section id="nosotros" className={"block flex-col"} >
          
            <h2 className="text-3xl font-bold">Nosotros</h2>
            <div className="flex ">

              <div className="flex flex-col text-center w-1/2 ">
                <p className="text-lg mb-6">
                  Somos una empresa dedicada a ofrecer soluciones innovadoras y personalizadas para nuestros clientes. Nuestro equipo está compuesto por profesionales altamente capacitados que trabajan con pasión y compromiso para superar las expectativas.  
                </p>
                <p className="text-lg mb-6">
                  Con años de experiencia en el sector, nos especializamos en brindar servicios de alta calidad que se adaptan a las necesidades específicas de cada cliente. Nuestra misión es ayudar a las empresas a alcanzar sus objetivos y crecer en un entorno competitivo.
                </p>
              </div>

              <div className="  relative w-1/2 flex justify-center items-center">

                <Image
                  src="/favicon.ico"
                  alt="Imagen de Nosotros"
                  width={500}
                  height={300}
                  className="w-full"
                  />
                </div>
              </div>

            </Section>
    )
}
export default nosotros;
