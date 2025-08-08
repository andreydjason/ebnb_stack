// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  let carregamentoFalso = false;

  if (process.env.NODE_ENV === 'development' && process.env.SIMULATE_LOADING_DELAY === 'true') {
    carregamentoFalso = true;
  }

  return (
    <section>
      <div className="loader-spinner p-8 text-center text-gray-700 mt-5">
        <div className="spinner"></div>
        <p>Carregando aguarde...</p>
        {carregamentoFalso && <p>*Carregamento falso para testes*</p>}
      </div>
    </section>
  );
}