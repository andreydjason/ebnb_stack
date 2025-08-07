// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    // Add fallback UI that will be shown while the route is loading.
    // <LoadingSkeleton />
    <section>
        <div className="loader-spinner p-8 text-center text-gray-700 mt-5">
          <div className="spinner"></div>
          <p>Carregando aguarde...</p>
        </div>
    </section>
  )
}