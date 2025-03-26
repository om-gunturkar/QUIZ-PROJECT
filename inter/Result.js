// Retrieve score from localStorage and display it
document.getElementById("final-score").innerText = localStorage.getItem("quizScore") + " out of 10";

// Restart the quiz by redirecting to the quiz page
function restartQuiz() {
  localStorage.removeItem("quizScore");
  window.location.href = "quiz.html";
}