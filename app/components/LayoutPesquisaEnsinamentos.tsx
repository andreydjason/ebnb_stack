"use client";
import { useState } from 'react';
import PesquisaEnsinamentos from "@/components/PesquisaEnsinamentos";

export default function LayoutPesquisaEnsinamentos() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePesquisa = (termoPesquisaLimpo: string) => {
    setTermoPesquisa(termoPesquisaLimpo);
    // Aqui você pode fazer chamada para backend com cleanTerm
    console.log("Termo limpo para pesquisa:", termoPesquisaLimpo);
  };

  return (
    <>
        <PesquisaEnsinamentos onSearch={handlePesquisa} />
        {termoPesquisa && <p>Procurando por: <strong>{termoPesquisa}</strong></p>}
    </>
  );
}