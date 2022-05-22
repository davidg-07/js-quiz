/* The questions (data) */
const questions = [
    { // question[1]
      title: 'Commonly used data types DO NOT include?',
      options: ['string', 'boolean', 'alert', 'numbers'],  
      answer: 3
    },
    { // question[2]
        title: 'question 2', // question[2].title
        options: ['option1', 'option2', 'option3', 'option4'],
        answer: 2 // question[1].answer
      },
      {
        title: 'question 3',
        options: ['option1', 'option2', 'option3', 'option4'],
        answer: 4
      },
      {
        title: 'question 4',
        options: ['option1', 'option2', 'option3', 'option4'],
        answer: 4
      }
    ];

/* Select the required html elements here... */
const startBtnEl = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const option1El = document.getElementById('option1');
const option2El = document.getElementById('option2');
const option3El = document.getElementById('option3');
const option4El = document.getElementById('option4');
const qsectionEl = document.getElementById('question-section');
const resSectionEl = document.getElementById('result-section');
var currentQuestion = 0;

console.log(option1El.dataset.answer);

function startQuiz() {   
  qsectionEl.hidden = '';    
  displayQuestion();
}

function displayQuestion() {  
    questionEl.innerText = questions[currentQuestion].title;
    option1El.innerText = questions[currentQuestion].options[0];
    option2El.innerText = questions[currentQuestion].options[1];
    option3El.innerText = questions[currentQuestion].options[2];
    option4El.innerText = questions[currentQuestion].options[3];      
  }

/**
 * check the answer
 * @returns 
 */
 function optionClick(event) {

    console.log('event is: ', event);
  
    if(event.target.dataset.option == questions[currentQuestion].answer) {
      // TODO correct answer is clicked.
      console.log('correct!');
    }
    else {
      // TODO incorrec answer is clicked.
      console.warn('incorrect');
    }
    // TODO display the next question.
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      // TODO: the quiz is over! display the result now. 
      qsectionEl.hidden = 'hidden';
      resSectionEl.hidden = '';
      return;
    }
    displayQuestion();
  }