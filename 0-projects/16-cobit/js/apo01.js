import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo01 = new domainDetail(
  "Align, Plan, and Organize",
  "APO01 - Managed I&T Management Framework",
  "Design the management system for enterprise I&T based on enterprise goals and other design factors. Based on this design, implement all required components of the management system.",
  "Implement a consistent management approach for enterprise governance requirements to be met, covering governance components such as management processes; organizational structures; roles and responsibilities; reliable and repeatable activities; information items; policies and procedures; skills and competencies; culture and behavior; and services, infrastructure and applications.",
  "• EG03 Compliance with external laws and regulations• EG08 Optimization of internal business process functionality • EG11 Compliance with internal policies• EG12 Managed digital transformation programs",
  "• AG03 Realized benefits from I&T-enabled investments and services  portfolio • AG11 I&T compliance with internal policies"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo01.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo01.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo01.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo01.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo01.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo01.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
