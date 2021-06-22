import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo05 = new domainDetail(
  "Align, Plan, and Organize",
  "APO05 - Managed Portfolio",
  "Execute the strategic direction set for investments in line with the enterprise architecture vision and I&T road map. Consider the different categories of investments and the resources and funding constraints. Evaluate, prioritize and balance programs and services, managing demand within resource and funding constraints, based on their alignment with strategic objectives, enterprise worth and risk. Move selected programs into the active products or services portfolio for execution. Monitor the performance of the overall portfolio of products and services and programs, proposing adjustments as necessary in response to program, product or service performance or changing enterprise priorities.",
  "Optimize the performance of the overall portfolio of programs in response to individual program, product and service performance and changing enterprise priorities and demand.",
  "• EG01 Portfolio of competitive products and services• EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "• AG03 Realized benefits from I&T-enabled investments and services portfolio • AG05 Delivery of I&T services in line with business requirements",
  "ITIL_v3, PMBOK Sixth Edition"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo05.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo05.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo05.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo05.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo05.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo05.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo05.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
