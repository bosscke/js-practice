import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo04 = new domainDetail(
  "Align, Plan, and Organize",
  "APO04 - Managed Innovation",
  "Maintain an awareness of I&T and related service trends and monitor emerging technology trends. Proactively identify innovation opportunities and  plan how to benefit from innovation in relation to business needs and the defined I&T strategy. Analyze what opportunities for business innovation or improvement can be created by emerging technologies, services or I&T-enabled business innovation; through existing established technologies; and by business and IT process innovation. Influence strategic planning and enterprise architecture decisions.",
  "Achieve competitive advantage, business innovation, improved customer experience, and improved operational effectiveness and efficiency by exploiting I&T developments and emerging technologies.",
  "• EG01 Portfolio of competitive products and services • EG13 Product and business innovation",
  "• AG06 Agility to turn business requirements into operational solutions • AG13 Knowledge, expertise and initiatives for business innovation",
  "No related guiadnce for this component."
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo04.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo04.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo04.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo04.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo04.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo04.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo04.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
