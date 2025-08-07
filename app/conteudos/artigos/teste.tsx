// /conteudos/artigos/teste.tsx
import Head from 'next/head'

export default function ArtigoTestePage() {
  return (
    <>
      <Head>
        <title>Título Teste Head</title>
      </Head>
      <main className="prose mx-auto p-4">
        <h1>Título Teste</h1>
        <p>
          Teste...
        </p>
        <p>
          Teste...
        </p>
      </main>
    </>
  )
}