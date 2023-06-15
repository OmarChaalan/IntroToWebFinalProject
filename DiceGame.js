let attemptsNumber = document.getElementById("attemptsnumber");
let guessButton = document.getElementById("guessbutton");
let displayResult = document.getElementById("displayresult");
let myForm = document.getElementById("myform");
let targetNumber;
let targetNumber2;
let attempts = 5;

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  guessButton.disabled = false;
  attemptsNumber.innerText = attempts;
  guessButton.addEventListener("click", handleClick);
}

function handleClick() {
  rollDice();
  let sum = targetNumber + targetNumber2;
  if (sum > 7) {
    displayResult.innerText = "Congratulations! You win!";
  } else {
    displayResult.innerText = "Sorry, you lost. Try again!";
  }
  attempts--;
  attemptsNumber.innerText = attempts;
  if (attempts === 0) {
    guessButton.disabled = true;
    if (attempts === targetNumber) {
      displayResult.innerText = "Congratulations! You win!";
    } else {
      displayResult.innerText =
        "GAME OVER! You have finished your attempts. You can try again by refreshing the page.";
    }
  }
}

let dice1Image;
let dice2Image;

function start() {
  dice1Image = document.getElementById("Die1");
  dice2Image = document.getElementById("Die2");
  guessButton.addEventListener("click", rollDice, false);
}

function rollDice() {
  targetNumber = Math.ceil(Math.random() * 6);
  targetNumber2 = Math.ceil(Math.random() * 6);

  dice1Image.setAttribute("src", "Die" + targetNumber + ".png");
  dice2Image.setAttribute("src", "Die" + targetNumber2 + ".png");
}

window.addEventListener("load", start, false);
