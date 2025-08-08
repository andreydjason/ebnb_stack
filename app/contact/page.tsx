// app/contact/page.tsx
import FakeLoader from "@/components/FakeLoader";

export default function Contact() {
  return (
    <FakeLoader>
      <div className="container text-center mx-auto max-w-3xl p-4">
        <div className="space-y-6">
          <h1 className="text-2x1">Formulário de Contato...</h1>
        </div>
      </div>
    </FakeLoader>
  );
};