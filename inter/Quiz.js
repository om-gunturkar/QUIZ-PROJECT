// Complete question pool
const questionPool = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Machine Language"], answer: "Hyper Text Markup Language" },
    { question: "Which language is used for styling web pages?", options: ["HTML", "JQuery", "CSS", "XML"], answer: "CSS" },
    { question: "Which is not a programming language?", options: ["Python", "JavaScript", "MCQ", "Ruby"], answer: "MCQ" },
    { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"], answer: "Central Processing Unit" },
    { question: "What is the brain of the computer?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], answer: "CPU" },
    { question: "Which one is a backend programming language?", options: ["HTML", "CSS", "PHP", "JavaScript"], answer: "PHP" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which is used for creating web pages?", options: ["HTML", "SQL", "C++", "Python"], answer: "HTML" },
    { question: "Which company developed the Java programming language?", options: ["Sun Microsystems", "Microsoft", "Google", "Apple"], answer: "Sun Microsystems" },
    { question: "Which HTML tag is used for inserting images?", options: ["img", "picture", "image", "src"], answer: "img" }
];

// Shuffle and select 10 random questions
function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

const questions = shuffle(questionPool).slice(0, 10);
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const feedbackEl = document.getElementById("feedback");

function loadQuestion() {
    feedbackEl.innerText = "";
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionEl.innerText = `Q${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsEl.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const li = document.createElement("li");
            li.innerHTML = `<label><input type="radio" name="option" value="${option}"> ${option}</label>`;
            optionsEl.appendChild(li);
        });
    } else {
        // Store score and redirect to result page
        localStorage.setItem("quizScore", score);
        window.location.href = "result.html";
    }
}

submitBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        feedbackEl.innerText = "No answer selected. 0 marks awarded for this question.";
    } else {
        const answer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (answer === correctAnswer) {
            feedbackEl.innerText = "Correct! +1 mark.";
            score++;
        } else {
            feedbackEl.innerText = `Incorrect! The correct answer is: ${correctAnswer}`;
        }
    }
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
});

loadQuestion();
