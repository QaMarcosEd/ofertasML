
# 📦 Automação de Coleta de Ofertas - Mercado Livre

## ✅ Descrição do Projeto

Este projeto automatiza a coleta de ofertas de produtos na página oficial do **Mercado Livre - Ofertas**. Ele realiza a extração de informações como nome, marca, preço, desconto, link, imagem e informações de frete.  
Após a coleta, os dados são automaticamente salvos em um arquivo `produtos.json`. O objetivo é facilitar a criação de conteúdos para postagens ou análises de mercado, tornando o processo **mais rápido, padronizado e eficiente**.

## ✅ Tecnologias utilizadas

- **Cypress** → Para automação e scraping das ofertas
- **Node.js** → Para execução dos scripts
- **JavaScript** → Linguagem base
- **JSON** → Formato de armazenamento de dados

## ✅ Fluxo do Projeto

1. Acessar a página de **Ofertas** do Mercado Livre.
2. Coletar informações dos **3 primeiros produtos** da lista.
3. Armazenar as informações no arquivo **`produtos.json`**.
4. Opcionalmente, gerar conteúdos ou imagens com base nesses dados.

## ✅ Casos de Teste - Cypress

### 📝 Arquivo: `cypress/e2e/ofertas.cy.js`

### ✅ Cenário: Coleta de Ofertas no Mercado Livre

**Objetivo:**  
Garantir que o sistema consiga acessar a página de ofertas do Mercado Livre, capturar informações de pelo menos 3 produtos e armazenar corretamente em um arquivo `produtos.json`.

### **Caso de Teste 1:** Acessar a página de ofertas

- **Dado que** o sistema de automação está ativo  
- **Quando** acessar o link `https://www.mercadolivre.com.br/ofertas`  
- **Então** deve carregar a lista de ofertas com sucesso

✅ **Resultado esperado:**  
O Cypress deve conseguir identificar os elementos de produtos na página.

### **Caso de Teste 2:** Capturar informações de 3 produtos

- **Dado que** a página de ofertas foi carregada  
- **Quando** o script de coleta for executado  
- **Então** deve capturar os seguintes dados de 3 produtos:
  - Nome
  - Marca (se existir)
  - Preço atual
  - Preço antigo
  - Percentual de desconto
  - Link do produto
  - Imagem
  - Frete

✅ **Resultado esperado:**  
As informações devem ser salvas corretamente como objetos dentro de um array em `produtos.json`.

### **Caso de Teste 3:** Gerar o arquivo `produtos.json`

- **Dado que** foram coletados os dados de 3 produtos  
- **Quando** a automação terminar  
- **Então** deve ser criado o arquivo `produtos.json` na raiz do projeto contendo um array com as informações coletadas.

✅ **Resultado esperado:**  
Arquivo `produtos.json` com estrutura correta.

## ✅ Exemplo de Estrutura do Arquivo `produtos.json`

```json
[
  {
    "nome": "Tablet Samsung Galaxy Tab S6 Lite Wi-fi 64gb 4gb Ram Tela 10.4 Cinza - Sm-p620nzadzto",
    "marca": "SAMSUNG",
    "preco": "1.899",
    "precoAntigo": "2.999",
    "desconto": "36% OFF",
    "link": "https://www.mercadolivre.com.br/tablet-link",
    "imagem": "https://imagem-link.webp",
    "frete": "Chegará grátis amanhã"
  }
]
```

## ✅ Status atual:

| Caso de Teste | Descrição                                      | Status |
|---------------|------------------------------------------------|--------|
| 1             | Acessar página de ofertas                      | ✅ Passou |
| 2             | Capturar informações de 3 produtos             | ✅ Passou |
| 3             | Gerar arquivo `produtos.json`                  | ✅ Passou |

## ✅ Como rodar o projeto

```bash
npm install
npm run rodar-tudo
```

Este comando irá:

1. Rodar a coleta automática com Cypress.
2. Gerar o arquivo `produtos.json`.