// artigos/page.tsx
"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a home com mensagem na query string
    router.replace("/?url=sobre");
  }, [router]);

  return null; // Pode mostrar um loading, se quiser
}



/*
import { Suspense } from 'react';
//import Artigo from 'Artigo.js';

import LoadingSpinner from "@/components/loading_spinner";

export default async function TodosArtigosConteudoPage() {
  // Simula Carregamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="a">
          <h1 className="text-3xl font-bold underline">
            {/* <h1>{artigo.texto}</h1> /}
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
*/