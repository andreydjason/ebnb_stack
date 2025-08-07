// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    // <LoadingSkeleton />
    <section>
        <div className="loader-spinner p-8 text-center text-gray-700 mt-5">
          <div className="spinner"></div>
          <p>Carregando aguarde...</p>
        </div>
    </section>
  )
}