"use client";
import { useState } from "react";
import { perguntarAoAssistente } from "@/services/ia";

export default function AssistenteIA() {
    const [pergunta, setPergunta] = useState("");
    const [resposta, setResposta] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handlePesquisa = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!pergunta.trim()) return;

        setCarregando(true);
        setResposta(""); // Limpa a resposta anterior

        try {
            const dados = await perguntarAoAssistente(pergunta);
            setResposta(dados.resposta_ia);
        } catch (erro) {
            setResposta("Ocorreu um erro ao tentar processar a sua pergunta. Verifique se a API está a correr.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-white mb-2">Assistente Virtual SIMCC</h1>
            <p className="text-slate-300 mb-8">Faça perguntas em linguagem natural sobre os artigos científicos da nossa base de dados.</p>

            <form onSubmit={handlePesquisa} className="flex gap-3 mb-8">
                <input 
                    type="text" 
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                    placeholder="Ex: Quais são as pesquisas sobre doenças virais?"
                    className="flex-1 px-4 py-3 rounded-md border-none outline-none text-black focus:ring-4 focus:ring-blue-600 transition-all shadow-sm"
                    disabled={carregando}
                />
                <button 
                    type="submit"
                    disabled={carregando}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md transition-colors disabled:opacity-50"
                >
                    {carregando ? "A pensar..." : "Pesquisar"}
                </button>
            </form>

            {/* Caixa de Resposta da IA */}
            {resposta && (
                <div className="bg-slate-200 text-black p-6 rounded-md shadow-lg border-l-4 border-blue-600">
                    <h2 className="text-lg font-bold text-slate-800 mb-2">Resposta da IA:</h2>
                    <p className="leading-relaxed whitespace-pre-wrap">{resposta}</p>
                </div>
            )}
        </div>
    );
}