// components/PesquisaEnsinamentos.tsx
"use client"
import { useState } from 'react';
import { removerAcentos, sanitizeInput } from '@/lib/utils';

interface SearchInputProps {
  onSearch: (termo_pesquisa: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [termo_pesquisa, setTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const termo_pesquisa = removerAcentos(sanitizeInput(e.target.value.toLowerCase().trim()));
    setTerm(termo_pesquisa);
    onSearch(termo_pesquisa);
  };

  return (
    <input
      type="search"
      placeholder="Pesquisar..."
      value={termo_pesquisa}
      onChange={handleChange}
      className="p-1 border border-gray-300 rounded"
      aria-label="Campo de pesquisa"
    />
  );
}