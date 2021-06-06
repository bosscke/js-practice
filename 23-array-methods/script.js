//////////////////////////////////////////////////////////
//// toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test").innerHTML = fruits.toString();

//////////////////////////////////////////////////////////
//// join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test1").innerHTML = fruits.join(" * ");

//////////////////////////////////////////////////////////
//// pop()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test2").innerHTML = fruits;
document.getElementById("test3").innerHTML = fruits.pop();
document.getElementById("test4").innerHTML = fruits;
