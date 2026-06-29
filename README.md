# Observatório SIMCC - Plataforma com Inteligência Artificial

Este projeto foi desenvolvido como parte do desafio técnico para o Observatório SIMCC. A plataforma consiste num sistema Full-Stack que gere pesquisadores e produções científicas, integrado a um motor de Inteligência Artificial (RAG) para buscas semânticas em linguagem natural.

## 🚀 Tecnologias Utilizadas

**Back-end:**
* **Python & FastAPI**: Criação da API RESTful de alta performance.
* **PostgreSQL + pgvector**: Banco de dados relacional e armazenamento vetorial.
* **LangChain & OpenAI**: Engenharia de Prompt e Embeddings (text-embedding-3-small / gpt-3.5-turbo).

**Front-end:**
* **Next.js (App Router) & React**: Renderização Server-Side (SSR) e Client-Side.
* **Tailwind CSS**: Estilização da interface.
* **react-markdown**: Renderização de respostas geradas pela IA.

## ✨ Funcionalidades Entregues

1. **CRUD de Pesquisadores e Produções**: Endpoints completos geridos no FastAPI.
2. **Integração Qualis (CAPES)**: Cruzamento de dados nativo no PostgreSQL utilizando `LEFT JOIN` pelo ISSN.
3. **Assistente Virtual IA**: Rota `/busca-ia` que converte a pergunta do utilizador em vetores, busca os artigos mais semanticamente próximos no banco de dados e formula uma resposta contextualizada baseada APENAS nos dados retornados.
4. **Server-Side Filtering**: Filtro de artigos em tempo real otimizado, processando a carga de busca e limitação (LIMIT) diretamente no banco de dados via URL Search Params.

## ⚙️ Como executar o projeto localmente

### 1. Banco de Dados
Certifique-se de ter o PostgreSQL instalado com a extensão `pgvector` ativa. Crie o banco de dados e ajuste a `CONNECTION_STRING` no arquivo `main.py`.

### 2. Back-end (API)
Abra um terminal na pasta do backend:
```bash
# Ative o ambiente virtual
source venv/bin/activate  # (Linux/Mac/WSL) ou venv\Scripts\activate (Windows)

# Instale as dependências (FastAPI, Langchain, psycopg2, etc)
pip install -r requirements.txt

# Inicie o servidor
uvicorn main:app --reload