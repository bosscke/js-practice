console.log(0b10101);
console.log(0xbadcafe);
console.log(0xff);
console.log(0o377);
let billion = 1_000_000_000;
console.log(billion);

// Obtaining portion of a string
let text = "some text here";
console.log(text.substring(2, 4));
console.log(text.slice(-2));
console.log(text.split(","));

//Searching a string
console.log(text.indexOf("t"));
console.log(text.indexOf("t", 1));
console.log(text.indexOf("bb"));
console.log(text.lastIndexOf("s"));

// Boolean searching functions in ES6 and later
console.log(text.startsWith("text"));
console.log(text.endsWith("here"));
console.log(text.includes("so"));

//Creating modfied versions of a string
console.log(text.replace("ome", "ame"));
console.log(text.toUpperCase());
console.log(text.normalize());
console.log(text.normalize("NFD"));

//Inspecting individual (16-bit) chracters of a string
console.log(text.charAt(3));
console.log(text.charAt(text.length - 1));
console.log(text.charCodeAt(1));
console.log(text.codePointAt(1));

console.log("Unicode chacter", "\u2718");

// String padding functions

console.log("x".padStart(3));
console.log("x".padEnd(3));
console.log("x".padStart(3, "*"));
console.log("x".padEnd(3, "-"));

// Space trimming functions. trim() is ES5 others ES 2017
console.log(" test ".trim());
console.log(" test ".trimStart());
console.log("  test   ".trimEnd());

// Miscellaneous string methods

console.log(text.concat("!"));
console.log("<-->".repeat(10));
