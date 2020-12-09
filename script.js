// Assignment Code
let popUpQuestion = document.querySelector('question');
let quizContainer = document.getElementsByClassName('hide');
let startButton = document.getElementById('startBtn');
let nextButton= document.getElementById('btnToGoNext');
// var submitBtn = document.querySelector('submit');
let h2Tag = document.querySelectorAll('a')
// var buttonTag 


// Add event listener to generate button
startButton.addEventListener('click', questionsBeingAsked);
nextButton.addEventListener('click', nextQuestion);


function questionsBeingAsked() {
    for (let i = 0; i < quizContainer.length; i++) {
            quizContainer[i].classList.remove('hide');
    }
    
    h2Tag[1].classList.add('hide');
    startButton.classList.add('hide');
    CurrentQuestionIndex = 0;
    nextQuestion();
}



// function questions = [
//     {
//     question:'what is 2+3?',
//     answers [
//         {text:'4', correct:true},
//         {text: 22, correct:false}
//     ]
// }
// ]

// display quiz right away




// // for (let i = 0; i < 6; index++) {
// //     h1Tags[0].innerText = 'Hi'
// // //  }

// // function showResults() {



//  }



// buildQuiz();

 
// // on submit, show results
// submitButton.addEventListener('click', showResults);


// submitBtn.onclick = function () {
//     showResults(questions, quizContainer, resultsContainer);
// }


// quizContainer.innerHTML = output.join('');