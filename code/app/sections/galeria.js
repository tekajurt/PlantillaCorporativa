import Section from "../componentes/section";
import Card from "../../components/Card";

const ventajas = () => {
  const items = [
    {
      title: "Desfile 2025",
      image: "/file.svg",
      children: "Momentos destacados del desfile 2025: color y creatividad.",
    },
    {
      title: "Taller de vestuario",
      image: "/globe.svg",
      children:
        "Imágenes del taller de construcción de estructuras y máscaras.",
    },
    {
      title: "Ensayo de la banda",
      image: "/window.svg",
      children: "Grabaciones y fotos de la sección musical en acción.",
    },
  ];
  return (
    <Section id="galeria">
      <h2 className="text-2xl font-bold mb-4">Galería multimedia</h2>
      <p className="mb-4">
        Fotos y videos organizados por año y por cuerpo (Figuras, Baile, Banda).
        Aquí mostramos una selección reciente.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <Card key={idx} title={item.title} image={item.image}>
            {item.children}
          </Card>
        ))}
      </div>
    </Section>
  );
};
export default ventajas;
