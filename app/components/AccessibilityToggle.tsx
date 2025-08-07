// components/AccessibilityToggle
'use client';

import { useState } from 'react';

export default function VisibilityToggle() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Acessibilidade' : 'Acessibilidade'}
      </button>

      {!isVisible && (
        <>
            <div id="accessibility-content" role="region" aria-live="polite">
                <p>(Recursos para Acessibilidade)</p>
            </div>
        </>
      )}
    </div>
  );
}