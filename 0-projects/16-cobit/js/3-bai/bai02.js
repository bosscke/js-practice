import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let bai02 = new domainDetail(
  "Build, Acquire, and Implement",
  "BAI02 - Managed Requirments Definition",
  "Identify solutions and analyze requirements before acquisition or creation to ensure that they align with enterprise strategic requirements  covering business processes, applications, information/data, infrastructure and services. Coordinate the review of feasible options with affected  stakeholders, including relative costs and benefits, risk analysis, and approval of requirements and proposed solutions.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "Create optimal solutions that meet enterprise needs while minimizing risk.",
  "• AG05 Delivery of I&T services in line with business requirements • AG06 Agility to turn business requirements into operational solutions • AG09 Delivering programs on time, on budget and meeting  requirements and quality standards",
  "No Related Guidance"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${bai02.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${bai02.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${bai02.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${bai02.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${bai02.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${bai02.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${bai02.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
