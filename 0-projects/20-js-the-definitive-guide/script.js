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

let filename = null;
let linenumber = null;
let exception = {
  message: "error",
};
let errorMessage = `\
\u2718 Test failre at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

console.log(errorMessage);

// Matching Patterns

console.log(/^HTML/);

// Symbols

let strname = "string name";
let symname = Symbol("propname");

console.log(typeof strname);
console.log(typeof symname);

let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]);
console.log(o[symname]);

// Imutabel primitives and mutable objects
let s = "hello";
s.toUpperCase();
console.log(s);

//mutable object
let bo = { x: 1 };
console.log(bo.x);
bo.x = 2;
console.log(bo.x);
bo.y = 44;
console.log(bo.x, bo.y);

//Arrays are also mutable
let a = [1, 2, 3];
console.log(a);
a[0] = 66;
a[3] = 77;
console.log(a);

//Objects are not compared by value

let oz = { x: 1 },
  ox = { x: 1 };
console.log(oz === ox);

let az = [],
  ax = [];
console.log(az === ax);

let ab = [];
let b = ab;
b[0] = 1;
ab[0];
console.log(ab);
console.log(ab === b);

let ac = ["a", "b", "c"];
let bc = [];
for (let i = 0; i < ac.length; i++) {
  bc[i] = ac[i];
}
let c = Array.from(bc);
console.log(c);

function equalArrays(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
}

//Type Conversion

console.log(10 + "objects");
