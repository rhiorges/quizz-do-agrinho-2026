// --- BANCO DE PERGUNTAS (Atualizado com 13 perguntas) ---
const perguntas = [
    {
        pergunta: "Qual é o principal objetivo do Programa Agrinho?",
        opcoes: [
            "Incentivar o uso de eletrónicos nas escolas rurais.",
            "Desenvolver a consciência cidadã e a sustentabilidade a partir do ambiente escolar.",
            "Ensinar apenas técnicas de plantio de soja.",
            "Organizar feiras de ciências urbanas."
        ],
        correta: 1
    },
    {
        pergunta: "O Programa Agrinho é uma iniciativa de qual instituição principal?",
        opcoes: [
            "Ministério da Tecnologia.",
            "SENAR / Federação da Agricultura.",
            "Banco Central do Brasil.",
            "Prefeituras municipais de forma isolada."
        ],
        correta: 1
    },
    {
        pergunta: "Quais temas costumam ser abordados nos materiais do Agrinho?",
        opcoes: [
            "Apenas matemática financeira avançada.",
            "Meio ambiente, saúde, segurança pessoal e ética.",
            "História do cinema internacional.",
            "Programação de jogos digitais."
        ],
        correta: 1
    },
    {
        pergunta: "O que significa o conceito de 'Desenvolvimento Sustentável'?",
        opcoes: [
            "Usar todos os recursos naturais agora até esgotarem.",
            "Focar apenas no crescimento industrial sem olhar para a natureza.",
            "Suprir as necessidades do presente sem comprometer as gerações futuras.",
            "Proibir qualquer tipo de agricultura ou pecuária."
        ],
        correta: 2
    },
    {
        pergunta: "Qual das seguintes ações ajuda diretamente na conservação da água?",
        opcoes: [
            "Deixar a torneira aberta enquanto escova os dentes.",
            "Praticar a captação e reaproveitamento da água da chuva.",
            "Lavar a calçada com mangueira todos os dias.",
            "Descartar óleo de cozinha usado diretamente na pia."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a importância da reciclagem para o meio ambiente?",
        opcoes: [
            "Reduzir a quantidade de resíduos nos aterros e poupar recursos naturais.",
            "Aumentar o desperdício de energia nas fábricas.",
            "Poluir mais os oceanos com plásticos novos.",
            "Não tem impacto real, pois o lixo desaparece sozinho."
        ],
        correta: 0
    },
    {
        pergunta: "No contexto da cidadania, qual é um dever de todo cidadão?",
        opcoes: [
            "Ignorar as leis de trânsito e segurança.",
            "Respeitar os direitos dos outros e proteger o patrimônio público.",
            "Destruir áreas verdes para construir prédios.",
            "Focar apenas nos seus próprios interesses sem ajudar a comunidade."
        ],
        correta: 1
    },
    {
        pergunta: "O que é a 'Logística Reversa' no descarte de materiais?",
        opcoes: [
            "Jogar o lixo eletrónico em rios para que a correnteza o leve.",
            "Guardar todo o lixo em casa para sempre.",
            "O retorno de produtos (como pilhas e lâmpadas) aos fabricantes após o uso.",
            "Transportar lixo de uma cidade para outra sem tratamento."
        ],
        correta: 2
    },
    {
        pergunta: "Qual prática agrícola ajuda a evitar a erosão do solo?",
        opcoes: [
            "O desmatamento total das encostas de morros.",
            "O plantio direto e a rotação de culturas.",
            "As queimadas frequentes para limpar o terreno.",
            "O uso excessivo e sem controle de tratores pesados na chuva."
        ],
        correta: 1
    },
    {
        pergunta: "Por que as abelhas e outros polinizadores são vitais para a agricultura?",
        opcoes: [
            "Porque produzem apenas mel para o comércio local.",
            "Eles não têm importância real para a produção de alimentos.",
            "Eles ajudam na reprodução das plantas, garantindo a produção de frutos e sementes.",
            "Porque impedem o crescimento de ervas daninhas."
        ],
        correta: 2
    },
    {
        pergunta: "O que caracteriza o consumo consciente?",
        opcoes: [
            "Comprar produtos apenas pela embalagem mais bonita.",
            "Adquirir produtos sem necessidade, focando apenas no impulso.",
            "Refletir sobre a necessidade da compra e o impacto ambiental do produto.",
            "Consumir o máximo de produtos descartáveis possível."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a principal vantagem das energias renováveis (como solar e eólica)?",
        opcoes: [
            "Elas poluem tanto quanto o carvão e o petróleo.",
            "Utilizam recursos que não se esgotam e causam menor impacto ambiental.",
            "São fontes de energia que funcionam apenas durante a noite.",
            "São proibidas na maioria dos países desenvolvidos."
        ],
        correta: 1
    },
    {
        pergunta: "Qual atitude demonstra respeito à biodiversidade local?",
        opcoes: [
            "Introduzir espécies exóticas invasoras sem controle.",
            "Capturar animais silvestres para criar como animais de estimação.",
            "Preservar as florestas nativas e os habitats dos animais da região.",
            "Substituir toda a vegetação local por asfalto."
        ],
        correta: 2
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

// Elementos das Telas
const telaStart = document.getElementById("start-screen");
const telaQuiz = document.getElementById("quiz-screen");
const telaResultado = document.getElementById("result-screen");

// Elementos do Jogo
const elementoPergunta = document.getElementById("question");
const elementoOpcoes = document.getElementById("options");
const botaoProximo = document.getElementById("next-btn");
const elementoPontuacao = document.getElementById("score");

// --- CONTROLO DE TELAS ---

function iniciarJogo() {
    telaStart.classList.add("hide");
    telaQuiz.classList.remove("hide");
   
    indicePerguntaAtual = 0;
    pontuacao = 0;
    mostrarPergunta();
}

function mostrarPergunta() {
    resetarEstado();
    let perguntaAtual = perguntas[indicePerguntaAtual];
    elementoPergunta.innerText = perguntaAtual.pergunta;

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("option-btn");
        botao.style.fontFamily = "inherit"; 
        botao.addEventListener("click", () => selecionarResposta(index, botao));
        elementoOpcoes.appendChild(botao);
    });
}

function resetarEstado() {
    botaoProximo.classList.add("hide");
    elementoOpcoes.innerHTML = "";
}

function selecionarResposta(indiceSelecionado, botaoClicado) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    const botoes = elementoOpcoes.querySelectorAll(".option-btn");

    botoes.forEach(btn => btn.disabled = true);

    if (indiceSelecionado === perguntaAtual.correta) {
        botaoClicado.style.backgroundColor = "#2ecc71";
        botaoClicado.style.color = "#fff";
        pontuacao++;
    } else {
        botaoClicado.style.backgroundColor = "#e74c3c";
        botaoClicado.style.color = "#fff";
        botoes[perguntaAtual.correta].style.backgroundColor = "#2ecc71";
        botoes[perguntaAtual.correta].style.color = "#fff";
    }

    botaoProximo.classList.remove("hide");
}

function proximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    telaQuiz.classList.add("hide");
    telaResultado.classList.remove("hide");
    elementoPontuacao.innerText = `Acertou em ${pontuacao} de ${perguntas.length} perguntas!`;
}

function voltarParaInicio() {
    telaResultado.classList.add("hide");
    telaStart.classList.remove("hide");
}

// --- NOVO SISTEMA DE ACESSIBILIDADE GLOBAL ---
let tamanhoBasePixels = 16; 

function alterarFonte(direcao) {
    tamanhoBasePixels += direcao * 2;
   
    if (tamanhoBasePixels < 12) tamanhoBasePixels = 12;
    if (tamanhoBasePixels > 26) tamanhoBasePixels = 26;
   
    document.documentElement.style.fontSize = tamanhoBasePixels + "px";
}

function alternarContraste() {
    document.body.classList.toggle("high-contrast");
}
