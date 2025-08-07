// /app/artigos/page.tsx
import { Suspense } from 'react';
import LoadingSpinner from "@/components/loading_spinner";

export default async function TodosArtigosConteudoPage() {
  // Simula Carregamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="a">
          <h1 className="text-3xl font-bold underline">
            <Suspense fallback={<Loading />}>
              Todos Artigos
            </Suspense>
          </h1>
        </div>
      </div>
    </section>
  );
}

function Loading() {
  return <LoadingSpinner />
}
