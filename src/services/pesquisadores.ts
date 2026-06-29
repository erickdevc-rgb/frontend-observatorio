const url: string = "http://127.0.0.1:8000/pesquisadores";

const getPesquisadores = async () => {
  const resposta = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store" // Garante dados atualizados
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar os pesquisadores");
  }

  return resposta.json();
};

export default getPesquisadores;