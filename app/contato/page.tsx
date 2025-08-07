// app/contato/page.tsx
import { redirect } from "next/navigation";

export default function ArtigoPage() {
  // Redireciona imediatamente para /artigos no servidor
  redirect("/?url=contato");
}