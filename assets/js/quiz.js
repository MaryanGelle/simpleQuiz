const username = JSON.parse(localStorage.getItem('username'));

const h1 = document.getElementById('welcome-h1');

h1.innerText = `Welcome to the Quiz ${username}`;
// Array have indexes
// the  index starts from 0
// The first element lies at index zero

const questions = [
    {
        questionText: "What is 2 + 2?",
        choices: [
            { text: '8', isCorrect: false },
            { text: '6', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '10', isCorrect: false },
        ]

    },
    {
        questionText: "What is the capital city of France?",
        image: "images/paris.jpg",
        choices: [
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false },

        ]



    },
    {
        questionText: "What is the capital city of Tounisia?",
        choices: [
            { text: 'Agadir', isCorrect: false },
            { text: 'Tounis', isCorrect: true },
            { text: 'Leroun', isCorrect: false },
            { text: 'London', isCorrect: false },
        ]


    },
    {
        questionText: "Who wrote the play of Romeo and Juliet?",
        choices: [
            { text: 'Oscar Wild', isCorrect: false },
            { text: 'James Austin', isCorrect: false },
            { text: 'William Shakespear', isCorrect: true },
            { text: 'Anna Rose', isCorrect: false },
        ]


    },
    {
        questionText: "Who painted the Mona Lisa?",
        choices: [
            { text: 'VINCENT VAN GOGH', isCorrect: false },
            { text: 'LÉONARD DE VINCI', isCorrect: true },
            { text: 'Pablo Picasso', isCorrect: false },
            { text: 'Jackson Pollock', isCorrect: false },
        ]


    },
    {
        questionText: "What is your body's largest organ",
        choices: [
            { text: 'Brain', isCorrect: false },
            { text: 'Heart', isCorrect: false },
            { text: 'Body', isCorrect: false },
            { text: 'skin', isCorrect: true },
        ]


    },



];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;


function startQiuz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questionText;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerHTML = choice.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}


startQuiz();









































