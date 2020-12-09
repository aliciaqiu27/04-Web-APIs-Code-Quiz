// Assignment Code
let TimerEl = document.getElementById('timer');
let popUpQuestion = document.getElementById('questionContainer');
let quizContainer = document.getElementsByClassName('hide');
let startButton = document.getElementById('startBtn');
let nextButton= document.getElementById('btnToGoNext');
let h2Tag = document.querySelectorAll('a')
let answersButtonEl = document.getElementsByClassName('btn');
// let submitButton = document.getElementById("")
let shuffleQuestions, CurrentQuestionIndex;


//Set timer counting down from 60 seconds
let count = 60;
var interval = setInterval(function(){
  TimerEl.innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    TimerEl.innerHTML='Completed';
    alert("Out of time!");
  }
}, 1000);

// Add event listener to generate "Start Quiz" button
startButton.addEventListener('click', questionsBeingAsked);
// Add event listener to generate "next" button
// nextButton.addEventListener('click', nextQuestion);


// User clicks on "Start Quiz" button
function questionsBeingAsked() {
    for (let i = 0; i < quizContainer.length; i++) {
            quizContainer[i].classList.remove('hide');
    }

    h2Tag[1].classList.add('hide');
    startButton.classList.add('hide');
    TimerEl.classList.remove('hide');
    popUpQuestion.classList.remove('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    CurrentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[CurrentQuestionIndex])
}
    
function showQuestion(question) {
    popUpQuestion.innerText = question.question;
    console.log(popUpQuestion.innerText)
    // questions.answers.forEach(answer => {
      
    };


const userQuestions = [
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is ____________.",
    answers: {
      a: "Javascript",
      b: "Terminal bash",
      c: "for loop",
      d: "console.log"
    },
    correctAnswer: "d"
  },
  {

    question: "The condition in an if/else statement is enclosed within __________:",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "printhead",
      d: "square brackets"
    },
    correctAnswer: "b"
  },
  {
    question: "Arrays in Javascript can be used to store __________:",
    answers: {
      a: "Numbers and strings",
      b: "Other arrays",
      c: "Boolean",
      d: "All of the above"
    },
    correctAnswer: "a"
  }
];


// function selectAnswer() {



// // on submit, show results
// submitButton.addEventListener('click', showResults);


    // on submit, show results
    // submitButton.addEventListener('click', showResults);

// quizContainer.innerHTML = output.join('');