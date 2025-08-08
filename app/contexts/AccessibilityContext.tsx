// contexts/AccessibilityContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type AccessibilityContextType = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <AccessibilityContext.Provider value={{ isVisible, show, hide }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility deve ser usado dentro do AccessibilityProvider');
  return context;
}
