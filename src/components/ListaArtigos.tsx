"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Artigo } from "@/core/artigos";
import ArtigoCard from "./ArtigoCard";

export default function ListaArtigos({ artigos }: { artigos: Artigo[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Inicia a barra de pesquisa com o que já estiver na URL
    const [termo, setTermo] = useState(searchParams.get("busca") || "");

    const handlePesquisa = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que a página recarregue piscar a tela
        
        if (termo.trim()) {
            router.push(`?busca=${encodeURIComponent(termo)}`);
        } else {
            router.push(`/artigos`); // Se limpar a busca, volta ao normal
        }
    };

    return (
        <div>
            {/* Formulário de Busca */}
            <form onSubmit={handlePesquisa} className="mb-6 flex gap-3">
                <input 
                    type="text" 
                    placeholder="Filtrar artigo no banco de dados..." 
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-md border-none outline-none text-black focus:ring-4 focus:ring-blue-600 transition-all shadow-sm"
                />
                <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md transition-colors"
                >
                    Buscar
                </button>
            </form>

            <p className="text-sm text-slate-400 mb-4">
                Exibindo os {artigos.length} artigos mais relevantes.
            </p>

            {/* Lista Mapeada Diretamente do Banco */}
            <ul className="flex flex-col gap-4">
                {artigos.map((artigo) => (
                    <ArtigoCard key={artigo.producoes_id} artigo={artigo} />
                ))}
            </ul>
            
            {artigos.length === 0 && (
                <p className="text-slate-300 mt-4 text-center">Nenhum artigo encontrado.</p>
            )}
        </div>
    );
}