import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let edm02 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM02 - Ensured Benefits Delivery",
  "Optimize the value to the business from investments in business processes, I&T services and I&T assets.",
  "Secure optimal value from I&T-enabled initiatives, services and assets; cost-efficient delivery of solutions and services; and a reliable and accurate  picture of costs and likely benefits so that business needs are supported effectively and efficiently.",
  "• EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "AG03 Realized benefits from I&T-enabled investments and services portfolio"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${edm02.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${edm02.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${edm02.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${edm02.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${edm02.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${edm02.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
