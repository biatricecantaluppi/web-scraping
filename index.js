const NetshoesScraper = require('./scraper');

async function run() {
const url = 'https://www.netshoes.com.br/p/tenis-nike-revolution-8-feminino-SGL-0026-026';
const scraper = new NetshoesScraper();

try {
    console.log('Iniciando captura de dados...');
    const product = await scraper.scrape(url);

    if (product.title) {
    console.log('Captura de dados realizada com sucesso:');
    console.table(product); 
    } else {
    console.log('Aviso: O scraper rodou, mas os dados retornaram vazios.');
    }
} catch (error) {
    console.error('Erro crítico na execução:', error.message);
}
}
run();