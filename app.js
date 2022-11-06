const express = require('express');
const {randomUUID} = require('crypto');
const fs = require('fs');
const app = express();

app.use(express.json());
// USE funciona como um middle, algo que vai ser tratado entre o início da requisição e o retorno.


let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        products = JSON.parse(data);
    }
});

// POST -> inserir um dado; GET -> buscar um/ou mais dados; PUT -> alterar dado; DELETE -> remover um dado.
// BODY -> sempre que quisermos enviar dados para a minha aplicação
// Params -> aquilo que vem na url (parametros de rota). Exemplo: /products/9394993402 <- parametro
// Query -> Fazem parte da rota, mas não são obrigatórios. Exemplo: /products?id=0238202830280


app.post("/products", (req, res) => {
    //vai ter nome e preço => name e price

    const {name, price} = req.body;
    const product = { name, price, id: randomUUID(),}

    products.push(product);

    productFile();
    
    return res.json(product);
});

app.get('/products', (req, res) => {
    return res.json(products);
});

app.get("/products/:id",(req, res) => {
    const {id} = req.params; 
    const product = products.find((product) => product.id === id);
    return res.json(product);
});

app.put("/products/:id", (req, res) => {
    const {id} = req.params; 
    const {name, price} = req.body;

    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex], name, price
    }; 

    productFile();

    return res.json({message: 'produto alterado com sucesso'});
});

app.delete("/products/:id", (req, res) => {
    const {id} = req.params; 

    const productIndex = products.findIndex(product => product.id === id);
    
    products.splice(productIndex, 1);
    // pega o index que passei e remove uma posição.

    productFile();

    return res.json("Produto removido com sucesso");
});

function productFile() {
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Produto inserido');
        }   
    });
}

app.listen(8000, () => console.log('Servidor rodando na porta 8000'));