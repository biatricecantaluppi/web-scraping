const puppeteer = require('puppeteer');
const Product = require('./product'); // importa o modelo criado

class NetshoesScraper { // método pra baixar o html da página
async scrape(url) {
    const browser = await puppeteer.launch({ 
    headless: "new", // Roda sem abrir a janela do Chrome
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });

    try {
    const page = await browser.newPage();

      // define um User-Agent de um navegador real
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      // vai até a URL e espera o conteúdo principal carregar
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
// espera um seletor comum de preço aparecer (garante que a página carregou o JS)
    try {
        await page.waitForSelector('.price-current, .default-price, [itemprop="price"]', { timeout: 5000 });
    } catch (e) {
        console.log("Aviso: Tempo de espera do preço esgotado, tentando capturar o que estiver disponível.");
    }
      // extrai os dados de dentro da página já renderizada
    const data = await page.evaluate(() => {
        const getMeta = (name) => 
        document.querySelector(`meta[property="${name}"]`)?.content || 
        document.querySelector(`meta[name="${name}"]`)?.content;

        // 1. Título e Imagem (Que já estão funcionando)
        const title = document.querySelector('h1')?.innerText?.trim() || getMeta('og:title');
        const image = getMeta('og:image') || document.querySelector('.photo-item img')?.src;
        const description = getMeta('og:description') || document.querySelector('.product-description')?.innerText?.trim();

        let price = null;

        const jsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
        jsonScripts.forEach(script => {
        try {
            const json = JSON.parse(script.innerHTML);
            const nestedPrice = json.offers?.price || json.offers?.lowPrice || (Array.isArray(json) && json[0].offers?.price);
            if (nestedPrice) price = nestedPrice.toString();
        } catch (e) {}
        });

        if (!price) {
        price = document.querySelector('.price-current')?.innerText || 
        document.querySelector('.default-price strong')?.innerText ||
        document.querySelector('.salePrice')?.innerText ||
        document.querySelector('.price-sale')?.innerText;
        }

        if (!price) {
        const allText = document.body.innerText;
        const match = allText.match(/R\$\s?(\d{1,3}(\.\d{3})*,\d{2})/);
        if (match) price = match[0];
        }

        return { title, price, image, description };
    });

      // formatação final do preço (limpeza de strings)
    let displayPrice = "Consulte o site";
    if (data.price) {
        // remove letras, mantém números, vírgula e ponto
        const cleaned = data.price.toString().replace(/[^\d,. ]/g, '').trim();
        displayPrice = `R$ ${cleaned}`;
    }

    return new Product(
        data.title,
        displayPrice,
        data.image,
        data.description ? data.description.substring(0, 150) + "..." : "Sem descrição"
    );
} catch (error) {
    throw new Error(`Erro ao extrair dados: ${error.message}`);
    } finally {
    await browser.close();
    }
}
}

module.exports = NetshoesScraper;