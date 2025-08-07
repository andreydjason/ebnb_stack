export default function LoadingSpinner() {
  return (
    // Add fallback UI that will be shown while the route is loading.
    // <LoadingSkeleton />
    <section>
        <div className="p-8 text-center text-gray-700">
            <p>Carregando...</p>
        </div>
    </section>
  )
}