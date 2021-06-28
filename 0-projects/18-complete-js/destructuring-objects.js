"use strict";

// Destructuring Objects

const tableOfContetns = {
  chapter1:
    "Introduction to IT/business alignment, planning, execution and governenace",
  section1_1: "Overview",
  section1_2: "Definition, purpose and scope of IT governance",
  lifecycle: {
    strategy: {
      it_financial_manegement: {
        accounting: 7,
        budgeting: 5,
        charging: 4,
      },
    },
  },
};

// Destructuring object and creating 2 new variables
const { section1_1, section1_2 } = tableOfContetns;
console.log(section1_1, section1_2);

//Changing property name to a different variable name
const { section1_1: one, section1_2: two } = tableOfContetns;
console.log(one, two);
//Setting default values
const { section1 = [], section1_2: section2 = [] } = tableOfContetns;
console.log(section1, section2);

//Mutating variables

let a = 12;
let b = 11;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj); // trick wrap into () to avoid syntax error - destructuring
console.log(a, b);

//Nested Objects

const { lifecycle } = tableOfContetns;
console.log(lifecycle);

const { strategy } = lifecycle;
console.log(strategy);

const {
  it_financial_manegement: { accounting },
} = strategy;
console.log(accounting);
