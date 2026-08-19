# FHL Engenharia e Avaliações Periciais Ltda

Site institucional da FHL Engenharia e Avaliações Periciais Ltda, apresentando os
serviços de perícia judicial, avaliação imobiliária, assistência técnica e laudos
técnicos de engenharia.

Site: [www.fhlengenhariapericial.com.br](https://www.fhlengenhariapericial.com.br)

## Estrutura

- `index.html` — página principal
- `css/style.css` — estilos
- `assets/` — logo e imagens
- `trabalhos.js` — lista de trabalhos realizados por cliente (seção "Trabalhos Realizados")

## Como atualizar os Trabalhos Realizados

A seção "Trabalhos Realizados" do site é gerada a partir do arquivo `trabalhos.js`.
Para adicionar um novo trabalho:

1. Abra o arquivo `trabalhos.js`.
2. Copie um dos blocos `{ ... }` existentes e cole antes do `];` no final da lista.
3. Preencha os campos `cliente`, `titulo`, `categoria` e `descricao`.
4. Se tiver uma foto do trabalho, coloque o arquivo em `assets/trabalhos/` e
   preencha o campo `imagem` com o caminho (ex: `assets/trabalhos/foto.jpg`).
   Se não tiver, deixe `imagem: ""`.
5. Se tiver a logo do cliente, coloque o arquivo em `assets/clientes/` e
   preencha o campo `logoCliente` da mesma forma. Se não tiver, deixe
   `logoCliente: ""` — o site mostra automaticamente as iniciais do cliente.
6. Salve o arquivo e recarregue a página para conferir.

Clientes com o mesmo nome em `cliente` são agrupados automaticamente no
mesmo botão de filtro.

## Como visualizar localmente

Basta abrir o arquivo `index.html` em um navegador, ou servir a pasta com um
servidor estático simples, por exemplo:

```bash
npx serve .
```

## Conteúdo

Os textos de serviços e "sobre" são um rascunho inicial e devem ser revisados
e personalizados antes da publicação definitiva.

## Publicação (GitHub Pages)

Este repositório está preparado para ser publicado com GitHub Pages no domínio
próprio `www.fhlengenhariapericial.com.br` (arquivo `CNAME`).

1. Em **Settings → Pages**, defina "Source" como `Deploy from a branch`,
   branch `main`, pasta `/ (root)`.
2. No provedor do domínio (registro.br), crie um registro DNS `CNAME` no
   domínio `fhlengenhariapericial.com.br` apontando `www` para
   `fhlengenharia.github.io` (substitua pelo endereço `usuario.github.io`
   correspondente à organização/usuário do GitHub).
3. Aguarde a propagação do DNS e a emissão do certificado HTTPS pelo GitHub
   (pode levar algumas horas).
