export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
};

export type IconName =
  | "file-check"
  | "chart"
  | "shield"
  | "users"
  | "user"
  | "building"
  | "briefcase"
  | "graduation"
  | "certificate"
  | "calculator";

export const services: Service[] = [
  {
    slug: "abertura-alteracao-encerramento-cnpj",
    title: "Abertura, alteração e encerramento de CNPJ",
    description:
      "Cuidamos de todo o processo legal para abrir, alterar ou encerrar a sua empresa com segurança.",
    icon: "file-check",
  },
  {
    slug: "assessoria-contabil",
    title: "Assessoria Contábil",
    description:
      "Escrituração e gestão contábil completa para manter sua empresa em dia com as obrigações.",
    icon: "chart",
  },
  {
    slug: "assessoria-fiscal",
    title: "Assessoria Fiscal",
    description:
      "Apuração de impostos e cumprimento das obrigações fiscais com precisão e tranquilidade.",
    icon: "shield",
  },
  {
    slug: "departamento-pessoal",
    title: "Departamento Pessoal",
    description:
      "Folha de pagamento, admissões, rescisões e rotinas trabalhistas sob controle.",
    icon: "users",
  },
  {
    slug: "assessoria-mei",
    title: "Assessoria para MEI",
    description:
      "Suporte completo para o Microempreendedor Individual, da abertura às declarações.",
    icon: "user",
  },
  {
    slug: "consultoria-empresarial",
    title: "Consultoria Empresarial",
    description:
      "Orientação estratégica para apoiar decisões e o crescimento saudável do seu negócio.",
    icon: "building",
  },
  {
    slug: "gestao-financeira-equipes-rh",
    title: "Gestão Financeira e de Equipes / RH",
    description:
      "Organização financeira e de pessoas para uma gestão mais eficiente do dia a dia.",
    icon: "briefcase",
  },
  {
    slug: "treinamentos-desenvolvimento",
    title: "Treinamentos e Desenvolvimento Pessoal e Gerencial",
    description:
      "Capacitação para times e lideranças evoluírem junto com a empresa.",
    icon: "graduation",
  },
  {
    slug: "licencas-funcionamento",
    title: "Licenças de Funcionamento",
    description:
      "Regularização de licenças e alvarás necessários para operar com segurança.",
    icon: "certificate",
  },
  {
    slug: "calculos-trabalhistas",
    title: "Cálculos Trabalhistas",
    description:
      "Cálculos precisos de verbas trabalhistas para manter a empresa em conformidade.",
    icon: "calculator",
  },
];

export type Audience = {
  label: string;
  icon: IconName;
};

export const audiences: Audience[] = [
  { label: "Empresas", icon: "building" },
  { label: "Pequenas e médias empresas", icon: "briefcase" },
  { label: "MEIs", icon: "certificate" },
  { label: "Profissionais", icon: "user" },
  { label: "Pessoas físicas", icon: "users" },
];

export type Differential = {
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    title: "Agilidade",
    description: "Respostas rápidas e acompanhamento próximo.",
  },
  {
    title: "Atendimento próximo",
    description: "Uma relação mais acessível e humana.",
  },
  {
    title: "Clareza",
    description: "Orientações objetivas para facilitar suas decisões.",
  },
  {
    title: "Estratégia",
    description: "Contabilidade usada também como apoio à gestão.",
  },
];

export type Testimonial = {
  name: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amanda Oliveira",
    text: "Excelente atendimento! Fui muito bem atendida desde o primeiro contato. A equipe foi extremamente prestativa, educada e ágil em todas as etapas do processo, esclarecendo minhas dúvidas com muita paciência e profissionalismo.",
  },
  {
    name: "Jessica Maria",
    text: "Profissional super competente, honesto e rápido para resolver pendências. Fez minha declaração do MEI em menos de um dia. Fiquei muito satisfeita com o serviço.",
  },
  {
    name: "Janira Tamiris Carrasco",
    text: "Educado, transparente, salvou minha empresa e de outras pessoas que indiquei. Além de conhecimento, traça estratégias e planejamentos. Tenho certeza que ele é o melhor contador pois acima de tudo tem muita ética e conhecimento.",
  },
  {
    name: "Kawan Santos",
    text: "Ótimo profissional, educado, justo, responde rápido recomendo com certeza!",
  },
  {
    name: "Moraes MC",
    text: "Ótimo atendimento e trabalho, resolveu meu problema em instantes!! Sem Estresse.",
  },
  {
    name: "Madá Helena Souzas",
    text: "Atendimento de excelência, em menos de 1 hora ele fez o meu imposto de renda e entregou. Nota 1000.",
  },
  {
    name: "Luiz Henrique",
    text: "Estamos tendo uma experiência incrível. Eles nos acompanham em todos os processos, trazendo segurança, organização e tranquilidade no dia a dia.",
  },
  {
    name: "Joice Souza",
    text: "Muito profissionais, fazem um excelente trabalho.",
  },
  {
    name: "Renato Santiago",
    text: "Profissional de primeira linha, rapidez e eficiência no que preciso. Super recomendo!",
  },
  {
    name: "Sabrina Regiane",
    text: "Ótimo atendimento, atencioso tira todas as dúvidas, recomendo.",
  },
  {
    name: "Priscila Zordnunes",
    text: "Gostaria de expressar minha enorme gratidão ao Mavilin e a toda a equipe do escritório de contabilidade ContMav. Durante o processo de fechamento e abertura da minha empresa, recebi um atendimento excepcional, com total dedicação, paciência e profissionalismo.",
  },
  {
    name: "Evandro José da Silva",
    text: "Excelente atendimento. Muito eficiente.",
  },
  {
    name: "Fernanda Carvalho",
    text: "Está de parabéns pela atenção e agilidade no serviço prestado.",
  },
  {
    name: "Isabel Morales",
    text: "O atendimento e o profissionalismo do Mavilin é maravilhoso! Muito atencioso, esclarece todas as dúvidas que tive, muito paciente e sempre disponível.",
  },
  {
    name: "Elizangela Mattos Faria",
    text: "Serviço impecável! Mavilin e sua equipe do escritório de contabilidade ContMav me atenderam com total profissionalismo, agilidade e clareza em todas as etapas do processo.",
  },
];
