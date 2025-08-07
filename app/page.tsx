// app/page.tsx
import Image from "next/image";
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

import FakeLoader from '@/components/FakeLoader';

type Article = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export default async function Inicio() {
  const articles: Article[] = getAllArticles();

  return (
    <FakeLoader>
      <div>
        <p className="flex p-6"></p>
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <Image className="size-12 shrink-0" src="" alt="" />
          <div>
            <div className="text-xl font-medium text-black dark:text-white">Teste</div>
            <p className="text-gray-500 dark:text-gray-400">Progredindo!</p>
          </div>
        </div>
      </div>


      <div className="container mx-auto max-w-3xl p-4">
        <div className="divider"></div>
        <h1 className="text-4xl text-center font-bold mb-8">Ensinamentos Baseados<br></br>na Bíblia Sagrada</h1>
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.slug} className="border p-4 rounded-lg">
              <h2 className="text-2xl font-semibold">
                <Link href={`/artigos/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mt-1">{new Date(article.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="text-gray-700 mt-2">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </FakeLoader>
  );
}