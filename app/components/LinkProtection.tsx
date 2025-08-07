// components/LinkProtection.tsx
"use client"
import { useEffect } from 'react';

export default function LinkProtection() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href')?.trim().toLowerCase();
        if (
          !href ||
          href.startsWith('javascript:') ||
          href.startsWith('data:') ||
          href.startsWith('vbscript:')
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}
