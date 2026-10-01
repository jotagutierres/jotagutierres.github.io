/* Portuguese editorial copy for the four shared case-study pages. */
const CASE_PT = {
  fordpass: {
    pageTitle: "FordPass® — Carlos Gutierres",
    role: "Designer de produto",
    scope: "Aplicativo móvel · Design system",
    title: <>FordPass®, <span className="serif">uma experiência</span> conectada.</>,
    lead: <>Redesenhei a experiência diária de quem usa o FordPass no Brasil, da partida remota ao agendamento de serviços.</>,
    coverAlt: "Telas do aplicativo FordPass",
    context: [
      "O FordPass é o aplicativo global da Ford para proprietários de veículos. No Brasil, reúne comandos remotos, informações do carro, agendamento de serviços, contato com concessionárias e benefícios em um só lugar.",
      "<span class='muted'>Desenhei a versão brasileira, adaptando padrões globais à maneira como os motoristas se relacionam com seu carro, sua concessionária e sua cidade.</span>",
    ],
    challenge: [
      "Os fluxos misturavam tarefas práticas, como pagar por um serviço ou agendar manutenção, com informações sobre o veículo, benefícios e notícias da Ford. As pessoas chegavam com uma intenção clara e precisavam desviar de outros conteúdos para concluí-la.",
      "Precisávamos reconstruir a experiência em torno da <strong>intenção</strong>: o veículo, seu estado e a próxima ação disponível no centro da tela inicial, preservando o espaço de comunicação da equipe de marketing da Ford.",
    ],
    approachTitle: "O veículo em primeiro lugar",
    approach: [
      "Começamos mapeando as seis intenções mais frequentes, de <em>\"quero ligar meu carro\"</em> a <em>\"preciso agendar uma revisão\"</em>, e contamos os toques necessários entre abrir o app e concluir cada tarefa.",
      "Reorganizamos a arquitetura da informação em torno dessas intenções. A tela inicial deixou de ser uma vitrine de marketing e virou um painel vivo: estado do veículo no topo, uma ação principal logo abaixo e o restante ainda acessível, mas com menor prioridade.",
      "<span class='muted'>Em paralelo, trabalhei com a equipe global de design system para ampliar os componentes usados no Brasil: formas de pagamento, campos de CPF, categorias de serviços e dados da rede de concessionárias.</span>",
    ],
    decisions: [
      "Reduzimos de 5 para 3 abas (<strong>Início, Serviços, Conta</strong>), diminuindo o que a pessoa precisa entender ao abrir o app.",
      "Criamos uma <strong>tela inicial orientada pelo estado do veículo</strong>, com um resumo do carro, a próxima ação e um único espaço de comunicação no lugar de um carrossel de banners.",
      "Padronizamos os fluxos para terminar em <strong>até 4 etapas</strong>, com o mesmo padrão de confirmação em todo o app.",
      "Criamos um <strong>fluxo de agendamento</strong> inspirado em pedir uma corrida: datas, horários e tipos de serviço são opções para tocar, em vez de menus suspensos.",
    ],
    outcome: [
      "A nova tela inicial chegou aos usuários brasileiros e se tornou referência para a estrutura dos fluxos locais no FordPass. O tempo até a primeira ação caiu, a conclusão de agendamentos melhorou e o design system ganhou um módulo brasileiro que continua em uso.",
    ],
    metrics: [
      { n: "−42%", l: "Toques para agendar" },
      { n: "4,6/5", l: "Avaliação na loja de apps" },
      { n: "3×", l: "Onboarding mais rápido" },
      { n: "1 mi+", l: "Usuários ativos no Brasil" },
    ],
    reflection: [
      "O mais difícil foi alinhar uma equipe global, o marketing regional e a rede de concessionárias sobre o significado da tela inicial. Quando concordamos que ela deveria servir primeiro ao motorista, muitas decisões de design se resolveram.",
      "<span class='muted'>Ainda começo meus projetos assim: listo o que as pessoas estão tentando fazer e, a partir daí, volto para a interface.</span>",
    ],
    next: { name: "Coral Brasil", href: "coral.html" },
  },
  coral: {
    pageTitle: "Coral Brasil — Carlos Gutierres",
    role: "Designer de produto",
    scope: "Landing pages · Design para web",
    title: <>70 anos de <span className="serif">cor.</span></>,
    lead: <>Landing pages de produtos para a Coral, uma das marcas de tintas mais conhecidas do Brasil, construídas em um sistema visual conduzido pela cor.</>,
    coverAlt: "Designs de landing pages de produtos Coral",
    context: [
      "A Coral pinta casas brasileiras desde 1954, e seu nome é conhecido em todo o país. No digital, porém, a presença havia virado um mosaico: páginas inconsistentes, linguagens visuais diferentes e campanhas de produto sempre começando do zero.",
      "<span class='muted'>O briefing pedia landing pages capazes de converter. Para isso, precisávamos de um sistema flexível o suficiente para dar personalidade a cada lançamento e consistente o bastante para preservar a voz da marca.</span>",
    ],
    challenge: [
      "Uma marca de tintas vende também pela maneira como apresenta as cores. A maioria das páginas mostrava apenas uma pequena amostra ao lado de especificações: útil em um catálogo técnico, mas insuficiente para imaginar um ambiente pronto.",
      "O sistema precisava atender toda a linha Coral, de produtos premium para interiores a tintas comerciais para exteriores, cada um com seu público e objetivo de conversão.",
    ],
    approachTitle: "Deixar a cor conduzir",
    approach: [
      "Reconstruí a página em torno da cor. A abertura virou um grande campo cromático com o nome do produto sobreposto; cada seção seguinte adotou um tom da paleta daquela linha.",
      "Definimos cinco módulos: abertura, benefícios, especificações, inspiração e onde comprar. Cada um tem variações. Uma linha premium recebe um layout editorial; uma linha funcional usa especificações mais densas, montadas com as mesmas peças.",
      "<span class='muted'>Cada módulo foi entregue como componente responsivo no Figma, com orientações de texto, regras de imagem e layouts permitidos. Assim, a equipe de marketing pode publicar novas páginas sem quebrar o sistema.</span>",
    ],
    decisions: [
      "<strong>A cor como protagonista</strong>: a paleta do produto ocupa 60% da primeira tela antes mesmo da leitura do texto.",
      "<strong>Tipografia editorial</strong>: uma serifada de destaque com uma fonte sem serifa neutra cria uma voz mais acolhedora para uma marca que vende a sensação de estar em casa.",
      "<strong>Galeria de inspiração</strong>: cada página termina com ambientes reais em paletas reais, ajudando a imaginar o resultado, e não só o produto.",
      "<strong>Onde comprar</strong>: um localizador de lojas mostra a disponibilidade, já que muita gente pesquisa online e compra presencialmente.",
    ],
    outcome: [
      "O sistema de landing pages foi lançado em todo o catálogo de produtos da Coral. Hoje o marketing coloca uma página de campanha no ar em dias, em vez de semanas, mantendo uma identidade reconhecível em cada lançamento.",
    ],
    metrics: [
      { n: "12+", l: "Páginas de produto" },
      { n: "−60%", l: "Tempo até o lançamento" },
      { n: "+28%", l: "Duração da sessão" },
      { n: "70 anos", l: "História da marca" },
    ],
    reflection: [
      "Toda campanha quer parecer especial e reaproveitar o que já funciona. Travar o sistema não resolve essa tensão. Fazer da opção consistente a mais rápida de construir, sim.",
      "<span class='muted'>O módulo de inspiração é a parte de que mais me orgulho. Ele mostra a Coral como parceira na criação de um lar, como a marca sempre se enxergou.</span>",
    ],
  },
  telesena: {
    pageTitle: "Tele Sena — Carlos Gutierres",
    client: "Grupo Silvio Santos",
    role: "Designer sênior de produto",
    scope: "Design system · Plataforma web",
    title: <>Tele Sena, um <span className="serif">sistema</span> reconstruído.</>,
    lead: <>Reestruturei o design system por trás de um dos títulos de capitalização mais conhecidos do Brasil, reunindo resultados, resgates e compras em um só lugar.</>,
    coverAlt: "Telas da plataforma Tele Sena",
    context: [
      "A Tele Sena é um título de capitalização de pagamento único lançado pelo Grupo Silvio Santos em novembro de 1991. Milhões de pessoas o usam para conferir resultados, resgatar prêmios e participar de sorteios semanais.",
      "<span class='muted'>Em 2024, a plataforma havia crescido organicamente por mais de três décadas. Havia componentes duplicados, comportamentos inconsistentes entre fluxos e cada novidade exigia resolver de novo problemas já solucionados em outras partes do produto.</span>",
    ],
    challenge: [
      "O sistema precisava absorver anos de casos específicos — textos legais, requisitos de acessibilidade e fluxos financeiros que exigem confiança — sem perder a familiaridade de quem usa o produto há muito tempo.",
      "Fui chamado para liderar a reestruturação: auditar o que existia, definir a base, reconstruir os componentes e entregar um sistema que a equipe interna pudesse evoluir sem depender de mim.",
    ],
    approachTitle: "Auditoria, fundação, escala",
    approach: [
      "A primeira fase foi um inventário de todas as telas do produto, componentes do Figma e variantes em produção: mais de 400 artefatos, classificados entre manter, unir ou remover.",
      "A segunda fase foi a fundação: tokens de cor, espaçamento, tipografia, elevação e movimento referenciados por todos os componentes, substituindo valores de cor e espaçamento isolados.",
      "<span class='muted'>Na terceira fase, construímos primeiro os componentes básicos, depois os padrões e, por fim, os templates de página. Cada componente veio com documentação, regras de uso e exemplos do que fazer e evitar.</span>",
    ],
    decisions: [
      "<strong>Tokens para tudo</strong>: cor, tipo, espaçamento, raio e elevação. Componentes não usam valores avulsos.",
      "<strong>Uma fonte de verdade</strong>: a biblioteca no Figma espelha a produção. Uma mudança em um ambiente atualiza o outro, e componentes obsoletos recebem uma indicação visível.",
      "<strong>Acessibilidade antes da publicação</strong>: contraste, foco, teclado e leitores de tela são especificados e verificados antes de publicar cada componente.",
      "<strong>Documentação junto aos componentes</strong>: as regras de uso ficam ao lado de cada peça, não em uma apresentação separada.",
    ],
    outcome: [
      "O sistema reestruturado é hoje a base da plataforma da Tele Sena. A equipe publica mais rápido porque não precisa redesenhar o mesmo botão, e a experiência voltou a ser consistente da compra ao resgate.",
    ],
    metrics: [
      { n: "400+", l: "Artefatos auditados" },
      { n: "1", l: "Fonte de verdade" },
      { n: "+55%", l: "Velocidade de entrega" },
      { n: "WCAG AA", l: "Contraste mínimo" },
    ],
    reflection: [
      "Cada componente exigiu conciliar designers que queriam controle, desenvolvedores que buscavam consistência e gestores de produto que precisavam de velocidade. Funcionou quando os três grupos encontraram espaço no sistema.",
      "<span class='muted'>A maior lição foi o peso da documentação. Sem ela, a equipe teria apenas um conjunto de componentes que não conseguiria usar com autonomia.</span>",
    ],
  },
  ranger: {
    pageTitle: "Ranger Scroll Drive — Carlos Gutierres",
    role: "Designer de UI / UX",
    scope: "Campanha interativa",
    title: <>Ranger Scroll <span className="serif">Drive.</span></>,
    lead: <>Durante o isolamento, ninguém podia testar a nova Ranger. Criamos então um test-drive no navegador, conduzido pela rolagem da página.</>,
    coverAlt: "Ford Ranger atravessando terrenos na experiência Scroll Drive",
    context: [
      "Os anos de 2020 e 2021 mudaram a forma de comprar carros. As lojas fecharam, os test-drives pararam e o caminho habitual do anúncio à concessionária deixou de funcionar. A Ford Brasil precisava lançar uma nova Ranger sem poder colocá-la nas mãos das pessoas.",
      "<span class='muted'>O briefing: criar algo que permitisse a um possível comprador <em>sentir</em> a Ranger em casa, no dispositivo que estivesse usando.</span>",
    ],
    challenge: [
      "Test-drives digitais costumam ser vídeos com menus clicáveis: as pessoas apenas assistem. Queríamos que elas mesmas dirigissem.",
      "As restrições eram claras: funcionar em desktop <em>e</em> celular, carregar rápido em conexões brasileiras, mostrar o veículo de vários ângulos e terminar com um caminho direto para a rede de concessionárias.",
    ],
    approachTitle: "A rolagem como volante",
    approach: [
      "A ideia central surgiu cedo: usar a rolagem para conduzir. Ao rolar para baixo, a Ranger avança pelo terreno; para cima, recua; as setas do teclado controlam a direção.",
      "Criamos um roteiro de quatro ambientes — lama, pedras, travessia de rio e cidade —, cada um demonstrando uma capacidade da Ranger. Todos terminavam em um ângulo de câmera que revelava um recurso: modos off-road, altura do solo, reboque ou central multimídia.",
      "<span class='muted'>No celular, a rolagem virou gesto de deslizar. Ajustamos a física para manter a mesma sensação em todos os dispositivos, o que consumiu metade do esforço de engenharia.</span>",
    ],
    decisions: [
      "<strong>Rolar para dirigir</strong>: todo mundo já sabe rolar uma página, então não há tutorial nem introdução.",
      "<strong>Quatro terrenos, quatro recursos</strong>: cada cenário mostra um motivo para escolher a picape, sem precisar de narração.",
      "<strong>Ritmo contínuo</strong>: o percurso combina cenas pré-renderizadas, carregadas com antecedência para passar suavemente de uma à outra.",
      "<strong>Conexão com a concessionária</strong>: ao fim, um toque permite <em>agendar um test-drive perto de você</em>, transformando curiosidade em visita.",
    ],
    outcome: [
      "Ranger Scroll Drive foi uma das peças mais compartilhadas da campanha. As pessoas passaram mais tempo com a Ranger no site do que passariam em uma loja, e a conexão com as concessionárias manteve o interesse ativo quando os outros canais estavam indisponíveis.",
    ],
    metrics: [
      { n: "4,2 min", l: "Tempo médio na página" },
      { n: "+310%", l: "Acima da referência da campanha" },
      { n: "4", l: "Ambientes de terreno" },
    ],
    reflection: [
      "A melhor interação parte de algo que as pessoas já conhecem. Demos uma nova função à rolagem, e elas entenderam na hora.",
      "<span class='muted'>Ainda penso nesse projeto quando um briefing pede \"engajamento\". O que prende a atenção é ter algo para fazer com as mãos, mais do que algo para assistir.</span>",
    ],
  },
};

window.CASE_PT = CASE_PT;
