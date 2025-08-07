// app/404.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a home com mensagem na query string
    router.replace("/?erro=404");
  }, [router]);

  return null; // Pode mostrar um loading, se quiser
}