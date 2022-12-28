const quizData = [
    {
        question: "Qual o primeiro cenário que aparece na série?",
        a: "Apartamento de Mônica",
        b: "Central Perk",
        c: "Apartamento de Joey e Chandler",
        d: "Casamento Rachel",
        correct: "a",
    },

    {
        question: "Como Rachel descobre que Ross ficou com outra mulher quando deram um tempo?",
        a: "Através da Phoebe",
        b: "Ela encontra a moça no apartamento do Ross",
        c: "Quando a moça liga para Ross no dia seguinte",
        d: "Através do Gunther",
        correct: "d",
    },

    {
        question: "Em quem Mônica dá seu primeiro beijo?",
        a: "Joey",
        b: "Chandler",
        c: "Ross",
        d: "Richard",
        correct: "c",
    },

    {
        question: "Ao terminar com Janice, Chandler inventa que precisa se mudar para outro país. Que país é esse?",
        a: "Egito",
        b: "Nigéria",
        c: "Cazaquistão",
        d: "Iêmen",
        correct: "d",
    },

    {
        question: "Ao ajudar Joey com o francês, Phoebe o ensina a falar je m'apelle. O que isso quer dizer?",
        a: "Meu nome é",
        b: "Eu te amo",
        c: "Eu sou ator",
        d: "Eu me apresento",
        correct: "a",
    },

    {
        question: "No famoso quiz que fez com que Monica e Rachel perdessem o apartamento para Chandler e Joey, qual foi a última pergunta?",
        a: "Qual é o emprego do Chandler?",
        b: "Qual é a comida preferida do Joey?",
        c: "Qual o nome da avó materna do Joey?",
        d: "Quantas irmãs Joey tem?",
        correct: "a",
    },

    {
        question: "Em qual temporada Mônica e Chandler ficam juntos pela primeira vez?",
        a: "4ª",
        b: "5ª",
        c: "6ª",
        d: "7ª",
        correct: "b",
    },

    {
        question: "Qual o nome do noivo que Rachel deixa no altar?",
        a: "Matt",
        b: "Matthews",
        c: "Harry",
        d: "Barry",
        correct: "d",
    },

    {
        question: "Quantas irmâs Joey têm?",
        a: "4",
        b: "6",
        c: "7",
        d: "9",
        correct: "c",
    },

    {
        question: "Qual a profissão de Ross?",
        a: "Doutor de Pesquisas Históricas",
        b: "Professor em Pesquisa Científica",
        c: "Palentólogo",
        d: "Cientista de Dinossauros",
        correct: "c",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Você acertou ${score}/${quizData.length} questões</h2>

            <button onclick="location.reload()">Recomeçar</button>
            `
        }
    }
})
