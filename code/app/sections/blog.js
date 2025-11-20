import Section from "../componentes/section";
import Card from "../../components/Card";

const proyectos = () => {
  const posts = [
    {
      title: "Nueva actividad",
      children: "¡Lanzamos una nueva actividad para la comunidad!",
    },
    {
      title: "Actualización de calendario",
      children: "Consulta las fechas actualizadas de los próximos eventos.",
    },
    {
      title: "Galería renovada",
      children: "Ahora puedes ver fotos y videos de los últimos encuentros.",
    },
  ];
  return (
    <Section id="blog">
      <h2 className="text-2xl font-bold mb-4">Noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title}>
            {post.children}
          </Card>
        ))}
      </div>
    </Section>
  );
};
export default proyectos;
