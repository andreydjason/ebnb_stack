'use client';

import { useEffect, useRef } from 'react';

// Define o tipo para o callback do timer e o delay
type TimerCallback = () => void;
type TimerDelay = number | null;

export function useInterval(callback: TimerCallback, delay: TimerDelay) {
  // Use useRef para persistir a função callback entre renderizações
  const savedCallback = useRef<TimerCallback | undefined>(undefined);

  // Lembra a última função callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configura o intervalo
  useEffect(() => {
    function tick() {
      // Chama a função callback mais recente
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}