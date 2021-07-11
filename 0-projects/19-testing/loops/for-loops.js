// Using for loops

let scores = [24, 32, 17]; // Array of scores
let arrayLength = scores.length; // Items in array
let roundNumber = 0; // Current round
let msg = ""; // Message
let i; // Counter

for (i = 0; i < arrayLength; i++) {
  //Add 1 to the current round
  roundNumber = i + 1;
  //Write the current round to message
  msg = msg + "-" + "Round " + roundNumber + ": ";
  //Get the score from the score array
  msg = msg + scores[i] + "<br>";
}

document.getElementById("answer").innerHTML = msg;
