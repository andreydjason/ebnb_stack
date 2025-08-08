// components/AccessibilityToggle.tsx
'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';
import { FaUniversalAccess } from "react-icons/fa6";

export default function AccessibilityToggle() {
  const { isVisible, hide } = useAccessibility();

  if (!isVisible) return null; // se estiver invisível, nem renderiza

  return (
    <button
      onClick={hide}
      className="accessibility-button absolute right-0 top-0 m-3 rounded-full bg-sky-700 px-2 py-2 text-white hover:bg-sky-600 hover:ring-1 hover:ring-sky-500"
    >
      <FaUniversalAccess />
    </button>
  );
}
