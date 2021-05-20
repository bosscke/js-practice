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
