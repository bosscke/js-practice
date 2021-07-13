// Functions

let msg = "Let's get things done!!";
function updateMessage() {
  let el = document.getElementById("answer");
  el.textContent = msg;
}
updateMessage();

// Declaring a Functions
function sayHello() {
  document.write("Hello!");
}
sayHello(); // Calling the function

// Declaring the function
function sayHi() {
  document.write("<br>" + "Hi!");
}
sayHi(); // Calling the function

// Declaring Functions that need information
function getArea(width, height) {
  return width * height;
}

// Calling Functions that need informations
wallWidth = 3;
wallHeight = 5;
getArea(3, 5);
getArea(wallWidth, wallHeight);

// Getting a single value out of a function

function calculateArea(width, height) {
  let area = width * height;
  return area;
}

let wallOne = calculateArea(3, 5);
let wallTwo = console.log(calculateArea(8, 5));

// Getting multiple values out of a function

function getSize(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let sizes = [area, volume];
  return sizes;
}

let areaOne = console.log(getSize(3, 2, 3)[0]);
let volumeOne = console.log(getSize(3, 2, 3)[1]);
