import { Artigo } from "@/core/artigos";

export default function ArtigoCard({ artigo }: { artigo: Artigo }) {
    return (
        <li className="flex flex-col gap-2 bg-slate-300 px-4 py-3 rounded-md transition-all text-black shadow-sm">
            <div className="bg-slate-400 rounded-md p-2 text-white">
                <span className="font-bold">Título:</span> <span className="font-medium">{artigo.nomeartigo}</span>
            </div>
            
            <div className="flex justify-between items-center px-2 mt-1 text-sm text-slate-800 font-semibold">
                <span>Autor (ID): {artigo.pesquisadores_id}</span>
                <span>Qualis: <span className="text-blue-700">{artigo.estrato || "Não avaliado"}</span></span>
                <span>Ano de publicação: {artigo.anoartigo}</span>
            </div>
        </li>
    );
}