import getArtigos from "@/services/artigos";
import ListaArtigos from "@/components/ListaArtigos";

export default async function Artigos() {
    // A página (Server Component) faz o "fetch" pesado
    const artigos = await getArtigos();

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-7">Artigos</h1>
            
            {/* Passamos os dados para o Client Component fazer a renderização interativa */}
            <ListaArtigos artigosIniciais={artigos} />
        </div>
    );
}