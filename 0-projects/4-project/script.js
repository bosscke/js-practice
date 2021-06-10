// Create a class for the itil_v3 object type

import itil_v3 from "./itil-v3.js";

const strategy = new itil_v3("strategy", "strategy", 16);

console.log("--ITIL_v3--", itil_v3);
console.log(
  "😎Lifecycle Phase😫",

  strategy.lifecycle_phase,
  "😨",
  strategy.number_of_processes_activities
);
