import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo11 = new domainDetail(
  "Align, Plan, and Organize",
  "APO11 - Managed Quality",
  "Define and communicate quality requirements in all processes, procedures and related enterprise outcomes. Enable controls, ongoing monitoring, and the use of proven practices and standards in continuous improvement and efficiency efforts.",
  "Ensure consistent delivery of technology solutions and services to meet the quality requirements of the enterprise and satisfy stakeholder needs.",
  "• EG01 Portfolio of competitive products and services  • EG04 Quality of financial information  • EG07 Quality of management information  • EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "• AG09 Delivering programs on time, on budget and meeting requirements and quality standards • AG10 Quality of I&T management information",
  "PMBOK Guide Sixth Edition 2017"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo11.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo11.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo11.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo11.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo11.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo11.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo11.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
