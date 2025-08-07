// artigo/page.tsx
"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a home com mensagem na query string
    router.replace("/artigos");
  }, [router]);

  return null; // Pode mostrar um loading, se quiser
}