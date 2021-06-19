import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo02 = new domainDetail(
  "Align, Plan, and Organize",
  "APO02 - Managed Strategy",
  "Provide a holistic view of the current business and I&T environment, the future direction, and the initiatives required to migrate to the desired future  environment. Ensure that the desired level of digitization is integral to the future direction and the I&T strategy. Assess the organization’s current  digital maturity and develop a road map to close the gaps. With the business, rethink internal operations as well as customer-facing activities. Ensure focus on the transformation journey across the organization. Leverage enterprise architecture building blocks, governance components and the organization’s ecosystem, including externally provided services and related capabilities, to enable reliable but agile and efficient response to strategic objectives.",
  "Support the digital transformation strategy of the organization and deliver the desired value through a road map of incremental changes. Use a  holistic I&T approach, ensuring that each initiative is clearly connected to an overarching strategy. Enable change in all different aspects of the organization, from channels and processes to data, culture, skills, operating model and incentives.",
  "• EG01 Portfolio of competitive products and services • EG05 Customer-oriented service culture • EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "AG08 Enabling and supporting business processes by integrating applications and technology"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo02.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo02.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo02.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo02.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo02.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo02.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
