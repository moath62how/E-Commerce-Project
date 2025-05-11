
const options = document.querySelectorAll('.option');
const nextButton = document.getElementById('nextButton');
const questionCount = document.getElementById('questionCount');
const questionText = document.getElementById('questionText');
const questionImage = document.getElementById('questionImage');

let currentQuestionIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;

// Load saved questions from localStorage
const savedTests = JSON.parse(localStorage.getItem('tests')) || [];
const testId = new URLSearchParams(window.location.search).get('testId');
const currentTest = savedTests[testId];

if (!currentTest) {
    alert('Test not found!');
    window.location.href = './dashboard.html';
}

const currentQuiz = currentTest.Questions;

// Display current question
function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    if (!question) {
        alert('Quiz completed!');
        saveResults();
        return;
    }

    questionText.textContent = question.QuestionHeader;
    questionImage.src = question.imageUrl || 'default-image.jpg'; // Use a default image if none is provided
    options.forEach((option, index) => {
        option.textContent = index === 0 ? question.C_answer : question.W_answers[index - 1];
    });
    questionCount.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuiz.length}`;
}

// Save answer to localStorage
function saveData() {
    const savedData = JSON.parse(localStorage.getItem('quizData')) || {};
    savedData[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem('quizData', JSON.stringify(savedData));
}

// Save quiz results to the user object
function saveResults() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('User not logged in!');
        window.location.href = './login.html';
        return;
    }

    const totalQuestions = currentQuiz.length;
    const score = correctAnswers;

    const result = {
        testName: currentTest.QuizName,
        score,
        totalQuestions,
        date: new Date().toISOString(),
    };

    currentUser.results = currentUser.results || [];
    currentUser.results.push(result);

    // Update the user object in localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    alert('Results saved successfully!');
    window.location.href = './dashboard.html';
}

// Event listener for selecting an option
options.forEach((option) => {
    option.onclick = function () {
        options.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        selectedAnswer = this.textContent;

        // Check if the selected answer is correct
        const question = currentQuiz[currentQuestionIndex];
        if (selectedAnswer === question.C_answer) {
            correctAnswers++;
        }

        saveData();
    };
});

// Next question logic
nextButton.onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion();
    } else {
        saveResults();
    }
};

// Initialize quiz
displayQuestion();

// Timer
let time = currentTest.Time || 60, angle = 0;
const timer = setInterval(() => {
    document.getElementById('timerValue').textContent = --time;
    document.getElementById('spinner').style.transform = `rotate(${angle += 6}deg)`;
    if (time <= 0) {
        clearInterval(timer);
        saveResults();
    }
}, 1000);
