const rangeInput = document.querySelector(".range");
const guessInput = document.querySelector(".guess");
const playInput = document.querySelector(".play");
const compare = document.querySelector(".compare");
const result = document.querySelector(".result");

function handle(event) {
  event.preventDefault();
  const range = parseInt(rangeInput.value);
  const chosenNumber = parseInt(guessInput.value);
  const randomNumber = Math.floor(Math.random() * (range + 1));
  compare.innerText = "";
  result.innerText = "";
  if (rangeInput.value === "" || guessInput.value === "") {
    result.innerText = "Please fill in the blanks.";
  } else if (range < 0) {
    result.innerText = "The range is invalid.";
  } else if (chosenNumber < 0 || chosenNumber > range) {
    result.innerText = "You chose the number which is out of range.";
  } else {
    compare.innerText = `You chose: ${chosenNumber}, the machine chose: ${randomNumber}.`;
    if (chosenNumber === randomNumber) {
      result.innerText = "You won!";
    } else {
      result.innerText = "You lost!";
    }
  }
}

playInput.addEventListener("click", handle);
