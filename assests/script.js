/* The questions (data) */
const questions = [
  { // question[1]
    title: 'Commonly used data types DO NOT include?',
    options: ['string', 'boolean', 'alert', 'numbers'],  
    answer: 3
  },
  { // question[2]
      title: "Why do JavaScript and Java have similar names?", // question[2].title
      options: ['JavaScript is a stripped-down version of Java', "JavaScript's syntax is loosely based on Java's ", 'They both originated on the island java', 'None of the above'],
      answer: 2 
    },
    {
      title: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
      options: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
      answer: 1
    },
    {
      title: "What are variables used for in JavaScript Programs?",
      options: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
      answer: 1
    },
    {
        title: "How to create a Date object in JavaScript?",
        options:["dateObjectName = new Date([parameters])", "dateObjectName.new Date([parameters])", "dateObjectName := new Date([parameters])", "dateObjectName Date([parameters])"],
        answer:  1
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both A and B", "None of the above"],
        answer: 3
    },
    {
        title: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
        answer: 3
    },
    {
        title: "To find the highest number in an array, the method to be used is?",
        options: ["Math.highest", "Math.max()", "Math.largest", "Math.cal"],
        answer: 2
    },
    {
        title: "An array can be sorted in a reverse manner through the method?",
        options: ["Sort()", "Reverse()", "Rev.length()", "Sort.length()"],
        answer: 2
    },
    {
        title:"Numeric array values can be sorted throught an array method named as?",
        options: ["Sort()", "Lenght.sort()", "Reverse()", "Compare()"],
        answer: 4
    },
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
var sec = 60;
var score = 0;

console.log(option1El.dataset.answer);

function startQuiz() {   
qsectionEl.hidden = '';    
displayQuestion();
timer();
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
    sec = sec -5
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

function endQuiz(){
  qsectionEl.hidden = "hidden"
  resSectionEl.hidden = '';
  highscore();
}

function timer() {
  function startTimer(){
      console.log('timer suppose to go')
      var timer = setInterval(function(){
          sec--;
          document.getElementById('timerDisplay').innerHTML='00:'+sec;
          if (sec <= 0) {
            clearInterval(timer);
            alert("Time is up!");
            endQuiz();
          }
      }, 1000);
  }

  document.getElementById('incorrect').addEventListener('click', function() {
      sec -= 5;
      document.getElementById('timerDisplay').innerHTML='00:'+sec;
  });
  startTimer();
}

startBtnEl.addEventListener('click', startQuiz);
option1El.addEventListener('click', optionClick);
option2El.addEventListener('click', optionClick);
option3El.addEventListener('click', optionClick);
option4El.addEventListener('click', optionClick);