//Quiz

let currentQuestion = 0

  const questions = [
    {
      question: "What is the Capital of England?",
      answers: ["London", "Paris", "Berlin", "Madrid"],
      correct: "London"
    },

    {
      question: "What is the Capital of Mexico?",
      answers: ["Kabul", "Budapest", "Brasília", "Mexico City"],
      correct: "Mexico City"
    },
    
    {
      question: "What is the capital of Romania?",
      answers: ["Sofia", "Warsaw", "Bucharest", "Kiev"],
      correct: "Bucharest"
    }
  ]

function showQuestion(){
  document.getElementById("question-text").innerText = questions[currentQuestion].question

  document.querySelectorAll(".answer-btn")[0].innerText = questions[currentQuestion].answers[0]
  document.querySelectorAll(".answer-btn")[1].innerText = questions[currentQuestion].answers[1]
  document.querySelectorAll(".answer-btn")[2].innerText = questions[currentQuestion].answers[2]
  document.querySelectorAll(".answer-btn")[3].innerText = questions[currentQuestion].answers[3]
}

function nextQuestion(){
  const length = questions.length;
  currentQuestion += 1;
  if (length <= currentQuestion){
    window.location.href = "results.html"
    return;
  }
  else{
    showQuestion();
  }
}

function previousQuestion(){
  const length = questions.length;
  currentQuestion -= 1;
  if (currentQuestion < 0){
    currentQuestion = 0;
  }
  else{
    showQuestion();
  }
}

showQuestion();

document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("back-btn").onclick = previousQuestion;

//Results
let score = 0;

function showResults(){
  document.getElementById("score-display").innerText = score
}

document.querySelectorAll(".answer-btn").forEach(function(button){
  button.onclick = function(){
    if (button.innerText == questions[currentQuestion].correct){
      score += 1;
    }
  }
});


