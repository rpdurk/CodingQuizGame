// Quiz Code

// Key value pairs of questions and answers
let questions = 
  [
    { question: "How do you start an HTML document?",
    answers: ["<!DOCTYPE html>", "<!docType html!>", "<DOCTTYPE HTML>","<HTML DOC>" ],
    correctAnswer: "0",
    }, {
      question: "Which of the following is an example of a closed tag",
      answers: ["<div>", "<body>", "</div>","<main>" ],
      correctAnswer: "2",
    }, {
      question: "Which element would have the largest default font size?",
    answers: ["<h4>", "<p>", "<h3>","<h2>" ],
    correctAnswer: "3",
    }, {
      question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Styling Solution", "Systematic Simple Styling","Creative Style Sheet" ],
    correctAnswer: "0",
    }, {
      question: "When declaring a style change, what property does \"color\" alter?",
    answers: ["background color changes", "page color changes", "font color changes","color is not a css property" ],
    correctAnswer: "2",
    }, {
      question: "If a file is labeled \"<img src=\"../picture.jpg\">\" where is the file stored?",
    answers: ["The picture.jpg file is located in the folder one level up from the current folder", "The picture.jpg file is located in the images folder at the root of the current web", "The picture.jpg file is located in the images folder in the current folder","The picture.jpg file is located in the same folder as the current page" ],
    correctAnswer: "0",
    }, {
      question: "What makes \"const\" a unique variable indicator?",
    answers: ["It cannot be changed in the future", "It can be redefined later in the code", "It can be a string or a boolean","Const is not a way to indicate something is a variable" ],
    correctAnswer: "0",
    }, {
      question: "What will the function math.round(x) do to a given number?",
    answers: ["round to the nearest whole number", "round up", "round down","return you an even number" ],
    correctAnswer: "0",
  },
];


// document. ready = Waits for all html to be ready, then runs function - avoid using if script is in the very last line.
// $(document).ready(function () {
  // Necessary variable declarations
  // Start section
  // const $start = $(".start");
  // // const $startBtn = $(".startBtn"); - Why does this not work?
  // Questions section
  const $questions = $(".questions");
  const $questionPrompt = $(".questionPrompt");
  const $firstAnswer = $(".firstAnswer");
  const $secondAnswer = $(".secondAnswer");
  const $thirdAnswer = $(".thirdAnswer");
  const $fourthAnswer = $(".fourthAnswer");
  // High Scores section
  const $highScore = $(".highScore");
  let $userInitialInput = $(".userInitials");
  let $userScoreEl = $(".userScore");
  let $timeRemaining = $("#timeRemaining");
  let time = 0;
  let userScore = 0;
  let counter = 60;
  let currentQuestion = questions[0];
// });

// Start of quiz functions
// timer function
function startTimer() {
  interval = setInterval(function() {
    // set counter to decrease
    counter--;
    $('.timer').text(counter);
    // set counter to stop at 0
    if (counter === 0) {
      clearInterval(interval);
      endQuiz();
    } else {
      $timeRemaining.text(counter);
    }
  }, 1000);
}
// Hide from view once the page loads
$('.questions').hide();
$('.highScore').hide();

function startQuestions() {
  // create a question index to be incremented through
  $('.questionPrompt').append(currentQuestion.question);
  $('.firstAnswer').text(currentQuestion.answers[0]);
  $('.secondAnswer').text(currentQuestion.answers[1]);
  $('.thirdAnswer').text(currentQuestion.answers[2]);
  $('.fourthAnswer').text(currentQuestion.answers[3]);

}
// write an event listener for reach button and compare to answer
$('.firstAnswer').on('click',function() {
  if (currentQuestion.correctAnswers === );
  points++;
  else {
    --TimeRanges;
  }
  incrementcurrentQuestions
});

// Start Quiz, Start Timer, Hide Start Button, Appear Questions
$('.startBtn').on('click',function() {
  // hide start card
  $('.start').hide();
  // show questions card
  $('.questions').show();
  // start timer
  startTimer();
  // display questions and answers
  startQuestions();
});

//  array - add items to array - save the array to local storage four loop for each item in the array - create a p tag - score = user initial values with