// app/articles/[slug]/page.tsx
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';

import ReadTimer from "@/components/ReadTimer";
import FakeLoader from '@/components/FakeLoader';

// This function generates static routes at build time
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article: { slug: string; }) => ({
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug) as ArticleProps | null;

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  const { frontmatter, content } = article;

  if (!content) {
    return <p>Conteúdo do artigo não disponível.</p>;
  }

  if (!frontmatter.title) {
    frontmatter.title = "Sem título";
  }
  if (!frontmatter.data) {
    frontmatter.data = new Date().toISOString();
  }

  if (!frontmatter.resumo) {
    frontmatter.resumo = "Sem resumo";
  }
  
  return (
    <FakeLoader>
      <ReadTimer />
      <article className="prose md:prose-lg lg:prose-xl mx-auto p-4 prose-img:rounded-xl prose-a:text-blue-600">
        {/* Header information (Frontmatter) */}
        <h1>{frontmatter.title}</h1>
        <p className="text-gray-500">Publicado em {new Date(frontmatter.data).toLocaleDateString('pt-BR')}</p>

        <hr />

        {/* Article content (MDX) */}
        <MDXRemote source={content} />
      </article>
    </FakeLoader>
  );
}