// app/articles/[slug]/page.tsx
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';

import ReadTimer from "@/components/ReadTimer";
import FakeLoader from '@/components/FakeLoader';

// Gera as rotas estáticas no build
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article: { slug: string }) => ({
    slug: article.slug,
  }));
}

type ArticleProps = {
  frontmatter: {
    title: string;
    data: string;
    resumo?: string;
  };
  content: string;
};

export default async function ArticlePage(ArticleProps: { params: Promise<{ slug: string }> }) {
  const { slug } = await ArticleProps.params;

  if (
    process.env.NODE_ENV === 'development' &&
    process.env.SIMULATE_LOADING_DELAY === 'true'
  ) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const article = (await getArticleBySlug(slug)) as ArticleProps | null;

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  const { frontmatter, content } = article;

  if (!content) {
    return <p>Conteúdo do artigo não disponível.</p>;
  }

  // Valores padrão
  const safeFrontmatter = {
    title: frontmatter.title || 'Sem título',
    data: frontmatter.data || new Date().toISOString(),
    resumo: frontmatter.resumo || 'Sem resumo',
  };

  return (
    <FakeLoader>
      <ReadTimer />
      <article className="prose md:prose-lg lg:prose-xl mx-auto p-4 prose-img:rounded-xl prose-a:text-blue-600 dark:prose-invert">
        {/* Cabeçalho */}
        <h1>{safeFrontmatter.title}</h1>
        <p className="text-gray-500">
          Publicado em{' '}
          {new Date(safeFrontmatter.data).toLocaleDateString('pt-BR')}
        </p>

        <hr />

        {/* Conteúdo MDX */}
        <MDXRemote source={content} />
      </article>
    </FakeLoader>
  );
}