// Assignment Code
let popUpQuestion = document.querySelector('question');
let quizContainer = document.getElementsByClassName('hide');
let startButton = document.getElementById('startBtn');
let nextButton= document.getElementById('btnToGoNext');
let h2Tag = document.querySelectorAll('a')
let questionEl = document.getElementById('question-container');
let answersButtonEl = document.getElementsByClassName('btn');

let shuffleQuestions, CurrentQuestionIndex;


// Add event listener to generate button
startButton.addEventListener('click', questionsBeingAsked);
nextButton.addEventListener('click', nextQuestion);


function questionsBeingAsked() {
    for (let i = 0; i < quizContainer.length; i++) {
            quizContainer[i].classList.remove('hide');
    }
    h2Tag[1].classList.add('hide');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    CurrentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[CurrentQuestionIndex])
}
    
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
      
    });
}

function selectAnswer() {


}


    let questions = [
      {
      question: 'What does HTML stand for?',
      answers: [,
        { text: 'Hypertext Markup Language', correct:true },
        { text: 'Hi', correct:false },
      ]
      }]

// quizContainer.innerHTML = output.join('');