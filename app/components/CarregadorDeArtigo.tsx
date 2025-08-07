// components/CarregadorDeArtigo.tsx
"use client"
import { useState } from 'react';

interface Props {
  href: string;
}

export default function CarregadorDeArtigo({ href }: Props) {
  const [loading, setLoading] = useState(false);
  const [conteudo, setConteudo] = useState<string | null>(null);
  const [erro, setErro] = useState(false);

  const carregarArtigo = async () => {
    setLoading(true);
    setErro(false);
    setConteudo(null);

    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error('Erro ao carregar');
      const texto = await res.text();
      setConteudo(texto);
    } catch {
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={carregarArtigo}>Carregar artigo</button>

      {loading && <p>Carregando...</p>}
      {erro && <p>❌ Erro ao carregar o artigo</p>}
      {conteudo && <div dangerouslySetInnerHTML={{ __html: conteudo }} />}
    </div>
  );
}
