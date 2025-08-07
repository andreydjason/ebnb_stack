// conteudos/artigos/teste.tsx
export const titulo = "Meu Primeiro Artigo";

export const conteudo = `
  <p>Conteúdo HTML do meu primeiro artigo...</p>
`;

export default function MeuPrimeiroArtigo() {
  return (
    <article>
      <h1>{titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: conteudo }} />
    </article>
  );
}