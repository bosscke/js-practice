import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let bai03 = new domainDetail(
  "Build, Acquire, and Implement",
  "BAI03 - Managed Solutions Identification and Build",
  "Establish and maintain identified products and services (technology, business processes and workflows) in line with enterprise requirements  covering design, development, procurement/sourcing and partnering with vendors. Manage configuration, test preparation, testing, requirements  management and maintenance of business processes, applications, information/data, infrastructure and services.",
  "Ensure agile and scalable delivery of digital products and services. Establish timely and cost-effective solutions (technology, business processes and workflows) capable of supporting enterprise strategic and operational objectives.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "• AG05 Delivery of I&T services in line with business requirements  • AG06 Agility to turn business requirements into operational solutions  • AG09 Delivering programs on time, on budget and meeting  requirements and quality standards",
  "No Related Guidance"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${bai03.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${bai03.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${bai03.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${bai03.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${bai03.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${bai03.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${bai03.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
