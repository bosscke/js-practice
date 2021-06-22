import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo09 = new domainDetail(
  "Align, Plan, and Organize",
  "APO09 - Managed Service Agreements",
  "Align I&T-enabled products and services and service levels with enterprise needs and expectations, including identification, specification, design, publishing, agreement, and monitoring of I&T products and services, service levels and performance indicators.",
  "Ensure that I&T products, services and service levels meet current and future enterprise needs.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality",
  "AG05 Delivery of I&T services in line with business requirements",
  "ITIL_v3, HITRUST CSF version 9 2017, ISO / IEC 20000"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo09.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo09.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo09.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo09.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo09.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo09.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo09.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
