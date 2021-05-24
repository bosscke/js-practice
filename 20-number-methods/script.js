//////////////////////////////////////////
// toString()
var x = 123;
document.getElementById("test").innerHTML = x.toString();

//////////////////////////////////////////
// toExponential()
var x = 2;
document.getElementById("test1").innerHTML =
  x.toExponential() +
  "<br>" +
  x.toExponential(2) +
  "<br>" +
  x.toExponential(4) +
  "<br>" +
  x.toExponential(6);

//////////////////////////////////////////
// toExponential()
var x = 9.656;
document.getElementById("test2").innerHTML =
  x.toFixed(0) +
  "<br>" +
  x.toFixed(2) +
  "<br>" +
  x.toFixed(4) +
  "<br>" +
  x.toFixed(6);

//////////////////////////////////////////
// Number()

var x = new Date("2020-05-21");
document.getElementById("test3").innerHTML = Number(x);

//////////////////////////////////////////
// MAX_VALUE

var x = Number.MAX_VALUE;
document.getElementById("test4").innerHTML = x;

//////////////////////////////////////////
// MIN_VALUE

var x = Number.MIN_VALUE;
document.getElementById("test5").innerHTML = x;
