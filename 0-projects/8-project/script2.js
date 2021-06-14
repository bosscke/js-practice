//Standard object

const itil_v3 = {
  lifecycle_phase: "strategy",
  process: "financial management",
  activity_group: "accounting",
  activity_1: "cost model",
};

const showProcess = function (process) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${process.lifecycle_phase}</h1>
    <ul>
        <li>${process.process}</li>
        <li>${process.activity_group}</li>
        <li>${process.activity_1}</li>
    </ul>
    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(showProcess(itil_v3));
