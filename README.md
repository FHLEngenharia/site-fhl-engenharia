# FHL Engenharia e Avaliações Periciais Ltda

Site institucional da FHL Engenharia e Avaliações Periciais Ltda, apresentando os
serviços de perícia judicial, avaliação imobiliária, assistência técnica e laudos
técnicos de engenharia.

Site: [www.fhlengenharia.com.br](https://www.fhlengenharia.com.br)

## Estrutura

- `index.html` — página principal
- `css/style.css` — estilos
- `assets/` — logo e imagens

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
próprio `www.fhlengenharia.com.br` (arquivo `CNAME`).

1. Em **Settings → Pages**, defina "Source" como `Deploy from a branch`,
   branch `main`, pasta `/ (root)`.
2. No provedor do domínio, crie um registro DNS `CNAME` apontando `www` para
   `fhlengenharia.github.io` (substitua pelo endereço `usuario.github.io`
   correspondente à organização/usuário do GitHub).
3. Aguarde a propagação do DNS e a emissão do certificado HTTPS pelo GitHub
   (pode levar algumas horas).
