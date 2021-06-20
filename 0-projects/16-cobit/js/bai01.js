import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let bai01 = new domainDetail(
  "Build, Acquire, and Implement",
  "BAI01 - Managed Programs",
  "Manage all programs from the investment portfolio in alignment with enterprise strategy and in a coordinated way, based on a standard program management approach. Initiate, plan, control, and execute programs, and monitor expected value from the program.",
  "Realize desired business value and reduce the risk of unexpected delays, costs and value erosion. To do so, improve communications to and  involvement of business and end users, ensure the value and quality of program deliverables and follow up of projects within the programs, and maximize program contribution to the investment portfolio.",
  "• EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality• EG12 Managed digital transformation programs",
  "• AG03 Realized benefits from I&T-enabled investments and services portfolio • AG09 Delivering programs on time, on budget and meeting requirements and quality standards",
  "No Related Guidance"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${bai01.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${bai01.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${bai01.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${bai01.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${bai01.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${bai01.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${bai01.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
