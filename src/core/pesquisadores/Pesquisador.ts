export interface Pesquisador {
  pesquisadores_id: string; // <-- Ajustado para bater com o banco de dados
  nome: string;
  lattes_id: string;
  instituicao?: string;
}