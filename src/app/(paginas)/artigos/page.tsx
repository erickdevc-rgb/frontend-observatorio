import getArtigos from "@/services/artigos";
import ListaArtigos from "@/components/ListaArtigos";

// O Next.js injeta os searchParams (a URL) diretamente no Server Component
export default async function Artigos({ searchParams }: { searchParams: { busca?: string } }) {
    
    // Repassa a palavra da URL para a nossa API em Python
    const artigos = await getArtigos(searchParams.busca);

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-7">Artigos Científicos</h1>
            
            {/* O componente agora só desenha o que o banco devolveu */}
            <ListaArtigos artigos={artigos} />
        </div>
    );
}