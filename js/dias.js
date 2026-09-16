// Conteúdo real dos 7 Améns da Madrugada + Introdução.
// videoId vazio = ainda não temos o vídeo real (mostra placeholder).
// materialPdf vazio = ainda não temos o PDF desse dia (botão fica oculto).
const DIAS = {
  0: {
    numero: '0',
    titulo: 'Introdução',
    subtitulo: 'Comece aqui antes da 1ª madrugada',
    kicker: '7 Améns da Madrugada · Comece Aqui',
    videoId: '',
    materialPdf: 'assets/pdfs/7-amens-comece-aqui-premium-revisado.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    oracao: null,
    proximo: 'Amanhã: Primeira Madrugada — O Pai Nosso Completo.'
  },
  1: {
    numero: '1',
    titulo: 'Primeira Madrugada',
    subtitulo: 'Pai Nosso Completo',
    kicker: '7 Améns da Madrugada · Dia 01',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-01-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    materialExtraPdf: 'assets/pdfs/traducao-lado-a-lado.pdf',
    materialExtraLabel: 'Manuscrito Digital em Aramaico',
    disponivel: true,
    confirmaAntes: false,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Pai Nosso, que estais no Céu,\nsantificado seja o vosso nome;',
        'venha a nós o vosso Reino;\nseja feita a vossa vontade,\nassim na Terra como no Céu.',
        'O pão nosso de cada dia nos dai hoje;\nperdoai as nossas ofensas,',
        'assim como nós perdoamos\na quem nos tem ofendido;',
        'e não nos deixeis cair em tentação,\nmas livrai-nos do mal.',
        'Porque vosso é o Reino, o poder e a glória, agora e sempre.',
        'Eu recebo, Senhor, as bênçãos que já preparastes para mim.\nAbro o meu coração para tudo aquilo que vem do Teu amor.\nHoje eu não peço mais pela metade — eu recebo por inteiro.',
        'Que a Tua paz habite em mim, hoje e todos os dias da minha vida.\nEu me entrego. Eu confio. Eu recebo.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Segunda Madrugada — A Oração do Perdão.'
  },
  2: {
    numero: '2',
    titulo: 'Segunda Madrugada',
    subtitulo: 'Oração do Perdão',
    kicker: '7 Améns da Madrugada · Dia 02',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-02-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor Jesus, Tu que na cruz olhaste para quem Te feria\ne disseste: "Pai, perdoa-lhes, porque não sabem o que fazem",\nensina-me a perdoar como Tu perdoaste.',
        'Hoje eu trouxe um nome comigo.\nEu escolho, agora, entregar essa mágoa nas Tuas mãos.',
        'Eu perdoo o que essa pessoa me fez.\nEu não vou mais deixar essa dor decidir\no meu humor, a minha casa, a minha paz.',
        'E, Senhor, hoje eu também perdoo a mim mesmo, a mim mesma,\npelo que eu fiz e nunca contei pra ninguém,\npelos erros que ainda me perseguem à noite.',
        'Eu não sou mais só aquilo que eu fiz.\nHoje eu escolho recomeçar.',
        'Tira de mim o peso que eu carreguei por anos,\nsem nem perceber o tamanho dele.\nEnche esse espaço vazio com a Tua paz.',
        'Eu solto. Eu perdoo. Eu sou livre.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Terceira Madrugada — A Oração da Cura.'
  },
  3: {
    numero: '3',
    titulo: 'Terceira Madrugada',
    subtitulo: 'Oração da Cura',
    kicker: '7 Améns da Madrugada · Dia 03',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-03-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor, Tu que caminhaste por este mundo\ncolocando as mãos sobre os doentes,\ncoloca hoje a Tua mão sobre mim\n(ou sobre o nome de quem você ama).',
        'Eu não peço só a cura do corpo.\nEu peço força pra atravessar esse tempo.',
        'Dá sabedoria a quem cuida,\ne coragem pra mim, pra seguir o tratamento até o fim.',
        'Enquanto o corpo se trata,\nque a minha alma descanse em Ti.',
        'Tira de mim o medo do resultado.\nOnde há exame, põe a Tua paz.',
        'Seja qual for a resposta que eu receber,\neu escolho confiar que Tu estás comigo.',
        'Eu não estou enfrentando isso sozinho, sozinha.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Quarta Madrugada — A Oração da Libertação.'
  },
  4: {
    numero: '4',
    titulo: 'Quarta Madrugada',
    subtitulo: 'Oração da Libertação',
    kicker: '7 Améns da Madrugada · Dia 04',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-04-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor, foi para a liberdade que Cristo me libertou.\nE hoje eu escolho viver essa liberdade.',
        'Hoje eu nomeio diante de Ti aquilo que me prende.\nIsso pode ter começado antes de mim.',
        'Mas, em nome de Jesus, pode terminar em mim.\nEu não vou entregar essa corrente\npra quem vem depois de mim.',
        'Dá-me força hoje, e força a cada dia,\naté que essa corrente não tenha mais poder sobre mim.',
        'Eu escolho a liberdade. Eu escolho recomeçar.',
        'A partir de hoje, essa corrente\nnão tem mais a última palavra sobre a minha vida.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Quinta Madrugada — A Oração da Prosperidade.'
  },
  5: {
    numero: '5',
    titulo: 'Quinta Madrugada',
    subtitulo: 'Oração da Prosperidade',
    kicker: '7 Améns da Madrugada · Dia 05',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-05-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor, Tu que prometeste suprir aquilo de que eu preciso,\neu trago diante de Ti o meu trabalho e as minhas contas.',
        'Eu não peço um milagre que me poupe de agir.\nEu peço clareza pra enxergar\no caminho que eu ainda não vi.',
        'Dá-me disciplina pra organizar o que está desorganizado,\ne coragem pra bater à porta certa.',
        'Tira de mim a vergonha da dívida,\ne o peso de sentir que eu falhei.',
        'Onde há porta fechada,\nabre uma janela que eu ainda não estou vendo.',
        'Eu escolho ter paciência comigo mesmo\nenquanto essa solução não chega.',
        'Eu confio que a provisão pode vir de onde eu menos espero.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Sexta Madrugada — A Oração da Paz.'
  },
  6: {
    numero: '6',
    titulo: 'Sexta Madrugada',
    subtitulo: 'Oração da Paz',
    kicker: '7 Améns da Madrugada · Dia 06',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-06-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor, acalma as águas dentro de mim.\nOnde há pensamento em excesso, põe silêncio.\nOnde há alerta, põe descanso.',
        'Eu solto, nas Tuas mãos,\ntudo que eu não consigo resolver hoje.',
        'Esta noite, eu descanso.\nAmanhã, Tu cuidas.'
      ],
      fechamento: 'Amém.'
    },
    proximo: 'Amanhã: Sétima Madrugada — A Oração da Aliança.'
  },
  7: {
    numero: '7',
    titulo: 'Sétima Madrugada',
    subtitulo: 'Oração da Aliança',
    kicker: '7 Améns da Madrugada · Dia 07',
    videoId: '',
    materialPdf: 'assets/pdfs/dia-07-material-apoio.pdf',
    materialLabel: 'Acessar Material de Apoio',
    disponivel: true,
    confirmaAntes: true,
    oracao: {
      abertura: 'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
      blocos: [
        'Senhor, hoje eu não venho pedir. Eu venho entregar.',
        'Entrego a Ti a conexão que abri no primeiro dia,\ne as mágoas que soltei no segundo.',
        'Entrego a Ti a saúde que apresentei,\ne a corrente que rompi.',
        'Entrego a Ti o trabalho que confiei a Ti,\ne o descanso que recebi.',
        'Cobre a minha casa.\nCobre quem dorme debaixo do meu teto.',
        'Cobre os meus filhos, os meus netos,\ne todos os que ainda virão depois de mim.',
        'Que essa semana seja o começo\nde uma vida de mais fé, mais gratidão, e mais presença.',
        'Eu fiz a minha parte. Agora eu entrego.'
      ],
      fechamento: 'Está selado. Amém.'
    },
    proximo: 'Você concluiu os 7 Améns da Madrugada. Volte a esta oração sempre que quiser selar algo diante de Deus.'
  }
};
