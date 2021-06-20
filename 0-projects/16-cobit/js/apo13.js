import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo13 = new domainDetail(
  "Align, Plan, and Organize",
  "APO13 - Managed Security",
  "Define, operate and monitor an information security management system.",
  "Keep the impact and occurrence of information security incidents within the enterprise’s risk appetite levels.",
  "• EG02 Managed business risk• EG06 Business service continuity and availability",
  "AG07 Security of information, processing infrastructure and  applications, and privacy",
  "HITRUST CFS version 9 2017, ISO / IEC 20000, ITIL_v3 2011, NIST 2018"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo13.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo13.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo13.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo13.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo13.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo13.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo13.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
