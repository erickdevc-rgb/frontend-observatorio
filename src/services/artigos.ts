const url: string = "http://127.0.0.1:8000/producoes";

const getArtigos = async () => {
  const resposta = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store" // Garante dados atualizados
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar as produções");
  }

  return resposta.json();
};

export default getArtigos;