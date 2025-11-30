'use client';
import Section from '../componentes/section';
import Card from '../../components/Card';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Blog = () => {
  const { t, dict } = useI18n();
  const posts = Array.isArray(dict?.blog?.items)
    ? dict.blog.items.map((it) => ({ title: it.title, children: it.body }))
    : [];
  return (
    <Section id="blog" className="text-left">
      <h2 className="text-2xl font-bold">{t('blog.title')}</h2>
      <p>{t('blog.intro')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title}>
            {post.children}
          </Card>
        ))}
      </div>
    </Section>
  );
};
export default Blog;
