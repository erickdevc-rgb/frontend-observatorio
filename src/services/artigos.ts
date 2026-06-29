export default async function getArtigos(busca: string = "") {
    // Se existir uma palavra, anexa na URL da API com ?busca=. Senão, usa a URL padrão.
    const url = busca 
        ? `http://127.0.0.1:8000/producoes?busca=${encodeURIComponent(busca)}` 
        : `http://127.0.0.1:8000/producoes`;

    const resposta = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store" // Garante dados atualizados direto do banco
    });

    if (!resposta.ok) {
        throw new Error("Não foi possível buscar as produções");
    }

    return resposta.json();
}