import Section from '../componentes/section';
import Card from '../../components/Card';

const proyectos = () => {
  const posts = [
    {
      title: 'Convocatoria abierta: Talleres 2026',
      children: 'Inscripciones abiertas para talleres de figuras, danza y música. Cupos limitados.',
    },
    {
      title: 'Premio al mejor desfile',
      children:
        'Nuestra escuela obtuvo reconocimiento en el festival regional por su puesta en escena.',
    },
    {
      title: 'Nuevas fechas publicadas',
      children: 'Consulta el calendario actualizado para los próximos ensayos y presentaciones.',
    },
  ];
  return (
    <Section id="blog" className="text-left">
      <h2 className="text-2xl font-bold mb-4">Noticias</h2>
      <p className="mb-4">
        Últimas novedades de la Escuela: convocatorias, reconocimientos y fechas importantes.
      </p>
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
