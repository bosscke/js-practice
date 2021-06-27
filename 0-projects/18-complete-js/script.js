"use strict";

// Destructuring Objects

const tableOfContetns = {
  chapter1:
    "Introduction to IT/business alignment, planning, execution and governenace",
  section1_1: "Overview",
  section1_2: "Definition, purpose and scope of IT governance",
};

const { section1_1, section1_2 } = tableOfContetns;
console.log(section1_1, section1_2);
