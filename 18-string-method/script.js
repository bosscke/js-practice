"use strict";

///////////////////////////////////
// STRING LENGTH

var txt = "RMKSORTYNVBASWR2265KSO0011";
var sln = txt.length;
document.getElementById("test").innerHTML = sln;

///////////////////////////////////
// INDEXOF

var str = "Please find the position and find out";
var pos = str.indexOf("find");
document.getElementById("test2").innerHTML = pos;

// LASTINDEXOF
var str = "Please find the position find out";
var pos1 = str.lastIndexOf("find");
document.getElementById("test3").innerHTML = pos1;

///////////////////////////////////
// SEARCH
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("test4").innerHTML = pos;

///////////////////////////////////
// slice()

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
document.getElementById("test5").innerHTML = res;

var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
document.getElementById("test6").innerHTML = res;

var str = "Apple, Banana, Kiwi";
var res = str.slice(-20, -13);
document.getElementById("test7").innerHTML = res;

///////////////////////////////////
// replace()

function myFunction() {
  var str = document.getElementById("test8").innerHTML;
  var txt = str.replace("Restaurant.", "Night Club! 🤟🏻");
  document.getElementById("test8").innerHTML = txt;
}
