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
    logoCliente: "assets/clientes/tjsp.svg",
    titulo: "Perícia judicial em ação de vícios construtivos",
    categoria: "Perícia Judicial",
    descricao: "Laudo pericial elaborado para ação cível, com vistoria técnica e identificação de não conformidades construtivas.",
    imagem: ""
  },
  {
    cliente: "Caixa Econômica Federal",
    logoCliente: "assets/clientes/caixa.svg",
    titulo: "Avaliação imobiliária para fins de financiamento",
    categoria: "Avaliação Imobiliária",
    descricao: "Avaliação de imóvel urbano conforme NBR 14653, para concessão de crédito imobiliário.",
    imagem: ""
  },
  {
    cliente: "Caixa Econômica Federal",
    logoCliente: "assets/clientes/caixa.svg",
    titulo: "Vistoria técnica de imóvel residencial",
    categoria: "Vistoria Predial",
    descricao: "Vistoria cautelar com relatório fotográfico e identificação de patologias construtivas.",
    imagem: ""
  },
  {
    cliente: "Sest Senat",
    logoCliente: "assets/clientes/sest-senat.svg",
    titulo: "Laudo técnico de vistoria predial",
    categoria: "Laudo Técnico",
    descricao: "Vistoria e laudo técnico de unidade, com levantamento de patologias e recomendações técnicas.",
    imagem: ""
  },
  {
    cliente: "Concremat Engenharia",
    logoCliente: "assets/clientes/concremat.svg",
    titulo: "Acompanhamento técnico e vistoria de obra",
    categoria: "Assistência Técnica",
    descricao: "Apoio técnico com registro de ocorrências e vistorias periódicas em atendimento a contrato de engenharia.",
    imagem: ""
  },
  {
    cliente: "Máquinas Agrícolas Jacto",
    logoCliente: "assets/clientes/jacto.svg",
    titulo: "Laudo técnico de engenharia",
    categoria: "Laudo Técnico",
    descricao: "Laudo técnico elaborado para atendimento às necessidades da empresa.",
    imagem: ""
  },
  {
    cliente: "FDE - Fundação para o Desenvolvimento da Educação",
    logoCliente: "assets/clientes/fde.svg",
    titulo: "Vistoria técnica de unidade escolar",
    categoria: "Vistoria Predial",
    descricao: "Vistoria técnica em unidade escolar, em atendimento a demanda da Fundação para o Desenvolvimento da Educação (FDE).",
    imagem: ""
  }
];
