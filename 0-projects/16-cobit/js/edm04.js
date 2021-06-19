import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let edm04 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM04 - Ensured Resource Optimization",
  "Ensure that adequate and sufficient business and I&T-related resources (people, process and technology) are available to support enterprise  objectives effectively and, at optimal cost.",
  "Ensure that the resource needs of the enterprise are met in the optimal manner, I&T costs are optimized, and there is an increased likelihood of  benefit realization and readiness for future change.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality  • EG12 Managed digital transformation programs",
  "AG09 Delivering programs on time, on budget and meeting requirements and quality standards"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${edm04.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${edm04.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${edm04.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${edm04.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${edm04.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${edm04.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
