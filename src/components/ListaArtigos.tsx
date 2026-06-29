"use client";
import { useState } from "react";
import { Artigo } from "@/core/artigos";
import ArtigoCard from "./ArtigoCard";

export default function ListaArtigos({ artigosIniciais }: { artigosIniciais: Artigo[] }) {
    const [busca, setBusca] = useState("");

    // Converte a busca e o título para minúsculas para não haver erros com maiúsculas
    const artigosFiltrados = artigosIniciais.filter((artigo) => 
        artigo.nomeartigo.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div>
            {/* Barra de Pesquisa */}
            <div className="mb-6">
                <input 
                    type="text" 
                    placeholder="Filtrar artigo pelo título..." 
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border-none outline-none text-black focus:ring-4 focus:ring-blue-600 transition-all shadow-sm mb-2"
                />
                <p className="text-sm text-slate-400">
                    A mostrar {artigosFiltrados.length} de {artigosIniciais.length} artigos.
                </p>
            </div>

            {/* Lista Mapeada */}
            <ul className="flex flex-col gap-4">
                {artigosFiltrados.map((artigo) => (
                    <ArtigoCard key={artigo.producoes_id} artigo={artigo} />
                ))}
            </ul>
            
            {/* Mensagem caso a busca não encontre nada */}
            {artigosFiltrados.length === 0 && (
                <p className="text-slate-300 mt-4 text-center">Nenhum artigo encontrado com o termo "{busca}".</p>
            )}
        </div>
    );
}