// const pets = ["dog", "cat", "rabbit", "hamster"];

// const petsLength = pets.length;

// console.log(petsLength);

// pets[2] = "snake";
// console.log(pets);

///////////////////////////////////////
// forEach()
// Callback function

const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log("Score Over 65", score);

// Iterate over the scores array using for each.
// Execute the logScores

scores.forEach((element) => {
  if (element > 65) {
    logScore(element);
  }
});

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// sort()

// Sort array alphabetically
const pets = ["dog", "cat", "rabbit", "hamster"];
console.log(pets.sort());

// Sort the array from highest to lowest
const grades = [88, 94, 72, 99, 53, 77];
grades.sort((a, b) => b - a);
console.log(grades);

// Sort the array from lowest to highest
grades.sort((a, b) => a - b);
console.log(grades);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// reverse()

// Use reverse to change the order of the array.
const condiments = ["ketchup", "mustard", "relish", "mayo"];
console.log(condiments.reverse());

// Use reverse to change the order of this array
// but keep the original array intact.
const employees = ["Adams", "Carter", "Davis", "Franklin", "Zappa"];
const reversed = [...employees];
console.log("reversed", reversed.reverse());
console.log("original", employees);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// find() and findIndex()

// Find the first grade that is less tham 80.
const grades2 = [79, 60, 72, 83, 53, 77];

const underEighty = grades2.find((element) => element < 80);
console.log(underEighty);

// Find the index of the first grade that is over 80.
const overEighty = grades2.findIndex((element) => element > 80);
console.log(overEighty);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// CHALLANGE

console.log("🤟🏻--------Excercise #1--------🤟🏻");
// Sort, Reverse, Find, FindIndex

const students = [
  { name: "John", grade: 75 },
  { name: " Jane", grade: 93 },
  { name: "Samantha", grade: 90 },
  { name: "Michael", grade: 94 },
];

// Question #1
// Sort the array of  students based on their grade.
// in descending order (larger to smallest)

students.sort((a, b) => b.grade - a.grade);
console.log(students);

console.log("🤟🏻--------Excercise #2--------🤟🏻");

// Question #2
// After sorting the array reversew the order of the array.
console.log(students.reverse());
console.log("🤟🏻--------Excercise #3--------🤟🏻");

// Question #3
// Find a student in the array who has a grade over 90.
const overNinety = students.find((student) => student.grade > 90);
console.log(overNinety);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// includes()

//   includes(): Syntax

//* array.includes(value, fromIndex)

//*Note: Value is case sensitive

// Does the careers array include a nurse?
const careers = ["teacher", "doctor", "engineer", "nurse", "scientinst"];

const nurseIncluded = careers.includes("nurse");
console.log(nurseIncluded);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// some() and every()

// --Does the array contain some lelements that pass the test?
// -- Does every element in the array pass the test?

//    some() and every() : Syntax

//* array.some(function(element, index, array) thisArg) -- both array methods take a callback function that has three parameters (element is the only required parameter)

//* array.every(function(element, index, array) thisArg) -- both array methods take a callback function that has three parameters (element is the only required parameter)

const states = [
  "California",
  "New York",
  "New Jersey",
  "Alaska",
  "New Mexico",
  "Montana",
];

// Use this string method to find the solution: startsWith('New')
// Do some of the states in the array start with 'New'?

const someStates = states.some((state) => state.startsWith("New"));
console.log(someStates);

// Does every state in the array start with 'New'?

const everyState = states.every((state) => state.startsWith("New"));
console.log(everyState);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// CHALLANGE
console.log("🤟🏻--------Excercise #1--------🤟🏻");
// Includes, Some and Every
const bowlingScores = [154, 204, 300, 184, 286];

// Question #1
// Does the array of bowling scores include a 300?
const includesScore = bowlingScores.includes(300);
console.log("Perfect Score", includesScore);

console.log("🤟🏻--------Excercise #2--------🤟🏻");
// Question #2
// Are some of the scores under 150?
const someScores = bowlingScores.some((score) => score < 150);
console.log("Under 150", someScores);

console.log("🤟🏻--------Excercise #3--------🤟🏻");
// Question #3
// Is every score an even number?
const everyScore = bowlingScores.every((score) => score % 2 === 0);
console.log(everyScore);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// push() and pop()

//    push()

// array.push(element(s))

//   pop()

// array.pop()

// How do we add 'wine' to the array of drinks?
const drinks = ["coffee", "tea", "soda", "soda", "water"];
drinks.push("wine");
console.log(drinks);

const seasons = ["spring", "summer", "fall", "winter"];
// How do we remove the last season from the seasons array?
// Store the element that is removed in a variable.
const poppedValue = seasons.pop();
console.log("Popped Value", poppedValue);
console.log("Seasons", seasons);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
// First In, First Out (FIFO)
// unshift() and shift()

