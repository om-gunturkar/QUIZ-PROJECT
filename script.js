#check here upstream

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(answer, button));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answerButtons.innerHTML = "";
}

function selectAnswer(answer, button) {
    const correct = answer.correct;
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.classList.add("hidden");
    scoreDisplay.innerText = `Your Score: ${score} / ${questions.length}`;
    scoreDisplay.classList.remove("hidden");
    nextButton.innerText = "Restart";
    nextButton.addEventListener("click", () => {
        scoreDisplay.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        nextButton.innerText = "Next";
        startQuiz();
    });
}

startQuiz();
