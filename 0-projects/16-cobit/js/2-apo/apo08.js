import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo08 = new domainDetail(
  "Align, Plan, and Organize",
  "APO08 - Managed Relationships",
  "Manage relationships with business stakeholders in a formalized and transparent way that ensures mutual trust and a combined focus on achieving  the strategic goals within the constraints of budgets and risk tolerance. Base relationships on open and transparent communication, a common  language, and the willingness to take ownership and accountability for key decisions on both sides. Business and IT must work together to create  successful enterprise outcomes in support of the enterprise objectives.",
  "Enable the right knowledge, skills and behaviors to create improved outcomes, increased confidence, mutual trust and effective use of resources that stimulate a productive relationship with business stakeholders.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality• EG10 Staff skills, motivation and productivity • EG13 Product and business innovation",
  "• AG05 Delivery of I&T services in line with business requirements  • AG06 Agility to turn business requirements into operational solutions  • AG12 Competent and motivated staff with mutual understanding of  technology and business  • AG13 Knowledge, expertise and initiatives for business innovation",
  "ISO / IEC 20000, ITIL_v3"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo08.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo08.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo08.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo08.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo08.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo08.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo08.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
