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

document.getElementById("question-text").innerText = questions[currentQuestion].question