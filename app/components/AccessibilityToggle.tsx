// components/AccessibilityToggle.tsx
'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibilityToggle() {
  const { isVisible, hide } = useAccessibility();

  if (!isVisible) return null; // se estiver invisível, nem renderiza

  return (
    <button
      onClick={hide}
      className="accessibility-button rounded-full bg-sky-700 px-4 py-2 text-white hover:bg-sky-600"
    >
      Botão Acessibilidade
    </button>
  );
}
