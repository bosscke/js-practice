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
