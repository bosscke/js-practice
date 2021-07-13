// Anonymous functions and functions expressions
// (An expression is a sentance witha minumum of two numbers and at least one math operation)

//FUNCTION DECLARATION
//Named function
function area(width, height) {
  return width * height;
}

let size = area(3, 4);
console.log(size);

//FUNCTION  EXPRESSION
//Anonymous function
let area1 = function (width, height) {
  return width * height;
};
let size1 = area1(4, 7);
console.log(size1);
