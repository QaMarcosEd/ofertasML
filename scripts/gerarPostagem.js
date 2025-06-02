const fs = require('fs');

const produtos = require('../data/produtos.json');

produtos.forEach(prod => {
    const texto = `
🔥 OFERTA: ${prod.nome}
🛒 Marca: ${prod.marca || "Não informado"}

💰 De: R$ ${prod.precoAntigo}
💸 Por: R$ ${prod.preco} (${prod.desconto})
🚚 ${prod.frete}

👉 Confira: ${prod.link}

🖼️ Imagem: ${prod.imagem}

===============================
`;
    console.log(texto);
    
    fs.appendFileSync('postagens.txt', texto);
});
