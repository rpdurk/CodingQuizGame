// Quiz Code

// Key value pairs of questions and answers
let questions = 
  [
    { question: "How do you start an HTML document?",
    answers: ["<!DOCTYPE html>", "<!docType html!>", "<DOCTTYPE HTML>","<HTML DOC>" ],
    correctAnswer: "<!DOCTYPE html>",
    }, {
      question: "Which of the following is an example of a closed tag",
      answers: ["<div>", "<body>", "</div>","<main>" ],
      correctAnswer: "</div>",
    }, {
      question: "Which element would have the largest default font size?",
    answers: ["<h4>", "<p>", "<h3>","<h2>" ],
    correctAnswer: "<h2>",
    }, {
      question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Styling Solution", "Systematic Simple Styling","Creative Style Sheet" ],
    correctAnswer: "Cascading Style Sheets",
    }, {
      question: "When declaring a style change, what property does \"color\" alter?",
    answers: ["background color changes", "page color changes", "font color changes","color is not a css property" ],
    correctAnswer: "font color changes",
    }, {
      question: "If a file is labeled \"<img src=\"../picture.jpg\">\" where is the file stored?",
    answers: ["The picture.jpg file is located in the folder one level up from the current folder", "The picture.jpg file is located in the images folder at the root of the current web", "The picture.jpg file is located in the images folder in the current folder","The picture.jpg file is located in the same folder as the current page" ],
    correctAnswer: "The picture.jpg file is located in the folder one level up from the current folder",
    }, {
      question: "What makes \"const\" a unique variable indicator?",
    answers: ["It cannot be changed in the future", "It can be redefined later in the code", "It can be a string or a boolean","Const is not a way to indicate something is a variable" ],
    correctAnswer: "It cannot be changed in the future",
    }, {
      question: "What will the function math.round(x) do to a given number?",
    answers: ["round to the nearest whole number", "round up", "round down","return you an even number" ],
    correctAnswer: "round to the nearest whole number",
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
  let questionIndex = 0;
  let currentQuestion = questions[questionIndex];
// });

//  what to do at the end of the quiz or when timer runs out.
function endQuiz(){
  $('.start').hide();
  $('.questions').hide();
  $('.highScore').show();
  $('.highScorePrompt').text("Enter your initials to save your score!");
  $('.userScore').text(userScore.valueOf());
};

// Start of quiz functions
// timer function
function startTimer() {
  interval = setInterval(function() {
    // set counter to decrease
    counter--;
    $('.timer').text(counter);
    // set counter to stop at 0
    if (counter < 0) {
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
  $('.questionPrompt').text(currentQuestion.question);
  $('.firstAnswer').text(currentQuestion.answers[0]);
  $('.secondAnswer').text(currentQuestion.answers[1]);
  $('.thirdAnswer').text(currentQuestion.answers[2]);
  $('.fourthAnswer').text(currentQuestion.answers[3]);
}

// function to update a question and increment the index.  Call to alert to changed index.
function updateQuestion(){
  questionIndex++;
  currentQuestion = questions[questionIndex];
};

// write an event listener for each button and compare to correct answer of question
// event listener for first question with notes
$('.firstAnswer').on('click', function() {
  // compare text of button to the value of correct answer
  if ($('.firstAnswer').text() === currentQuestion.correctAnswer.valueOf()) {
    // increase score by 100
  userScore += 100;
    // change button text to correct for (+) feedback
  $('.firstAnswer').text("Correct!");
  // empty buttons and questions
  updateQuestion();
  // display next set of questions
  startQuestions();
    // if wrong
} else {
    // remove 15s from counter
  counter -=15;
    // give feedback for the wrong answer by changing the test
  $('.firstAnswer').text("Wrong!");
  updateQuestion();
  startQuestions();
  }
});

// event listener for second question
$('.secondAnswer').on('click', function() {
  if ($('.secondAnswer').text() === currentQuestion.correctAnswer.valueOf()) {
  userScore += 100;
  $('.secondAnswer').text("Correct!");
  updateQuestion();
  startQuestions();
} else {
  counter -=15;
  $('.secondAnswer').text("Wrong!");
  updateQuestion();
  startQuestions();
  }
});

// event listener for third question
$('.thirdAnswer').on('click', function() {
  if ($('.thirdAnswer').text() === currentQuestion.correctAnswer.valueOf()) {
  userScore += 100;
  $('.thirdAnswer').text("Correct!");
  updateQuestion();
  startQuestions();
} else {
  counter -=15;
  $('.thirdAnswer').text("Wrong!");
  updateQuestion();
  startQuestions();
  }
});

// event listener for second question
$('.fourthAnswer').on('click', function() {
  if ($('.fourthAnswer').text() === currentQuestion.correctAnswer.valueOf()) {
  userScore += 100;
  $('.fourthAnswer').text("Correct!");
  updateQuestion();
  startQuestions();
} else {
  counter -=15;
  $('.fourthAnswer').text("Wrong!");
  updateQuestion();
  startQuestions();
  }
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
