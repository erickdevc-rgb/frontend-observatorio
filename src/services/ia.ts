export const perguntarAoAssistente = async (pergunta: string) => {
    // encodeURIComponent garante que espaços e acentos não quebrem a URL
    const url = `http://127.0.0.1:8000/busca-ia?pergunta=${encodeURIComponent(pergunta)}`;
    
    const resposta = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!resposta.ok) {
        throw new Error("Falha ao contactar a Inteligência Artificial.");
    }

    return resposta.json();
};