# Pipeline de Ingestão e Estruturação de Dados: E-commerce Intelligence 📊

Este projeto consiste em uma solução automatizada de **Data Sourcing** desenvolvida para extrair, tratar e estruturar dados de e-commerce (Netshoes). O objetivo principal é transformar informações desestruturadas da web em datasets prontos para processos de análise de mercado, precificação dinâmica e monitoramento de concorrência.

##  Objetivo do Projeto
Resolver o gargalo da coleta manual de dados externos, garantindo um fluxo contínuo de informações íntegras e padronizadas para suporte à tomada de decisão.

##  Tecnologias e Ferramentas
* **Runtime:** Node.js
* **Data Extraction:** Puppeteer (Automação de navegador para lidar com SPAs e conteúdo dinâmico).
* **Data Integrity:** Regex e metadados JSON-LD para garantir a captura de dados precisos e estruturados.
* **Arquitetura:** Programação Orientada a Objetos (POO) com foco em escalabilidade e manutenibilidade.

##  Diferenciais Técnicos (Foco em Dados)
* **Captura de Conteúdo Dinâmico:** Uso de Puppeteer para simular navegação humana e contornar renderizações em JavaScript, garantindo que nenhum ponto de dado (preço, estoque, SKU) seja perdido.
* **Integridade e Padronização:** Implementação de lógica de extração via JSON-LD, assegurando que o dado coletado siga um esquema pré-definido e livre de ruídos de HTML.
* **Tratamento na Fonte:** O pipeline realiza a normalização dos dados durante a coleta, entregando um output limpo e pronto para ser consumido por ferramentas de BI ou bancos de dados SQL.

##  Estrutura da Solução
A aplicação foi desenvolvida seguindo o princípio de **Responsabilidade Única**:

* `Product.js`: Define o modelo de dados e o esquema da entidade de produto.
* `Scraper.js`: Centraliza a inteligência de navegação, seletores e lógica de extração.
* `index.js`: Ponto de entrada (Bootstrap) que gerencia o fluxo de execução do pipeline.

##  Valor Gerado
A ferramenta transforma a navegação web em um ativo de dados estruturado, permitindo:
1.  **Benchmarking de Preços:** Comparação automatizada entre produtos.
2.  **Monitoramento de Estoque:** Identificação de disponibilidade em tempo real.
3.  **Datasets Prontos para EDA:** Geração de arquivos prontos para Análise Exploratória de Dados (Python/Pandas).

---

## Como executar?
1- Download: Clonar o repositório do GitHub ou extrair o arquivo .zip.

2- Instalação: Baixar o Node.js no seu computador.

3- Configuração:  Abrir o terminal na pasta e rodar npm install.

4- Execução: Rodar node index.js. O resultado aparecerá em uma tabela.

## Visualização do projeto.
<img width="1352" height="719" alt="img-teste-web-scraping" src="https://github.com/user-attachments/assets/0ba39980-edf6-4921-92c9-a7392a9ec7fc" />
<img width="1352" height="672" alt="tenisnike" src="https://github.com/user-attachments/assets/954fe105-15f7-4af4-90b3-5f44cd7f077c" />
