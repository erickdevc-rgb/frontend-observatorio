// 1. Removemos o "use client" e o "import { use }" do topo
import { Artigo } from "@/core/artigos";
import getArtigos from "@/services/artigos";

// 2. Colocamos o "async" na função principal
export default async function Artigos() {
    // 3. Trocamos o "use()" por "await"
    const artigos = await getArtigos();

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-7">Artigos</h1>
            
            <ul className="flex flex-col gap-4">
                {artigos.map((artigo: Artigo) => (
                    <li 
                        key={artigo.producoes_id} 
                        className="flex flex-col gap-2 bg-slate-300 px-4 py-3 rounded-md transition-all text-black shadow-sm"
                    >
                        <div className="bg-slate-400 rounded-md p-2 text-white">
                            <span className="font-bold">Título:</span> <span className="font-medium">{artigo.nomeartigo}</span>
                        </div>
                        
                        <div className="flex justify-between items-center px-2 mt-1 text-sm text-slate-800 font-semibold">
                            <span>Autor (ID): {artigo.pesquisadores_id}</span>
                            <span>Qualis: <span className="text-blue-700">{artigo.estrato || "Não avaliado"}</span></span>
                            <span>Ano de publicação: {artigo.anoartigo}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}