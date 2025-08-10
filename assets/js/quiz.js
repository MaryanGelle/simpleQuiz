const username = localStorage.getItem('username');
const sound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
console.log(sound);
console.log(wrongSound);
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
   { 
        question: "What is the largest planet in our Solar System?",
        answers: [
            { text: 'Earth', isCorrect: false },
            { text: 'Jupiter', isCorrect: true },
            { text: 'Saturn', isCorrect: false },
            { text: 'Mars', isCorrect: false },
        ]
    },
    {
        question: "Who wrote the theory of relativity?",
        answers: [
            { text: 'Isaac Newton', isCorrect: false },
            { text: 'Albert Einstein', isCorrect: true },
            { text: 'Galileo Galilei', isCorrect: false },
            { text: 'Nikola Tesla', isCorrect: false },
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: 'Sydney', isCorrect: false },
            { text: 'Melbourne', isCorrect: false },
            { text: 'Canberra', isCorrect: true },
            { text: 'Perth', isCorrect: false },
        ]
    },
    {
        question: "How many elements are there in the periodic table (as of 2025)?",
        answers: [
            { text: '118', isCorrect: true },
            { text: '110', isCorrect: false },
            { text: '120', isCorrect: false },
            { text: '112', isCorrect: false },
        ]
    },
    {
        question: "Which organ in the human body is primarily responsible for detoxification?",
        answers: [
            { text: 'Kidneys', isCorrect: false },
            { text: 'Liver', isCorrect: true },
            { text: 'Lungs', isCorrect: false },
            { text: 'Pancreas', isCorrect: false },
        ]
    },
    {
        question: "In what year did World War II end?",
        answers: [
            { text: '1940', isCorrect: false },
            { text: '1945', isCorrect: true },
            { text: '1939', isCorrect: false },
            { text: '1950', isCorrect: false },
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: 'CO2', isCorrect: false },
            { text: 'H2O', isCorrect: true },
            { text: 'NaCl', isCorrect: false },
            { text: 'O2', isCorrect: false },
        ]
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answers: [
            { text: 'Asia', isCorrect: false },
            { text: 'Africa', isCorrect: true },
            { text: 'Australia', isCorrect: false },
            { text: 'South America', isCorrect: false },
        ]
    },
    {
        question: "Which blood type is known as the universal donor?",
        answers: [
            { text: 'O-', isCorrect: true },
            { text: 'O+', isCorrect: false },
            { text: 'AB+', isCorrect: false },
            { text: 'A-', isCorrect: false },
        ]
    },
    {
        question: "What is the freezing point of water in Celsius?",
        answers: [
            { text: '0°C', isCorrect: true },
            { text: '32°C', isCorrect: false },
            { text: '-1°C', isCorrect: false },
            { text: '100°C', isCorrect: false },
        ]
    }

];

// Shuffle function (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// New global shuffled questions array
let shuffledQuizData = [];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const timerSpan = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timerLoop;let timerStepper = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

      // Create a new shuffled copy of quizdata on every quiz start
    shuffledQuizData = shuffle([...quizdata]);

    showQuestion();
    if (timerLoop) clearInterval(timerLoop);
    timerLoop = setInterval(() => {
        timerStepper++;
        const minutes = Math.floor(timerStepper / 60);
        const seconds = timerStepper % 60;
        const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        timerSpan.innerHTML = `${minutes}:${paddedSeconds}`;
    }, 1000);
}
function update_score() {
    scoreElement.innerHTML = score;
}

function showQuestion() {
    let currentQuestion = shuffledQuizData[currentQuestionIndex];
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
                update_score();
                sound.play();
            } else {
                button.classList.add("false");
                wrongSound.play();

            }
            disableAnswerButtons();
            showNextButton();
        });
    });


    if (currentQuestionIndex === shuffledQuizData.length - 1) {
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

    if (currentQuestionIndex < shuffledQuizData.length) {
        showQuestion();
    } else {
        // Quiz finished, display score
        showScore();
    }
});

function showScore() {
    if (timerLoop) clearInterval(timerLoop);
    questionElement.innerHTML = "Thank you for playing!";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";

    // Declare and assign the scoreElement
    const scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Score: ${score} out of ${shuffledQuizData.length}`;
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
let storedVolume = volumeSlider.value;
const soundBtn = document.querySelector('#soundBtn')
function mute() {
    storedVolume = volumeSlider.value;
    volumeSlider.value = sound.volume = wrongSound.volume = 0;
    soundBtn.innerHTML = `<svg width="20px" height="20px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icomoon-ignore"></g><path d="M24.3 4.592l-0.742-0.742-7.142 7.143v-5.822l-7.687 6.127h-5.949v4.743l-0.003 0.003 0.003 0.003v4.693h3.889l-6.668 6.668 0.742 0.742 7.41-7.41h0.027l1.003-1.002-0.015-0.012 6.202-6.202v0.027l1.049-1.049v-0.027l7.883-7.883zM3.828 19.691v-7.343h5.268l6.271-4.998v3.949l0.001 0.743-7.65 7.649h-3.889z" fill="#000000"></path><path d="M15.368 19.691h-0.001v4.901l-5.355-4.202-0.747 0.747 7.151 5.611v-6.008h0.001v-6.755l-1.049 1.049z" fill="#000000"></path></svg>`;
}
function unmute() {
    volumeSlider.value = sound.volume = wrongSound.volume = storedVolume;
    soundBtn.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
soundBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (volumeSlider.value > 0) {
        mute();
    } else {
        unmute();
    }
})

// reset //

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reset-answer').addEventListener('click', () => {
    const selectedAnswer = document.querySelector('#answer-buttons .btn.selected');
    if (selectedAnswer) {
      selectedAnswer.classList.remove('selected');
      selectedAnswer.disabled = false;
    }
  });
});

startQuiz();























