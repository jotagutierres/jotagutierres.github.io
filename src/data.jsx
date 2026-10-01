/* global window */
// ------ Projects + experience + education data ------

const PROJECTS = [
  {
    id: "fordcase",
    name: "FordPass CRM",
    desc: "Two CRM journeys, a push cadence and in-app UX writing that took connected-vehicle modem activation in Brazil from 11% to 16.5% and cut support tickets by 43%.",
    tags: ["Product Strategy", "CRM", "UX Writing"],
    year: "2024",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordcase.html",
    pt: { desc: "Duas jornadas de CRM, uma cadência de notificações e textos no app que elevaram a ativação do modem dos veículos conectados no Brasil de 11% para 16,5% e reduziram chamados de suporte em 43%.", tags: ["Estratégia de produto", "CRM", "UX Writing"] },
  },
  {
    id: "fordpass",
    name: "FordPass®",
    desc: "Redesigning the Brazilian version of Ford's companion app around what owners open it to do: start the car, check on it, book a service.",
    tags: ["Product Design", "Mobile"],
    year: "2023",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordpass.html",
    pt: { desc: "Redesenho da versão brasileira do aplicativo da Ford em torno do que os proprietários precisam fazer: ligar o carro, verificar seu estado e agendar serviços.", tags: ["Design de produto", "Mobile"] },
  },
  {
    id: "coral",
    name: "Coral Brazil",
    desc: "A landing page system for Coral, the Brazilian paint brand founded in 1954, where the colour itself leads every page.",
    tags: ["Product Design", "Web"],
    year: "2024",
    image: "https://framerusercontent.com/images/6uUfpGxnMMLw7kklMyIlYclV4mo.jpg",
    href: "work/coral.html",
    pt: { name: "Coral Brasil", desc: "Um sistema de páginas para a Coral, marca brasileira de tintas fundada em 1954, em que a própria cor conduz cada experiência.", tags: ["Design de produto", "Web"] },
  },
  {
    id: "telesena",
    name: "Tele Sena",
    desc: "Rebuilding the product behind Brazil's best-known capitalization bond, so results, redemptions and purchases live in one place.",
    tags: ["Product Design", "Mobile"],
    year: "2024",
    image: "https://framerusercontent.com/images/6eWjjIG48XJday0WL9mYH9Yg5Hw.jpg",
    href: "work/telesena.html",
    pt: { desc: "Reconstrução do produto por trás de um dos títulos de capitalização mais conhecidos do Brasil, reunindo resultados, resgates e compras em um só lugar.", tags: ["Design de produto", "Mobile"] },
  },
  {
    id: "ranger",
    name: "Ranger Scroll Drive",
    desc: "A lockdown-era virtual test drive: you steer a Ford Ranger through the terrain with nothing but the scroll wheel.",
    tags: ["Interactive", "Campaign"],
    year: "2021",
    image: "https://framerusercontent.com/images/mV7iW9VZk0QREGOTfWRoRTglcM.jpg",
    href: "work/ranger.html",
    pt: { desc: "Um test-drive virtual criado durante o isolamento: você conduz uma Ford Ranger pelo terreno usando apenas a rolagem da página.", tags: ["Interativo", "Campanha"] },
  },
];

const EXPERIENCE = [
  { company: "VML Brazil", role: "Senior Product Designer", period: "2021 – Present", pt: { role: "Designer sênior de produto", period: "2021 – Presente" } },
  { company: "Silvio Santos Group", role: "Senior Product Designer", period: "2024 – 2025", pt: { role: "Designer sênior de produto" } },
  { company: "Invento Advertising", role: "UI / UX Designer", period: "2019 – 2021", pt: { role: "Designer de UI / UX" } },
  { company: "Beco Advertising", role: "Designer", period: "2018 – 2019" },
  { company: "Freego", role: "Design Intern", period: "2017", pt: { role: "Estagiário de design" } },
];

const EDUCATION = [
  { school: "Tera", degree: "Digital Product Design", note: "User-centred design, prototyping, agile methods, usability testing and iterating on real problems.", pt: { degree: "Design de produtos digitais", note: "Design centrado nas pessoas, prototipação, métodos ágeis, testes de usabilidade e iteração sobre problemas reais." } },
  { school: "UXNOW", degree: "UX Design & Research Essentials", note: "Research, ideation, prototyping and testing, with principles from cognitive psychology applied to digital products.", pt: { degree: "Fundamentos de UX e pesquisa", note: "Pesquisa, ideação, prototipação e testes, com princípios da psicologia cognitiva aplicados a produtos digitais." } },
  { school: "DesignBoost", degree: "UI Designer", note: "Interface design from the fundamentals through advanced techniques and visual systems.", pt: { degree: "Design de interfaces", note: "Design de interfaces, dos fundamentos a técnicas avançadas e sistemas visuais." } },
  { school: "University of Sorocaba", degree: "Bachelor's in Advertising & Marketing", note: "Communication, creativity and strategy, which still shape how I make product decisions.", pt: { school: "Universidade de Sorocaba", degree: "Bacharelado em Publicidade e Propaganda", note: "Comunicação, criatividade e estratégia, que ainda orientam minhas decisões de produto." } },
];

const CLIENTS = [
  "Ford", "Coral", "Silvio Santos", "Tele Sena", "VML", "Johnson & Johnson",
  "Santander", "Samsung", "Ypê", "Nestlé",
];

Object.assign(window, { PROJECTS, EXPERIENCE, EDUCATION, CLIENTS });
