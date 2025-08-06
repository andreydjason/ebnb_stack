import { Suspense } from 'react';
//import Artigo from 'Artigo.js';

import LoadingSpinner from "@/components/loading_spinner";

//import Image from "next/image";

export default async function ArtigoConteudoPage() {
  // Simula Carregamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="a">
          <h1 className="text-3xl font-bold underline">
            {/* <h1>{artigo.texto}</h1> */}
            <Suspense fallback={<Loading />}>
              Artigo...
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