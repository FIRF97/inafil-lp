/**
 * CATÁLOGO DE PRODUTOS ODONTOLÓGICOS — INAFIL
 * ============================================
 * Lista oficial de materiais, instrumentais e equipamentos
 * odontológicos comercializados pela Inafil em Angola.
 * 
 * NOTA: Conforme diretrizes da loja, os preços não são fixados
 * publicamente, sendo informados sob consulta direta pelo WhatsApp.
 */

const ProductData = {
    // Categorias Clínicas Odontológicas
    categories: [
        {
            id: "instrumentos",
            name: "Instrumentais e Cirurgia",
            slug: "instrumentais-e-cirurgia",
            shortDesc: "Kits clínicos, fórceps, alavancas, bandejas e instrumentais cirúrgicos em aço inox.",
            image: "assets/images/produtos/kit-clinico-8pc.jpg"
        },
        {
            id: "dentistica",
            name: "Dentística e Restauração",
            slug: "dentistica-e-restauracao",
            shortDesc: "Kits de restauração estética, microaplicadores, matrizes e brocas odontológicas.",
            image: "assets/images/produtos/kit-dentistica.jpg"
        },
        {
            id: "endodontia",
            name: "Endodontia",
            slug: "endodontia",
            shortDesc: "Limas endodônticas, cones de guta-percha, cones de papel absorventes e réguas calibradoras.",
            image: "assets/images/produtos/limas-endodonticas.jpg"
        },
        {
            id: "equipamentos",
            name: "Equipamentos Clínicos",
            slug: "equipamentos-clinicos",
            shortDesc: "Canetas de alta rotação LED e fotopolimerizadores odontológicos de alta potência.",
            image: "assets/images/produtos/caneta-alta-rotacao.jpg"
        },
        {
            id: "moldagem",
            name: "Moldagem e Prótese",
            slug: "moldagem-e-protese",
            shortDesc: "Alginatos de alta precisão cromática e jogos de moldeiras perfuradas em inox.",
            image: "assets/images/produtos/alginato.jpg"
        },
        {
            id: "consumiveis",
            name: "Consumíveis e Proteção",
            slug: "consumiveis-e-protecao",
            shortDesc: "Sugadores cirúrgicos, roletes de algodão, seringas carpule, posicionadores e viseiras.",
            image: "assets/images/produtos/sugador.jpg"
        },
        {
            id: "profilaxia",
            name: "Profilaxia e Polimento",
            slug: "profilaxia-e-polimento",
            shortDesc: "Kits completos de polimento, taças, escovas e acabamento dental.",
            image: "assets/images/produtos/kit-polimento.jpg"
        }
    ],

    // Os 26 Materiais Odontológicos Oficiais da Inafil
    products: [
        {
            id: "INF-001",
            name: "Caneta de Alta Rotação com LED e Spray Triplo",
            slug: "caneta-de-alta-rotacao",
            category: "equipamentos",
            categoryName: "Equipamentos Clínicos",
            shortDesc: "Turbina odontológica de alta velocidade com botão push-button, rolamentos cerâmicos e iluminação LED integrada.",
            fullDesc: "Caneta de alta rotação ergonómica em aço inoxidável e titânio, projetada para procedimentos de corte, desgaste e preparação cavitária com máxima suavidade e baixo nível de ruído. Equipada com sistema push-button para troca rápida de brocas, spray triplo de água para arrefecimento homogéneo da polpa dentária e iluminação LED que proporciona campo de visão claro e sem sombras. Autoclavável até 135°C.",
            specs: [
                "Velocidade: 350.000 a 420.000 RPM",
                "Fixação por sistema Push-Button para brocas FG Ø 1.6 mm",
                "Spray triplo de água e arrefecimento eficiente",
                "Iluminação LED integrada de alta luminosidade",
                "Rolamentos de cerâmica de alta durabilidade e baixo atrito",
                "Autoclavável até 135°C"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/caneta-alta-rotacao.jpg",
            order: 1
        },
        {
            id: "INF-002",
            name: "Kit de Dentística Restauradora",
            slug: "kit-de-dentistica",
            category: "dentistica",
            categoryName: "Dentística e Restauração",
            shortDesc: "Conjunto restaurador odontológico completo com resinas compostas, adesivo e espátulas de inserção.",
            fullDesc: "Kit essencial de dentística operatória e estética composto por seringas de resina composta nano-híbrida em diferentes matizes, sistema adesivo universal e instrumentos para escultura e modelagem de restaurações directas em dentes anteriores e posteriores. Permite acabamento anatómico perfeito com alta resistência mecânica à abrasão mastigatória.",
            specs: [
                "Resinas compostas nano-híbridas de excelente polimento",
                "Sistema adesivo universal de alta adesão dentinária",
                "Espátulas de titânio antiaderentes para escultura",
                "Excelente estabilidade de cor e radiopacidade",
                "Indicado para restaurações classes I, II, III, IV e V"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-dentistica.jpg",
            order: 2
        },
        {
            id: "INF-003",
            name: "Microaplicador Odontológico (Microbrush)",
            slug: "microaplicador",
            category: "dentistica",
            categoryName: "Dentística e Restauração",
            shortDesc: "Aplicadores descartáveis com haste flexível e ponta de microfibra que não solta fiapos.",
            fullDesc: "Aplicadores descartáveis de precisão clínica indicados para aplicação homogénea de adesivos, ácidos de condicionamento, vernizes fluoretados, hemostáticos e selantes cavitários. A sua haste dobrável permite alcançar facilmente zonas de difícil acesso em qualquer quadrante oral sem desperdício de material.",
            specs: [
                "Tubo dispensador higiénico com 100 unidades",
                "Ponta esferoide com microfibras absorventes",
                "Haste plástica maleável dobrável em qualquer ângulo",
                "Não liberta resíduos nem absorve excesso de fluido",
                "Cores diferenciadas para identificação por calibre"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/microaplicador.jpg",
            order: 3
        },
        {
            id: "INF-004",
            name: "Fotopolimerizador LED Sem Fio de Alta Potência",
            slug: "fotopolimerizador",
            category: "equipamentos",
            categoryName: "Equipamentos Clínicos",
            shortDesc: "Lâmpada LED sem fios de última geração com emissão de luz azul concentrada e visor digital.",
            fullDesc: "Aparelho de fotopolimerização sem fio concebido para cura rápida de resinas compostas, cimentos de resina e ionómeros em poucos segundos. Inclui ponteira em fibra ótica autoclavável com rotação de 360°, temporizador digital programável, modos de potência contínua e gradual (rampa), e bateria de lítio de longa autonomia com base de carregamento.",
            specs: [
                "Intensidade de luz: até 1500 mW/cm²",
                "Comprimento de onda: 420 nm a 480 nm",
                "Visor digital com tempos programáveis (5s, 10s, 15s, 20s)",
                "Bateria de alta capacidade recarregável por indução",
                "Fibra ótica autoclavável e protetor ocular laranja"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/fotopolimerizador.jpg",
            order: 4
        },
        {
            id: "INF-005",
            name: "Kit de Fórceps Odontológicos para Exodontia",
            slug: "kit-de-forceps",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Conjunto de fórceps em aço cirúrgico forjado para extração de dentes superiores, inferiores e raízes.",
            fullDesc: "Jogo de fórceps dentários de qualidade cirúrgica superior, concebidos para exodontias com segurança e mínimo trauma tecidual. Bocais anatómicos estriados no interior para fixação firme na coroa e colo do dente, prevenindo o escorregamento durante as manobras cirúrgicas. Acabamento acetinado brilhante e resistente à corrosão.",
            specs: [
                "Fabricado em aço inoxidável cirúrgico AISI 420",
                "Composto por fórceps para molares, pré-molares, incisivos e raízes",
                "Cabos ergonómicos estriados antiderrapantes",
                "Articulações robustas com rebite rebaixado",
                "Esterilizável em autoclave até 134°C"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-forceps.jpg",
            order: 5
        },
        {
            id: "INF-006",
            name: "Kit de Alavancas Apicais Cirúrgicas",
            slug: "kit-de-alavanca",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Conjunto de alavancas dentárias (reta, curva direita e curva esquerda) para luxação dental.",
            fullDesc: "Kit de alavancas cirúrgicas indispensável para luxação, elevação e remoção de dentes e raízes residuais fraturadas. As pontas ativas afiadas e anguladas permitem penetração precisa no ligamento periodontal. Cabos volumosos e facetados oferecem firmeza e controlo da alavancagem com menor fadiga para o cirurgião.",
            specs: [
                "Inclui alavanca reta, curva esquerda e curva direita (Seldin/Coupland)",
                "Aço cirúrgico forjado de alta temperabilidade mecânica",
                "Pontas finas de alta capacidade cortante e descolamento",
                "Cabo ergonómico maciço com ranhuras anti-deslizantes",
                "Autoclavável e resistente à desinfeção intensiva"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-alavanca.jpg",
            order: 6
        },
        {
            id: "INF-007",
            name: "Kit Clínico de Diagnóstico 8 Peças em Inox",
            slug: "kit-clinico-8-pc",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Kit de exame clínico completo com espelho, sondas, pinça, espátula, escavador e curetas.",
            fullDesc: "Conjunto clínico completo com 8 instrumentos essenciais para consulta odontológica, avaliação diagnóstica e procedimentos preventivos. Produzido com precisão milimétrica em aço inoxidável acetinado antirreflexo, acompanhado de estojo organizador metálico esterilizável.",
            specs: [
                "Composição: Cabo + Espelho nº5, Pinça Clínica de Algodão, Sonda Exploradora dupla,",
                "Sonda Periodontal milimetrada, Escavador de dentina, Espátula nº 1 e Curetas",
                "Aço inoxidável cirúrgico premium",
                "Resistente a múltiplos ciclos de esterilização hospitalar",
                "Acompanha estojo metálico perfurado para autoclave"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-clinico-8pc.jpg",
            order: 7
        },
        {
            id: "INF-008",
            name: "Kit Clínico de Diagnóstico 6 Peças",
            slug: "kit-clinico-6-pc",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Conjunto clássico de diagnóstico e triagem odontológica em aço cirúrgico.",
            fullDesc: "Kit versátil e prático para a rotina diária do consultório dentário, contendo os 6 instrumentos fundamentais para exame clínico, remoção de cálculo superficial e inspeção de cáries. Proporciona sensibilidade tátil apurada e longa vida útil.",
            specs: [
                "Contém: Espelho bucal plano, Cabo recartilhado, Pinça de algodão,",
                "Sonda exploradora dupla nº 5, Sonda periodontal e Colher de dentina",
                "Aço cirúrgico autoclavável a 134°C",
                "Design anatómico confortável"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/kit-clinico-6pc.jpg",
            order: 8
        },
        {
            id: "INF-009",
            name: "Limas Endodônticas Manuais e Rotatórias",
            slug: "limas-endodonticas",
            category: "endodontia",
            categoryName: "Endodontia",
            shortDesc: "Limas de conformação e instrumentação de canais radiculares em liga de Níquel-Titânio (NiTi).",
            fullDesc: "Limas endodônticas de alta performance para desbridamento, alargamento e modelagem tridimensional de canais curvos e atresiados. A liga NiTi proporciona extraordinária flexibilidade com memória elástica, reduzindo o risco de fratura do instrumento ou transporte apical durante o tratamento.",
            specs: [
                "Disponíveis em séries 1ª e 2ª (15 a 40 e 45 a 80) e sistema rotatório",
                "Comprimentos de 21mm, 25mm e 31mm",
                "Elevada resistência à fadiga cíclica",
                "Conicidades precisas e calibradas segundo norma ISO",
                "Paragens de silicone integradas para controlo de comprimento de trabalho"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/limas-endodonticas.jpg",
            order: 9
        },
        {
            id: "INF-010",
            name: "Cones de Guta-Percha (Gutta Percha)",
            slug: "gutta-persha",
            category: "endodontia",
            categoryName: "Endodontia",
            shortDesc: "Pontas de guta-percha padronizadas para obturação hermética e tridimensional de canais radiculares.",
            fullDesc: "Cones de guta-percha biocompatíveis com excelente radiopacidade diagnóstica em raios-X, produzidos com tolerância dimensional rigorosa. Apresentam flexibilidade e plasticidade ideais para condensação lateral ou termoplastificada junto com cimento endodôntico.",
            specs: [
                "Caixa com divisórias numeradas codificadas por cores ISO",
                "Tamanhos do 15 ao 80 e conicidades especiais (0.02, 0.04, 0.06)",
                "Excelente radiopacidade contrastada",
                "Biocompatíveis e dimensionalmente estáveis ao longo do tempo"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/gutta-percha.jpg",
            order: 10
        },
        {
            id: "INF-011",
            name: "Cones de Papel Absorvente Endodôntico",
            slug: "cone-de-papel",
            category: "endodontia",
            categoryName: "Endodontia",
            shortDesc: "Pontas de papel esterilizadas de alta absorção para secagem rápida do canal radicular.",
            fullDesc: "Pontas de papel esterilizadas por radiação gama, com formato cónico calibrado de acordo com a numeração das limas endodônticas. Projetadas para absorção instantânea de exsudados, sangue ou soluções irrigadoras antes da obturação definitiva.",
            specs: [
                "Esterilizadas em embalagem selada à prova de humidade",
                "Alta capacidade de absorção sem perder a consistência ou desmanchar",
                "Calibração milimétrica e padronização ISO",
                "Disponível em calibres finos, médios e grossos (15 a 80)"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/cone-papel.jpg",
            order: 11
        },
        {
            id: "INF-012",
            name: "Kit de Sutura Cirúrgica Odontológica",
            slug: "kit-de-sutura",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Conjunto para cirurgia oral menor com porta-agulha Mayo-Hegar/Castroviejo, tesoura e pinça.",
            fullDesc: "Conjunto instrumental em aço cirúrgico indicado para sutura após exodontias, cirurgias periodontais e procedimentos pré-protéticos. O porta-agulhas com ponta em vídia assegura apreensão firme da agulha sem deslizamentos indesejados.",
            specs: [
                "Contém: Porta-agulha com ranhuras em vídia, Tesoura cirúrgica e Pinça de dissecção com dente de rato",
                "Aço inoxidável AISI 420 autoclavável",
                "Excelente balanço de peso para destreza cirúrgica",
                "Apto para fios de seda, nylon e ácido poliglicólico"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/kit-sutura.jpg",
            order: 12
        },
        {
            id: "INF-013",
            name: "Bandeja Metálica em Aço Inox Cirúrgico",
            slug: "bandeja-metalica",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Bandeja clínica profunda e resistente para organização, esterilização e transporte de instrumentos.",
            fullDesc: "Bandeja retangular estampada em chapa espessa de aço inoxidável médico sem soldas. Bordas arredondadas e polimento sanitário que facilitam a limpeza e desinfeção, sendo completamente resistente a altas temperaturas em estufas ou autoclaves.",
            specs: [
                "Aço inoxidável cirúrgico polido brilhante",
                "Dimensões práticas para bancada odontológica e consultório",
                "Cantos arredondados que não acumulam sujidade",
                "Totalmente autoclavável e resistente a soluções desinfetantes"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/bandeja-metalica.jpg",
            order: 13
        },
        {
            id: "INF-014",
            name: "Posicionador Radiográfico Odontológico",
            slug: "posicionador",
            category: "consumiveis",
            categoryName: "Consumíveis e Proteção",
            shortDesc: "Kit de posicionadores para radiografias periapicais e interproximais pela técnica do cone paralelo.",
            fullDesc: "Sistema de posicionamento radiográfico para sensores digitais e filmes radiográficos tradicionais. Permite obter radiografias com paralelismo exato, sem distorções geométricas e sem corte de ápices, protegendo o paciente de repetições desnecessárias de radiação.",
            specs: [
                "Jogo completo: anterior, posterior superior/inferior e bite-wing",
                "Anéis de mira e hastes codificadas por cores para fácil manuseio",
                "Material termoplástico de grau médico autoclavável",
                "Compatível com filmes periapicais e a maioria dos sensores digitais"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/posicionador.jpg",
            order: 14
        },
        {
            id: "INF-015",
            name: "Matriz Metálica Seccional e Porta-Matriz",
            slug: "matriz-metalica",
            category: "dentistica",
            categoryName: "Dentística e Restauração",
            shortDesc: "Tiras e matrizes metálicas em aço flexível ultrafino para restaurações proximais classe II.",
            fullDesc: "Fitas e sistemas de matriz metálica pré-formada desenvolvidos para restabelecer o contorno anatómico interproximal, a crista marginal e o ponto de contacto perfeito em restaurações de dentes posteriores com resinas compostas ou amálgama.",
            specs: [
                "Espessura ultrafina (0.03 mm ou 0.05 mm) que não deforma",
                "Aço maleável de fácil brunidura contra o dente adjacente",
                "Disponível em rolo contínuo ou matrizes pré-moldadas",
                "Excelente adaptação cervical impedindo extravasamento de resina"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/matriz-metalica.jpg",
            order: 15
        },
        {
            id: "INF-016",
            name: "Alginato de Alta Precisão para Moldagem",
            slug: "alginato",
            category: "moldagem",
            categoryName: "Moldagem e Prótese",
            shortDesc: "Hidrocolóide irreversível com indicador cromático de fases e alta reprodução de pormenores.",
            fullDesc: "Material de impressão odontológico de presa rápida com mudança de cor visual nas diferentes etapas (mistura, carga e inserção na boca). Garante impressões com alta fidelidade de detalhes anatómicos, excelente elasticidade e aroma agradável que diminui o reflexo nauseoso no paciente.",
            specs: [
                "Embalagem selada a vácuo com proteção contra humidade",
                "Indicador cromático tricolor de fases de presa",
                "Fórmula livre de poeira (Dust-Free)",
                "Excelente compatibilidade com gessos odontológicos",
                "Sabor agradável e tempo de presa equilibrado"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/alginato.jpg",
            order: 16
        },
        {
            id: "INF-017",
            name: "Moldeiras Perfuradas em Aço Inoxidável (Jogo)",
            slug: "moldeira",
            category: "moldagem",
            categoryName: "Moldagem e Prótese",
            shortDesc: "Jogo de moldeiras dentárias anatómicas perfuradas para arcada superior e inferior.",
            fullDesc: "Conjunto de moldeiras metálicas de retenção mecânica com perfurações estratégicas que travam o alginato e evitam descolamentos ao remover da boca. As bordas lisas e arredondadas oferecem total conforto ao paciente sem ferir a mucosa alveolar.",
            specs: [
                "Contém tamanhos P, M e G para arcada superior e inferior",
                "Aço inoxidável cirúrgico resistente a deformações",
                "Perfurações precisas que garantem retenção do material de moldagem",
                "Autoclavável a 134°C"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/moldeira.jpg",
            order: 17
        },
        {
            id: "INF-018",
            name: "Seringa Carpule com Refluxo para Anestesia",
            slug: "seringa-carpule",
            category: "consumiveis",
            categoryName: "Consumíveis e Proteção",
            shortDesc: "Seringa metálica de aspiração com arpão para injeção anestésica segura em odontologia.",
            fullDesc: "Seringa carpule padrão odontológico fabricada em latão cromado ou aço inox cirúrgico, dotada de sistema de arpão que permite o teste de aspiração antes da injeção, prevenindo a administração intravascular inadvertida de soluções anestésicas locais.",
            specs: [
                "Compatível com tubetes anestésicos odontológicos de 1.8ml",
                "Rosca universal padrão para agulhas gengivais descartáveis",
                "Janela lateral ampla para visualização da aspiração hemática",
                "Apoio ergonómico para polegar e dedos em anel",
                "Totalmente esterilizável em autoclave"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/seringa-carpule.jpg",
            order: 18
        },
        {
            id: "INF-019",
            name: "Viseira de Proteção Facial (Face Shield)",
            slug: "viseira",
            category: "consumiveis",
            categoryName: "Consumíveis e Proteção",
            shortDesc: "Protetor facial transparente anti-embaciamento e anti-salpicos para biossegurança clínica.",
            fullDesc: "Equipamento de Proteção Individual (EPI) ergonómico e ultraleve, desenvolvido para resguardar a face, olhos e mucosas do profissional contra aerossóis, gotículas, salpicos de sangue e resíduos projetados por turbinas e ultrassons durante os tratamentos odontológicos.",
            specs: [
                "Viseira em policarbonato óptico cristalino de alta transparência",
                "Tratamento anti-embaciamento e antirrisco em ambas as faces",
                "Armação leve com elástico regulável confortável",
                "Permite o uso concomitante de óculos graduados e máscara PFF2/cirúrgica",
                "Higienizável com álcool 70% ou clorexidina"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/viseira.jpg",
            order: 19
        },
        {
            id: "INF-020",
            name: "Kit de Polimento Dentário e Profilaxia",
            slug: "kit-de-polimento",
            category: "profilaxia",
            categoryName: "Profilaxia e Polimento",
            shortDesc: "Pontas de silicone, escovas de Robson e taças de borracha para contra-ângulo.",
            fullDesc: "Kit completo para acabamento, polimento e profilaxia de restaurações em resina composta e esmalte dentário. Inclui espirais e pontas de borracha siliconada impregnadas com óxido de alumínio para acabamento sequencial (desgaste, alisamento e brilho espelhado final).",
            specs: [
                "Padrão de encaixe RA para contra-ângulo convencional",
                "Pontas em formato de taça, chama e disco flexível",
                "Escovas de cerdas naturais e sintéticas para profilaxia",
                "Não risca o esmalte nem danifica as margens gengivais",
                "Autoclaváveis em suporte organizador"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-polimento.jpg",
            order: 20
        },
        {
            id: "INF-021",
            name: "Sugador Cirúrgico Descartável (Pacote)",
            slug: "sugador",
            category: "consumiveis",
            categoryName: "Consumíveis e Proteção",
            shortDesc: "Cânulas flexíveis transparentes com arame metálico de memória e ponteira arredondada atóxica.",
            fullDesc: "Tubos de aspiração de saliva descartáveis em PVC transparente de qualidade médica, equipados com fio de cobre interior que mantém a curvatura desejada sem dobrar ou interromper o fluxo de sucção. Ponteira com orifícios de alívio que protegem os tecidos moles da mucosa bucal.",
            specs: [
                "Pacote higiénico com 100 unidades descartáveis",
                "Ponteira cónica suave arredondada que não lesa tecidos",
                "Arame maleável incorporado que fixa o ângulo desejado",
                "Tubo transparente com diâmetro padrão universal",
                "Isento de substâncias tóxicas ou ftalatos"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/sugador.jpg",
            order: 21
        },
        {
            id: "INF-022",
            name: "Rolete de Algodão Odontológico 100% Puro",
            slug: "rolete-de-algodao",
            category: "consumiveis",
            categoryName: "Consumíveis e Proteção",
            shortDesc: "Rolos de algodão hidrófilo de alta absorção para isolamento relativo do campo operatório.",
            fullDesc: "Rolos dentários produzidos com 100% de fibras de algodão natural purificadas e alvejadas sem cloro. Mantêm a forma cilíndrica mesmo após a saturação líquida, garantindo isolamento eficiente da saliva no vestíbulo e na região sublingual sem soltar fios soltos na boca do paciente.",
            specs: [
                "100% Algodão natural hidrófilo de máxima absorção",
                "Fibras longas entrelaçadas que não soltam pelos ou resíduos",
                "Tamanho nº 2 cilíndrico standard para adultos",
                "Não adere à mucosa labial nem provoca irritações teciduais",
                "Embalagem higiénica de alta capacidade"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/rolete-algodao.jpg",
            order: 22
        },
        {
            id: "INF-023",
            name: "Kit de Brocas Diamantadas para Alta Rotação",
            slug: "kit-de-brocas",
            category: "dentistica",
            categoryName: "Dentística e Restauração",
            shortDesc: "Brocas diamantadas de corte rápido e acabamento para preparos cavitários e coroas.",
            fullDesc: "Conjunto de brocas odontológicas com diamantes naturais eletrodepositados uniformemente sobre haste de aço inoxidável temperado. Proporcionam corte ágil, frio e preciso nos tecidos duros do dente, minimizando a geração de calor por atrito e as microfraturas no esmalte.",
            specs: [
                "Estojo autoclavável com brocas esféricas, tronco-cónicas, chama e cilíndricas",
                "Granulometria diferenciada: grossa (corte rápido) e fina (acabamento)",
                "Haste FG padrão compatível com todas as canetas de alta rotação",
                "Excelente balanceamento concêntrico que elimina vibrações",
                "Alta durabilidade e resistência à despassivação"
            ],
            isAvailable: true,
            isFeatured: true,
            image: "assets/images/produtos/kit-brocas.jpg",
            order: 23
        },
        {
            id: "INF-024",
            name: "Jacaré Prendedor de Guardanapo e Babete Odontológico",
            slug: "jacare",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Pinças jacaré com corrente flexível ou cordão de silicone para fixação de babetes descartáveis.",
            fullDesc: "Prendedor de guardanapo clínico tipo jacaré em aço inoxidável ou silicone autoclavável. Apresenta molas de pressão calibrada que seguram firmemente os babetes impermeáveis sem rasgar o papel ou incomodar o pescoço do paciente.",
            specs: [
                "Garras tipo jacaré com ranhuras de travamento seguro",
                "Corrente de elos finos e resistentes em aço inoxidável",
                "Totalmente autoclavável até 134°C",
                "Comprimento anatómico confortável",
                "Resistente a ciclos frequentes de desinfeção química"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/jacare.jpg",
            order: 24
        },
        {
            id: "INF-025",
            name: "Colher de Dentina (Escavador Cirúrgico)",
            slug: "colher-de-dentina",
            category: "instrumentos",
            categoryName: "Instrumentais e Cirurgia",
            shortDesc: "Instrumento manual com lâminas curvas afiadas para remoção seletiva de tecido cariado.",
            fullDesc: "Escavador de dentina em aço cirúrgico de ponta dupla, desenvolvido para remoção suave e conservadora de cárie necrosada e remoção de restos alimentares em cavidades antes da restauração. A sua curvatura permite excelente acesso às paredes axiais e gengivais.",
            specs: [
                "Ponta dupla com lâminas circulares afiadas com acabamento espelhado",
                "Fabricado em aço inoxidável cirúrgico martensítico temperado",
                "Cabo estriado antiderrapante com excelente empunhadura",
                "Preserva a dentina sadia e afetada durante o corte",
                "Autoclavável a 134°C"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/colher-dentina.jpg",
            order: 25
        },
        {
            id: "INF-026",
            name: "Régua Endodôntica Milimetrada de Precisão",
            slug: "regua-endodontica",
            category: "endodontia",
            categoryName: "Endodontia",
            shortDesc: "Grave graduado em milímetros para medição e calibração de limas, cones de guta e pontas de papel.",
            fullDesc: "Régua odontológica de medição endodôntica em liga metálica anodizada ou aço inoxidável, com gravações a laser nítidas e orifícios calibrados de acordo com os diâmetros ISO. Essencial para fixação exata do cursor de silicone e determinação do comprimento real de trabalho.",
            specs: [
                "Escala milimétrica precisa gravada a laser (0 a 30 mm)",
                "Orifícios calibrados para corte e teste de cones de guta-percha",
                "Resistente a soluções químicas e autoclavação repetida",
                "Pode ser utilizada como anel de dedo ou pousada na bancada clínica",
                "Fácil leitura com alto contraste ótico"
            ],
            isAvailable: true,
            isFeatured: false,
            image: "assets/images/produtos/regua-endodontica.jpg",
            order: 26
        }
    ],

    /**
     * Retorna todos os produtos ordenados
     */
    getAllProducts() {
        return [...this.products].sort((a, b) => (a.order || 99) - (b.order || 99));
    },

    /**
     * Retorna os produtos em destaque para o carrossel
     */
    getFeaturedProducts() {
        return this.products
            .filter(p => p.isFeatured)
            .sort((a, b) => (a.order || 99) - (b.order || 99));
    },

    /**
     * Procura produto por ID ou Slug
     */
    getProductById(idOrSlug) {
        if (!idOrSlug) return null;
        return this.products.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
    },

    /**
     * Filtra e pesquisa os produtos
     * NOTA: Sem ordenação por preço, conforme solicitado
     */
    filterProducts({ query = "", category = "todos", sortBy = "relevance" } = {}) {
        let results = [...this.products];

        // 1. Filtro por Categoria
        if (category && category !== "todos") {
            results = results.filter(p => p.category === category);
        }

        // 2. Filtro por Pesquisa
        if (query && query.trim() !== "") {
            const cleanQuery = this._normalize(query.trim());
            results = results.filter(p => {
                const name = this._normalize(p.name);
                const desc = this._normalize(p.shortDesc + " " + p.fullDesc);
                const cat = this._normalize(p.categoryName);
                const code = this._normalize(p.id);
                return name.includes(cleanQuery) || desc.includes(cleanQuery) || cat.includes(cleanQuery) || code.includes(cleanQuery);
            });
        }

        // 3. Critério de Ordenação
        switch (sortBy) {
            case "name-asc":
                results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                results.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "category":
                results.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
                break;
            case "relevance":
            default:
                results.sort((a, b) => (a.order || 99) - (b.order || 99));
                break;
        }

        return results;
    },

    _normalize(str) {
        return (str || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }
};

window.ProductData = ProductData;
