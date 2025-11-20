import Section from "../componentes/section";
import Card from "../../components/Card";

const ventajas = () => {
  const items = [
    {
      title: "Evento 1",
      image: "/file.svg",
      children: "Descripción breve del evento 1.",
    },
    {
      title: "Evento 2",
      image: "/globe.svg",
      children: "Descripción breve del evento 2.",
    },
    {
      title: "Evento 3",
      image: "/window.svg",
      children: "Descripción breve del evento 3.",
    },
  ];
  return (
    <Section id="galeria">
      <h2 className="text-2xl font-bold mb-4">Galería de multimedia</h2>
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
