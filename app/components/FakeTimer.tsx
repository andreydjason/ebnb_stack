'use client';

import { useState } from 'react';
import { useInterval } from '@/hooks/useInterval';

export default function Timer() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <p className="text-xl">
      Tempo decorrido: {count} segundos
    </p>
  );
}