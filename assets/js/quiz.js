const username = JSON.parse(localStorage.getItem('username'));

const h1 = document.getElementById('welcome-h1');

h1.innerText = `Welcome to the Quiz ${username}`;
// Array have indexes
// the  index starts from 0
// The first element lies at index zero

const quizdata = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '8', isCorrect: false },
            { text: '6', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '10', isCorrect: false },
        ]

    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false },

        ]



    },
    {
        question: "What is the capital city of Tunisia?",
        answers: [
            { text: 'Agadir', isCorrect: false },
            { text: 'Tounis', isCorrect: true },
            { text: 'Leroun', isCorrect: false },
            { text: 'London', isCorrect: false },
        ]


    },
    {
        question: "Who wrote the play of Romeo and Juliet?",
        answers: [
            { text: 'Oscar Wild', isCorrect: false },
            { text: 'James Austin', isCorrect: false },
            { text: 'William Shakespear', isCorrect: true },
            { text: 'Anna Rose', isCorrect: false },
        ]


    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: 'Vincent van Gogh', isCorrect: false },
            { text: 'Leonardo da Vinci', isCorrect: true },
            { text: 'Pablo Picasso', isCorrect: false },
            { text: 'Jackson Pollock', isCorrect: false },
        ]


    },
    {
        question: "What is your body's largest organ",
        answers: [
            { text: 'Brain', isCorrect: false },
            { text: 'Heart', isCorrect: false },
            { text: 'Body', isCorrect: false },
            { text: 'Skin', isCorrect: true },
        ]


    },



];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = quizdata[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });


}


startQuiz();










































