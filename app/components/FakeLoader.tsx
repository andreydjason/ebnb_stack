// app/components/FakeLoader.tsx
export default async function FakeLoader({ children }: {
  children: React.ReactNode;
}) {

  if (process.env.NODE_ENV === 'development' && process.env.SIMULATE_LOADING_DELAY === 'true') {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return (
    <>
      {children}
    </>
  );
}