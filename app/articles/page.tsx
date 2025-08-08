// app/articles/page.tsx
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

import FakeLoader from '@/components/FakeLoader';

type Article = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export default function ArticleListPage() {
  const articles: Article[] = getAllArticles();

  return (
    <FakeLoader>
      <div className="container mx-auto max-w-3xl p-4">
        <h1 className="text-center text-4xl font-bold mb-6 mt-4">Todos Ensinamentos Bíblicos</h1>
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.slug} className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:text-white">
              <h2 className="text-2xl font-semibold">
                <Link href={`/artigos/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mt-1">{new Date(article.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="text-gray-700 dark:text-white mt-2">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </FakeLoader>
  );
}