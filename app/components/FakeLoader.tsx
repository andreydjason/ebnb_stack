// app/components/FakeLoader.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
};

// This component is async so it can "await" the timer
export default async function FakeLoader({ children }: Props) {
  // The delay logic is executed only if in development
  // and if the environment variable is set to 'true'
  if (process.env.NODE_ENV === 'development' && process.env.SIMULATE_LOADING_DELAY === 'true') {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // After the delay, it returns the actual page content
  return <>{children}</>;
}