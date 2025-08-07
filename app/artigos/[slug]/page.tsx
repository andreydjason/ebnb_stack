// app/artigos/[slug]/page.tsx
import { notFound } from 'next/navigation'
//import { Suspense } from 'react'

interface Props {
  params: { slug: string }
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params

  let ArtigoComponent
  try {
    ArtigoComponent = (await import(`@/conteudos/artigos/${slug}`)).default
  } catch (error) {
    notFound()
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <ArtigoComponent />
    </main>
  )
}
