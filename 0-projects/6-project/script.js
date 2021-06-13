// ITIL_v3 Processes

import itil_v3Process from "./template.js";

const strategy = new itil_v3Process(
  "Strategy",
  "Strategy",
  "Strategic Assesment",
  "Analyse internal factors"
);

const main = document.querySelector("main");
const header = document.querySelector("body");

const content = `

      <section>
        <article>
          <h1>${strategy.lifecycle_phase}</h1>
          <ul>
            <li>${strategy.lifecycle_phase}</li>
            <li>${strategy.process}</li>
            <li>${strategy.activity_group}</li>
            <li>${strategy.activity}</li>

          </ul>
        </article>
      </section>
    
`;

const h1 = `<h1>ITIL_v3</h1>`;

const newHeader = document.createElement("header");

newHeader.innerHTML = h1;
main.innerHTML = content;
header.prepend(newHeader);

document.querySelector("section").style.display = "grid";
document.querySelector("section").style.justifyContent = "center";
