class Product { 
constructor(title, price, image, description) { // o constructor é chamado sempre que criamos um "new Product"
    this.title = title; // atributo titulo
    this.price = price; // atributo preço
    this.image = image; // atributo link da imagem
    this.description = description; // atributo da descrição
}
}

module.exports = Product; // é feita a exportação para que outros arquivos consigam usar essa classe