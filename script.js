// Quiz Code

// Key value pairs of questions and answers
const questions = 
  [
    { question: "How do you start an HTML document?",
     answers: ["<!DOCTYPE html>", "<!docType html!>", "<DOCTTYPE HTML>","<HTML DOC>" ],
     correctAnswer: "A",
    }, {
      question: "Which of the following is an example of a closed tag",
      answers: ["<div>", "<body>", "</div>","<main>" ],
      correctAnswer: "C",
    }, {
      question: "Which element would have the largest default font size?",
     answers: ["<h4>", "<p>", "<h3>","<h2>" ],
     correctAnswer: "D",
    }, {
      question: "What does CSS stand for?",
     answers: ["Cascading Style Sheets", "Creative Styling Solution", "Systematic Simple Styling","Creative Style Sheet" ],
     correctAnswer: "A",
    }, {
      question: "When declaring a style change, what property does \"color\" alter?",
     answers: ["background color changes", "page color changes", "font color changes","color is not a css property" ],
     correctAnswer: "C",
    }, {
      question: "If a file is labeled \"<img src=\"../picture.jpg\">\" where is the file stored?",
     answers: ["The picture.jpg file is located in the folder one level up from the current folder", "The picture.jpg file is located in the images folder at the root of the current web", "The picture.jpg file is located in the images folder in the current folder","The picture.jpg file is located in the same folder as the current page" ],
     correctAnswer: "A",
    }, {
      question: "What makes const a unique variable indicator?",
     answers: ["It cannot be changed in the future", "It can be redefined later in the code", "It can be a string or a boolean","Const is not a way to indicate something is a variable" ],
     correctAnswer: "A",
    }, {
      question: "What will the function math.round(x) do to a given number?",
     answers: ["round to the nearest whole number", "round up", "round down","return you an even number" ],
     correctAnswer: "A",
   },
];
// necessary variables
let questionNumber = 0;
const intervalId;
const clockRunning = false;
let timer = 60;

// Click the start button to begin a game and clock
const clock = {
  function setTime() {
    // set interval does The function you want to call, and then a time until that function occurs
    // This function will occur every time this happens.  It needs to be set at an interval for a stop aspect
    var timerInterval = setInterval(function() {
      // seconds will incremently go down by 1
      secondsLeft--;
      // Once the seconds are completed it will add seconds left to a string which equal a string
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
      // Once timer reachers zero a function will run
      if(secondsLeft === 0) {
        // Interval will be cleared
        clearInterval(timerInterval);
        // Then SendMessage function will begin
        sendMessage();
      }
  // time until the function is executed
    }, 1000);
  }
}


// Count down to a game begins
// This turns strings into an array.absolute
// You need to know how your want to spit the array via the space identified by the space in the ()
const poemsWords = poem.split(' ');
const $timer = document.querySelector('.timer')
const $countDown = document.querySelector('.countdown');
const $poem = document.querySelector('.poem');
console.log(poemsWords);
let currentIndex = 0;
function prepareRead() {
  // Create the countdown timer.
  let timeLeft = 5;
  const countDownInterval = setInterval(function(){
    $timer.textContent = timeLeft + ' seconds remaining';
    // timeLeft = timeLeft - 1;
    timeLeft--;
    if (timeLeft === 0) {
      $timer.textContent = '';
      clearInterval(countDownInterval);
      speedRead();
    }
  }, 1000);
}

// THEN a timer starts and I am presented with a question
function speedRead() {
    const milliPerWords = prompt('How many words per millisecond would you like to read?');
    const poemInterval = setInterval(function(){
      if (poemsWords[currentIndex] === undefined) {
        clearInterval(poemInterval);
      } else {
        $poem.textContent = poemsWords[currentIndex];
        currentIndex++;
      }
    }, parseInt(milliPerWords))
    // Print words to the screen one at a time.
  }

// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score


const $count = document.querySelector('#count');
const $decrement = document.querySelector('#decrement');
const $increment = document.querySelector('#increment');
let count = 0;
$decrement.onclick = function() {
  if (count === 0) {
    return;
  }
  count--;
  $count.textContent = String(count);
}
$increment.onclick = function() {
  count++;
  $count.textContent = String(count);
}

// Save all of the html elements i need into a variable
var $price = document.getElementById("price");
var $tip = document.getElementById("tip");
var $submit = document.getElementById("submit");
var $tipAmount = document.getElementById("tip-amount");
var $newTotal = document.getElementById("new-total");
var $submit2 = document.getElementById("submit2");
var $split = document.getElementById("split");
var $splitAmt = document.getElementById('splitAmt');
// add an event listener to the button
var nums = [1,2,3,4,5];
var calculateTip = function(e) {
  // Since the button is inside of a form tag,
  //  i need to prevent the default behavior from happening
  e.preventDefault();
  // Grab the value from the total input field
  // turn that value into a number
  var totalMeal = parseInt($price.value);
  // Grab the value from the tip input  field
  var tip = parseInt($tip.value);
  //  turn that value intoa number
  // create a variable by turning the tip into a decimal
  var tipTotal = tip * 0.01;
  // create a variable for the actual tip
  var realTipTotal = totalMeal * tipTotal;
  // create a variable with the total + tip or total amount for the tip
  var realTotal = totalMeal + realTipTotal;
  // change the text content of the tip amount to the actual tip amount
  // toFixed will only let the decimal go to a certain place
  $tipAmount.textContent = realTipTotal.toFixed(2);
  // change the text for the new total into the actual total
	$newTotal.textContent = realTotal;
};
// placing the function outside will mean it does not have access to inside of the tip
// submit real total to global variable or grab the text, inside of there.
$submit.addEventListener("click", calculateTip);
// create a variable that will split total
var splitBy = function(e) {
  // prevent refreshing a page
  e.preventDefault();
  // must pass in a string text 
  var splitAmt = parseInt($newTotal.textContent)/parseInt($split.value);

  $splitAmt.textContent = splitAmt.toFixed(2);
}

$submit2.addEventListener("click", splitBy);
$submit.addEventListener("click", calculateTip);

var  myCallbackFn = function(someArg, callback) {
	callback(someArg);
};

myCallbackFn("manny", function(element){
	console.log(element + " jucaban");
});