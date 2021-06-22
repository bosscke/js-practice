import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo06 = new domainDetail(
  "Align, Plan, and Organize",
  "APO06 - Managed Budget and Cost",
  "Manage the I&T-related financial activities in both the business and IT functions, covering budget, cost and benefit management and prioritization of  spending through the use of formal budgeting practices and a fair and equitable system of allocating costs to the enterprise. Consult stakeholders to identify and control the total costs and benefits within the context of the I&T strategic and tactical plans. Initiate corrective action where needed.",
  "Foster a partnership between IT and enterprise stakeholders to enable the effective and efficient use of I&T-related resources and provide transparency and accountability of the cost and business value of solutions and services. Enable the enterprise to make informed decisions regarding the use of I&T solutions and services.",
  "• EG01 Portfolio of competitive products and services • EG04 Quality of financial information • EG07 Quality of management information• EG08 Optimization of internal business process functionality • EG09 Optimization of business process costs • EG12 Managed digital transformation programs",
  "• AG04 Quality of technology-related financial information • AG09 Delivering programs on time, on budget and eeting requirements and quality standards",
  "ITIL_v3, PMBOK Sixth Edition, ISO /  IEC 20000-1:2011"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo06.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo06.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo06.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo06.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo06.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo06.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo06.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
