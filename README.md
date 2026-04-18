# Teste Técnico - Web Scraping 
Este projeto é um web scraper desenvolvido em Node.js para extrair informações de produtos do site Netshoes.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **Puppeteer**: Automação de navegador para lidar com conteúdo dinâmico (JavaScript) e proteções anti-bot.
- **POO (Programação Orientada a Objetos)**: Arquitetura baseada em classes para escalabilidade e organização.
- **Regex & JSON-LD**: Técnicas avançadas de extração para garantir a integridade dos dados.

## Arquitetura (POO)
O projeto foi estruturado seguindo princípios de responsabilidade única:
- `Product.js`: Define o modelo de dados (Entidade).
- `Scraper.js`: Contém toda a lógica de navegação e extração de dados.
- `index.js`: Ponto de entrada (Bootstrap) da aplicação.

## Como executar?

Primeiro instale as dependências:
npm install

Depois inicie o scraper:
node index.js