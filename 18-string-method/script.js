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
