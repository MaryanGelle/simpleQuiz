const username = JSON.parse(localStorage.getItem('username'));
const muteSound= document.getElementById('soundBtn');
const sound = document.getElementById("muteSound");
const wrongSound = document.getElementById("wrongSound");
console.log(sound);
console.log(wrongSound);
const h1 = document.getElementById('welcome-h1');''

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
    {
        question: "What was the name of the earliest form of paper currency?",
        answers: [
            { text: 'Gold', isCorrect: false },
            { text: 'Silver', isCorrect: false },
            { text: 'Flying Money', isCorrect: true },
            { text: 'coins', isCorrect: false },
        ]


    },
    {
        question: "What country did french fries come from?",
        answers: [
            { text: 'France', isCorrect: false },
            { text: 'Belgium', isCorrect: true },
            { text: 'England', isCorrect: false },
            { text: 'USA', isCorrect: false },
        ]


    },

    {
        question: "Which disease was also known as the Great white Plauge?",
        answers: [
            { text: 'Leprosy ', isCorrect: false },
            { text: 'Hail', isCorrect: false },
            { text: 'Tuberculosis', isCorrect: true },
            { text: 'Polio', isCorrect: false },
        ]


    },
    {
        question: "which two fruits are an anagram of each other?",
        answers: [
            { text: 'Orange and Lemon ', isCorrect: false },
            { text: 'Orange and Apple', isCorrect: false },
            { text: 'Lemon and Melon', isCorrect: true },
            { text: 'Mellon and Papaya', isCorrect: false },
        ]


    },





];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

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

    answerButtons.innerHTML = ""; // Clear previous answer buttons

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        button.addEventListener("click", () => {
            if (answer.isCorrect) {
                button.classList.add("true");
                score++;
                sound.play();
            } else {
                button.classList.add("false");
                wrongSound.play();

            }
            disableAnswerButtons();
            showNextButton();
        });
    });


    if (currentQuestionIndex === quizdata.length - 1) {
        nextButton.innerHTML = "Finish";
    }

    nextButton.style.display = "none"; // Hide the next button
}


function showNextButton() {
    nextButton.style.display = "block"; // Show the next button

}


function disableAnswerButtons() {
    const buttons = answerButtons.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Disable answer buttons

    }
}


nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizdata.length) {
        showQuestion();
    } else {
        // Quiz finished, display score
        showScore();
    }
});

function showScore() {
    questionElement.innerHTML = "Thank you for playing!";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";

    // Declare and assign the scoreElement
    const scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Score: ${score} out of ${quizdata.length}`;
    scoreElement.style.display = "block";




    // Show the start button when the result is displayed
    document.getElementById("start-btn").style.display = "block";

    const startButton = document.getElementById("start-btn");


    startButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });


}

// Creating sound effect for true or false answer


function oneclick(isCorrect) {
    if (isCorrect) {
        console.log('correct sound');
        sound.play(); // Play the correct sound
    } else {
        console.log('wrong sound');
        wrongSound.play(); // Play the wrong sound
    }
}

let isMuted = false;
muteSound.addEventListener('click', () => {
  isMuted = !isMuted;
  correctSound.muted = isMuted;
  wrongSound.muted = isMuted;
  soundBtn.textContent = isMuted ? '🔇' : '🔊';
});

// Volume slider
const volumeSlider = document.querySelector('#volumeSlider');
volumeSlider.value = sound.volume = wrongSound.volume = 1;

// Initial volume for sounds
// sound.volume = 1;
// wrongSound.volume = 1; // 


// Update volumes when slider changes
volumeSlider.addEventListener('change', (e) => {
    const volume = Number(e.target.value);
    sound.volume = volume;
    wrongSound.volume = volume;
    console.log('Volume change to: ', volume);
});

startQuiz();












































