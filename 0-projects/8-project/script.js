// Function declaration

function add(a, b) {
  let c = a + b;
  return c;
}

// Function expression
const multiplication = function (a, b) {
  let c = a * b;
  return c;
};

console.log("add:", add(2, 2));
console.log("multiplication:", multiplication(11, 15));

// Immediately Invoked Function Expression (IIFE)
(function () {
  let a = 5;
  let b = 4;
  let c = add(a, b);
  console.log(`The sum of a nd b is: ${c}`);
})();
