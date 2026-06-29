import Link from "next/link";
import { Artigo } from "@/core/artigos";
import { getProducoesPesquisador } from "@/services/producoesPesquisador";

// Ao tirar o "use client", podemos usar async direto no componente!
export default async function ProducoesDoPesquisador({ params }: { params: { id: string } }) {
    // Busca os dados diretamente com await
    const artigos = await getProducoesPesquisador(params.id);

    return (
        <div>
            <Link href="/pesquisadores" className="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow-md">
                &larr; Voltar para Pesquisadores
            </Link>

            <h1 className="text-2xl font-bold text-white mb-7">Publicações do Pesquisador</h1>
            
            {artigos.length === 0 ? (
                <div className="bg-slate-300 p-4 rounded-md text-slate-800 font-semibold text-center">
                    Nenhuma produção científica encontrada para este pesquisador.
                </div>
            ) : (
                <ul className="flex flex-col gap-4">
                    {artigos.map((artigo: Artigo) => (
                        <li 
                            key={artigo.producoes_id} 
                            className="flex flex-col gap-2 bg-slate-300 px-4 py-3 rounded-md transition-all text-black shadow-sm"
                        >
                            <div className="bg-slate-400 rounded-md p-2 text-white">
                                <span className="font-bold">Título:</span> <span className="font-medium">{artigo.nomeartigo}</span>
                            </div>
                            
                            <div className="flex gap-6 px-2 mt-1 text-sm text-slate-800 font-semibold">
                                <span>Qualis: <span className="text-blue-700">{artigo.estrato || "Não avaliado"}</span></span>
                                <span>Ano: {artigo.anoartigo}</span>
                                {artigo.issn && <span>ISSN: {artigo.issn}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}