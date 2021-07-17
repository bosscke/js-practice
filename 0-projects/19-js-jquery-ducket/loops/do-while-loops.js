// Do while loops

let i = 1; // Set counter to one
let msg = ""; // Message

// Store 5 times table in a variable

do {
  msg = msg + i + " x 5 = " + i * 5 + "<br>";
  i++;
} while (i < 3);
// Note how this is already 1 and it still runs

document.getElementById("answer").innerHTML = msg;
