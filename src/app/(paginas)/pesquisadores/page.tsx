// 1. Removemos o "use client" e o "import { use }"
import Link from "next/link";
import { Pesquisador } from "@/core/pesquisadores";
import getPesquisadores from "@/services/pesquisadores";

// 2. Colocamos o "async" direto na função
export default async function Pesquisadores() {
    // 3. Usamos "await" direto, igual fizemos na tela de detalhes!
    const pesquisadores = await getPesquisadores();

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-7">Pesquisadores</h1>
            <ul className="flex flex-col gap-3">
                {pesquisadores.map((pesquisador: Pesquisador) => (
                    <li key={pesquisador.pesquisadores_id} className="transition-all shadow-sm hover:scale-[1.01]">
                        <Link 
                            href={`/pesquisadores/${pesquisador.pesquisadores_id}`}
                            className="flex flex-col gap-3 bg-slate-300 px-3 py-2 rounded-md text-black cursor-pointer h-full block"
                        >
                            <p className="flex justify-between items-center bg-slate-400 rounded-md p-3 text-white">
                                <span className="text-lg font-semibold">Pesquisador: {pesquisador.nome}</span>
                                <span className="text-sm font-bold bg-slate-600 px-3 py-1 rounded-full">
                                    ID Lattes: {pesquisador.lattes_id}
                                </span>
                            </p>
                            {/* Retiramos a Instituição porque, olhando o seu banco, ela não existe nessa tabela! */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}