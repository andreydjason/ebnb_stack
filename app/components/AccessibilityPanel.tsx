// components/AccessibilityPanel.tsx
'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibilityPanel() {
  const { isVisible, show } = useAccessibility();

  if (isVisible) return null; // Só mostra quando o botão está escondido

  return (
    <div className="accessibility-panel absolute right-0 top-0 m-5 p-2 border border-gray-300 rounded-lg bg-white text-black shadow-md">
      <p>Configurações de Acessibilidade</p>
      <button
        onClick={show}
        className="rounded-xl bg-sky-700 m-0 px-4 py-2 text-white hover:bg-sky-600 hover:ring-1 hover:ring-sky-500"
      >
        Fechar
      </button>
    </div>
  );
}