// unshift()

// array.unshift(element(s))

// shift()

// array.shift()

// How do we add 36 to the array of ages?
const ages = [18, 33, 71, 29, 65, 62];
ages.unshift(36);
console.log(ages);

// How do we remove the first item from the holidays array?
// Store the element that is removed in a variable.
const holidays = ["Labor Day", "Christmas", "Hanakkuh", "Independence Day"];
const shiftedValue = holidays.shift();
console.log("Shifted value", shiftedValue);
console.log("Holidays", holidays);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  Push, Pop, Unshift and Shift

const foods = [
  { food: "raspberries", type: "fruit" },
  { food: "orange", type: "fruit" },
  { food: "broccoli", type: "vegetable" },
  { food: "broccoli", type: "grain" },
];

const blackBeans = { food: "black beans", type: "legume" };
const chiaSeeds = { food: "chia seeds", type: "seeds" };

// Question #1
// Remove the last item in the foods array.
foods.pop();
console.log("Popped", foods);

// Question #2
// Remove the first item in the foods array.
foods.shift();
console.log("Shifted", foods);

// Question #3
// Add the variable blackBeans to the beginning of the foods array.
foods.unshift(blackBeans);
console.log("Unshifted", foods);

// Question #4
// Add the variable chiaSeeds to the end of the array.
// What does your final array look like?
foods.push(chiaSeeds);
console.log("Final", foods);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  map()

//  map(): Syntax

// let new = array.map(function(currentValue, index, array), thisArg)

// ***Callback Function***
// Let's review the callback fucntion

// function (currentValue, index, array)

const friends = [
  { firstname: "Jane", lastname: "Doe" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Alex", lastname: "Trebek" },
];

// Create a new array that includes only the full name (firstName + lastName) of each friend.
// Example John Doe

const fullName = friends.map((friend) => {
  return `${friend.firstname}  ${friend.lastname}`;
});

console.log(fullName);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  filter()

// let new = array.filter(function(element, index, array) thisArg)

const groceries = [
  { item: "apples", type: "fruit" },
  { item: "cereal", type: "pantry" },
  { item: "beef", type: "meat" },
  { item: "bananas", type: "fruit" },
  { item: "broccoli", type: "vegetable" },
];

// Filter the follwing array to include only those grovery items
// that are fruits.

const fruit = groceries.filter((item) => {
  return item.type === "fruit";
});
console.log(fruit);

const fruit2 = groceries.filter((item) => item.type === "fruit");
console.log(fruit2);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  reduce()

// * Executes a reducer function against each item in an array, returning a single value
// * The returned value is the accumulated value

//    reduce():Syntax
//  array.reduce(function(accumulator, current value, index, array), initialValue)

// * accumulator (acc): required, accumulated value or total
// * currentValue(el): required, element being processed in the array
// * index: optional, index of the currentValue
// * array: optional, original array beingf iterated over
// * initialValue: optional, value to use for the initial accumulator; if nothing is passed, the first value of array is used

const bills = [1200, 29.99, 65.93, 17.32, 44.76];

// Determine how much the total bills are using the reduce
const totalBills = bills.reduce((total, bill) => total + bill);
console.log(totalBills);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  flat() + map() = flatMap()

// flatMap(): Syntax

// let new = array.flatMap(function(currentValue, index, array) thisArg)

const wordJumble = ["shampoo", "conditioner", "soap"];

// You want to create a word jumble which requires you to split
// the following array of words into individual letters. You want
// a new array, that is flattened toa a single level.

// Hint you will need to use the string method .split()
const splitWords = wordJumble.flatMap((word) => word.split(""));
console.log(splitWords);

console.log("🤟🏻--------Excercise Completed--------🤟🏻");

///////////////////////////////////////
//  CHALLANGE -> Map, Filter, Reduce, and FlatMap

const movies = [
  { title: "Avatar", year: "2009", rating: "PG-13" },
  { title: "I Am Legend", year: "2007", rating: "PG-13" },
  { title: "300", year: "2006", rating: "R" },
  { title: "The Avengers", year: "2012", rating: "PG-13" },
];

// Question #1
// Create a new array that just contains the movie titles.
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// Question #2
// Create a new array that contains only those movies that are PG-13.
const pg13Movies = movies.filter((movie) => movie.rating === "PG-13");
console.log(pg13Movies);

// Question #3
// Determine how many of the movies are rating R.
const ratedRMovies = movies.reduce((acc, movie) => {
  if (movie.rating === "R") {
    acc++;
  }
  return acc;
}, 0);
console.log(ratedRMovies);
