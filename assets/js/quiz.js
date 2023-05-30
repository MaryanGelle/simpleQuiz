const username = JSON.parse(localStorage.getItem('username'));

const h1 = document.getElementById('welcome-h1');

h1.innerText = `Welcome to the Quiz ${username}`;
// Array have indexes
// the  index starts from 0
// The first element lies at index zero
const questions = [
    {
        questionTex: "What is 2 + 2?",
        choices: [
            { text: '8', isCorrect: false },
            { text: '6', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '10', isCorrect: false },
        ]

    },
    {
        questionTex: "What is the capital city of France?",
        image: "images/paris.jpg",
        choices: [
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false },

        ]



    },
    {
        questionTex: "What is the capital city of Tounisia?",
        choices: [
            { text: 'Agadir', isCorrect: false },
            { text: 'Tounis', isCorrect: true },
            { text: 'Leroun', isCorrect: false },
            { text: 'London', isCorrect: false },
        ]


    },
    {
        questionTex: "Who wrote the play of Romeo and Juliet?",
        choices: [
            { text: 'Oscar Wild', isCorrect: false },
            { text: 'James Austin', isCorrect: false },
            { text: 'William Shakespear', isCorrect: true },
            { text: 'Anna Rose', isCorrect: false },
        ]


    },
    {
        questionTex: "Who painted the Mona Lisa?",
        choises: [
            { text: 'VINCENT VAN GOGH', isCorrect: false },
            { text: 'LÉONARD DE VINCI', isCorrect: true },
            { text: 'Pablo Picasso', isCorrect: false },
            { text: 'Jackson Pollock', isCorrect: false },
        ]


    },
    {
        questionTex: "What is your body's largest organ",
        choises: [
            { text: 'Brain', isCorrect: false },
            { text: 'Heart', isCorrect: false },
            { text: 'Body', isCorrect: false },
            { text: 'skin', isCorrect: true },
        ]


    },



];

console.log(questions);

// we are using camel case notaion to create the variable
let currentQuestionIndex;

















































