// components/LayoutTeachingSearch.tsx
"use client";
import { useState } from 'react';
import TeachingSearch from "@/components/TeachingSearch";

export default function LayoutTeachingSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (cleanTerm: string) => {
    setSearchTerm(cleanTerm);
    console.log("Clean:", cleanTerm);
  };

  return (
    <>
        <TeachingSearch onSearch={handleSearch} />
        {searchTerm && <p>Procurando por: <strong>{searchTerm}</strong></p>}
    </>
  );
}