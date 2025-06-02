describe('Coleta de Ofertas - Mercado Livre', () => {
  it('Coleta 3 produtos e salva em JSON', () => {
    cy.visit('https://www.mercadolivre.com.br/ofertas#nav-header');

    cy.wait(7000);  // Dá tempo para carregar os produtos

    const produtos = [];

    cy.get('div.poly-card', { timeout: 15000 }).each(($el, index) => {
      if (index < 3) {
        const nome = $el.find('.poly-component__title').text().trim();
        const marca = $el.find('.poly-component__brand').text().trim();
        const preco = $el.find('.poly-price__current .andes-money-amount__fraction').text().trim();
        const precoAntigo = $el.find('.andes-money-amount--previous .andes-money-amount__fraction').text().trim();
        const desconto = $el.find('.andes-money-amount__discount').text().trim();
        const link = $el.find('.poly-component__title').attr('href');
        const imagem = $el.find('.poly-component__picture').attr('src');
        const frete = $el.find('.poly-component__shipping').text().trim();

        produtos.push({
          nome,
          marca,
          preco,
          precoAntigo,
          desconto,
          link,
          imagem,
          frete
        });
      }
    }).then(() => {
      cy.writeFile('data/produtos.json', produtos);
    });
  });
});