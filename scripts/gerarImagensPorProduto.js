const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const produtos = require('../data/produtos.json');
  const logoPath = 'https://i.imgur.com/your-logo.png'; // 👉 substitua com seu logo ou deixe vazio

  if (!fs.existsSync('./imagens')) {
    fs.mkdirSync('./imagens');
  }

  const browser = await puppeteer.launch();

  for (let i = 0; i < produtos.length; i++) {
    const prod = produtos[i];

    const html = `
    <html>
    <head>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          width: 800px;
          height: 600px;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f54ea2, #ff7676);
        }
        .card {
          background: white;
          border-radius: 30px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          overflow: hidden;
          width: 600px;
          padding: 30px;
          position: relative;
          text-align: center;
        }
        .logo {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 60px;
        }
        .produto-img {
          width: 300px;
          border-radius: 20px;
          margin: 20px 0;
        }
        .nome {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #333;
        }
        .preco {
          font-size: 32px;
          color: #e60023;
          font-weight: 800;
        }
        .desconto {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #e60023;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }
        .botao {
          margin-top: 20px;
          display: inline-block;
          padding: 12px 30px;
          background: #ffcc00;
          color: black;
          border-radius: 30px;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .botao:hover {
          transform: scale(1.05);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <img src="${logoPath}" class="logo" />
        <div class="desconto">${prod.desconto}</div>
        <img src="${prod.imagem}" class="produto-img" />
        <div class="nome">${prod.nome}</div>
        <div class="preco">R$ ${prod.preco}</div>
        <a class="botao" href="${prod.link}">Comprar agora</a>
      </div>
    </body>
    </html>
    `;

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: `imagens/oferta-${i + 1}.png` });
    await page.close();

    console.log(`✅ Imagem gerada: imagens/oferta-${i + 1}.png`);
  }

  await browser.close();
})();