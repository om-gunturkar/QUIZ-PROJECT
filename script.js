function startQuiz(){
    window.location.href = "quiz.html";
}

const quizData = [
    {
        question: "What is the capital of India?",
        options:["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: 0
    },
    {
        question: "Which is the largest planet in our solar system?",
        options:["Earth", "Jupiter", "Mars", "Venus"],
        answer: 1
    },
    {
        question: "Who wrote the Indian national anthem?",
        options:["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
        answer: 0
    },
];

let currentQueIndex = 0;
let score = 0;
function loadQue(){
    const question = document.getElementById("question");
    const option = document.querySelectorAll(".option-btn");

    question.innerHTML = quizData[currentQueIndex].question;
    quizData[currentQueIndex].options.forEach((value, index) => {
        option[index].innerHTML = value;
    });
    
}

function checkAnswer(index){
    const scorecard = document.getElementById("score");
    const que = document.getElementById("question");
    const option = document.getElementById("options");
    if(index == quizData[currentQueIndex].answer){
        score++;
        scorecard.innerHTML = score;
    }
    currentQueIndex++;
    if(currentQueIndex < quizData.length){
        loadQue();
        
    }else{
        que.innerHTML = "Quiz Completed!";
        option.innerHTML = `<p>Your final score is ${score}.</p>`;
    }
}
loadQue();