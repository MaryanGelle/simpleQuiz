


// const question = {
//     questionTex: "What is 2 + 2?",
//     //Choices is an array of objects
//     choices: [
//         { text: '8', isCorrect: false },
//         { text: '6', isCorrect: false },
//         { text: '4', isCorrect: true },
//         { text: '10', isCorrect: false },
//     ]

// }

const form = document.getElementById('username-form');
const username = document.getElementById('username');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked');
    console.log(username.value);
    console.log(window);
    localStorage.setItem('username', JSON.stringify(username.value));
    window.location.href = 'quiz-page.html';
});






