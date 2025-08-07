// api/artigos/[slug]/page.tsx
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    // Importa o artigo dinamicamente pelo slug
    // Atenção: o caminho do import deve ser relativo ao arquivo!
    const artigoModule = await import(`../../conteudos/artigos/${slug}.tsx`);

    const titulo = artigoModule.titulo ?? "Sem título";
    const conteudo = artigoModule.conteudo ?? "Sem conteúdo";

    return NextResponse.json({ titulo, conteudo });
  } catch (error) {
    return NextResponse.json(
      { error: "Artigo não encontrado." },
      { status: 404 }
    );
  }
}