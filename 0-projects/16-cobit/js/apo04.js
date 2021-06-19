import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo03 = new domainDetail(
  "Align, Plan, and Organize",
  "APO03 - Managed Enterprise Architecture",
  "Establish a common architecture consisting of business process, information, data, application and technology architecture layers. Create key  models and practices that describe the baseline and target architectures, in line with the enterprise and I&T strategy. Define requirements for  taxonomy, standards, guidelines, procedures, templates and tools, and provide a linkage for these components. Improve alignment, increase agility,  improve quality of information and generate potential cost savings through initiatives such as re-use of building block components.",
  "Represent the different building blocks that make up the enterprise and its interrelationships as well as the principles guiding their design and evolution over time, to enable a standard, responsive and efficient delivery of operational and strategic objectives.",
  "• EG01 Portfolio of competitive products and services • EG05 Customer-oriented service culture • EG08 Optimization of internal business process functionality• EG12 Managed digital transformation programs",
  "• AG06 Agility to turn business requirements into operational  solutions • AG08 Enabling and supporting business processes by integrating applications and technology",
  "NIST, TOGAF 9.2, ITIL_v3, CMMI 2014"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo03.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo03.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo03.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo03.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo03.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo03.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo03.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
