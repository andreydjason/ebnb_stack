"use client";

import { useState } from "react";
import { useInterval } from "@/hooks/useInterval";

export default function ReadTimer() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <p className="text-xl text-center">
      Tempo de leitura decorrido: {count} segundos
    </p>
  );
}