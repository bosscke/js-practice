////////////////////////////////////////
// Access an array

var cars = ["VW", "Skoda", "Dodge"];
document.getElementById("test").innerHTML = cars[0];

////////////////////////////////////////
// Access an array

var cars = ["VW", "Skoda", "Dodge"];
cars[0] = "Porsche";
document.getElementById("test1").innerHTML = cars[0];

////////////////////////////////////////
// Access the full Array

var cars = ["Nissan", "Toyota", "Alfa Romeo"];
document.getElementById("test2").innerHTML = cars;

////////////////////////////////////////
// Arrays are Objects

var cars = ["Nissan", "Ferrari", "Ford"];
document.getElementById("test3").innerHTML = cars[0];

////////////////////////////////////////
// Arrays are Objects

var carSubName = { nissan: "Navara", ferrari: "Enzo", ford: "Mustang" };
document.getElementById("test4").innerHTML = carSubName.nissan;
////////////////////////////////////////
// for loop

var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("test5").innerHTML = text;

////////////////////////////////////////
// Adding array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test6").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("test6").innerHTML = fruits;
}

myFunction();
