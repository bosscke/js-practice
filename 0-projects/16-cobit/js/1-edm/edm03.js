import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let edm03 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM03 - Ensured Risk Optimization",
  "Ensure that the enterprise’s risk appetite and tolerance are understood, articulated and communicated, and that risk to enterprise value related to the use of I&T is identified and managed.",
  "Ensure that I&T-related enterprise risk does not exceed the enterprise’s risk appetite and risk tolerance, the impact of I&T risk to enterprise value is  identified and managed, and the potential for compliance failures is minimized.",
  "• EG02 Managed business risk • EG06 Business service continuity and availability",
  "• AG02 Managed I&T-related risk  • AG07 Security of information, processing infrastructure and applications, and privacy"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${edm03.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${edm03.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${edm03.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${edm03.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${edm03.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${edm03.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
