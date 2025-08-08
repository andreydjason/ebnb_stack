// components/TeachingSearch.tsx
"use client"
import { useState } from 'react';
import { removeAccents, sanitizeInput } from '@/lib/utils';

interface TeachingSearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function TeachingSearch({ onSearch }: TeachingSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanTerm = removeAccents(sanitizeInput(e.target.value.toLowerCase().trim()));
    setSearchTerm(cleanTerm);
    onSearch(cleanTerm);
  };

  return (
    <input
      type="search"
      placeholder="Pesquisar..."
      value={searchTerm}
      onChange={handleChange}
      className="search-input p-1 border border-gray-300 rounded-lg text-black outline outline-white/5 rounded-full px-3 py-1 text-sm leading-5 font-semibold text-white hover:bg-gray-700"
      aria-label="Campo de pesquisa"
    />
  );
}