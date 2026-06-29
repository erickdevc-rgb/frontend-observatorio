export const getProducoesPesquisador = async (id: string) => {
    const url = `http://127.0.0.1:8000/pesquisadores/${id}/producoes`;
    
    const resposta = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store"
    });

    // Se o pesquisador não tiver produções, a sua API devolve 404.
    // Retornamos um array vazio para a tela não quebrar.
    if (resposta.status === 404) {
        return [];
    }

    if (!resposta.ok) {
        throw new Error("Não foi possível buscar as produções deste pesquisador");
    }

    return resposta.json();
};