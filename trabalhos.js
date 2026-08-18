// Lista de trabalhos realizados, organizados por cliente.
//
// Para adicionar um novo trabalho, copie um dos blocos { ... } abaixo,
// cole antes do "];" e preencha os campos. Campos opcionais podem ficar
// como texto vazio "".
//
// Campos:
//   cliente      - nome do cliente (agrupa os trabalhos no filtro)
//   logoCliente  - caminho da logo do cliente em assets/clientes/ (opcional)
//   titulo       - título do trabalho
//   categoria    - tipo de serviço (ex: "Perícia Judicial")
//   descricao    - breve descrição do trabalho
//   imagem       - caminho de uma foto/print do trabalho em assets/trabalhos/ (opcional)

const trabalhos = [
  {
    cliente: "Tribunal de Justiça de São Paulo",
    logoCliente: "",
    titulo: "Perícia judicial em ação de vícios construtivos",
    categoria: "Perícia Judicial",
    descricao: "Laudo pericial elaborado para ação cível, com vistoria técnica e identificação de não conformidades construtivas.",
    imagem: ""
  },
  {
    cliente: "Caixa Econômica Federal",
    logoCliente: "",
    titulo: "Avaliação imobiliária para fins de financiamento",
    categoria: "Avaliação Imobiliária",
    descricao: "Avaliação de imóvel urbano conforme NBR 14653, para concessão de crédito imobiliário.",
    imagem: ""
  },
  {
    cliente: "Caixa Econômica Federal",
    logoCliente: "",
    titulo: "Vistoria técnica de imóvel residencial",
    categoria: "Vistoria Predial",
    descricao: "Vistoria cautelar com relatório fotográfico e identificação de patologias construtivas.",
    imagem: ""
  }
];
