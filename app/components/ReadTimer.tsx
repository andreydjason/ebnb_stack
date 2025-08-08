"use client";

import { useState } from "react";
import { useInterval } from "@/hooks/useInterval";

export default function ReadTimer() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div className="divider-box-top text-center mb-4 border shadow p-4 bg-gray-50">
      <p>
        Tempo de leitura decorrido: {count} segundos
      </p>
      <p>
        Usar internamente também para gravar estatísticas de leitura, como tempo médio por artigo.
      </p>
    </div>
  );
}