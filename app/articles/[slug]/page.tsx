// app/articles/[slug]/page.tsx
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';

// This function generates static routes at build time
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article: { slug: string; }) => ({
    slug: article.slug,
  }));
}

type ArticleProps = {
  frontmatter: {
    titulo: string;
    data: string;
    resumo?: string;
  };
  content: string;
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug) as ArticleProps | null;

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  const { frontmatter, content } = article;

  if (!content) {
    return <p>Conteúdo do artigo não disponível.</p>;
  }

  if (!frontmatter.titulo) {
    frontmatter.titulo = "Sem título";
  }
  if (!frontmatter.data) {
    frontmatter.data = new Date().toISOString();
  }

  if (!frontmatter.resumo) {
    frontmatter.resumo = "Sem resumo";
  }
  
  return (
    <article className="prose lg:prose-xl mx-auto p-4">
      {/* Header information (Frontmatter) */}
      <h1>{frontmatter.titulo}</h1>
      <p className="text-gray-500">Publicado em {new Date(frontmatter.data).toLocaleDateString('pt-BR')}</p>

      <hr />

      {/* Article content (MDX) */}
      <MDXRemote source={content} />
    </article>
  );
}