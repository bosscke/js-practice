import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let edm01 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM01 - Ensured Governance Framework Setting and Maintanance",
  "Analyze and articulate the requirements for the governance of enterprise I&T. Put in place and maintain governance components with clarity of authority and responsibilities to achieve the enterprise's mission, goals and objectives.",
  "Provide a consistent approach integrated and aligned with the enterprise governance approach. I&T-related decisions are made in line with the enterprise’s strategies and objectives and desired value is realized. To that end, ensure that I&T-related processes are overseen effectively and transparently;compliance with legal, contractual and regulatory requirements is confirmed; and the governance requirements for board members are met.",
  "• EG03 Compliance with external laws and regulations \n • EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "• AG01 I&T compliance and support for business compliance with external laws and regulations • AG03 Realized benefits from I&T-enabled investments and services portfolio "
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${edm01.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${edm01.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${edm01.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${edm01.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${edm01.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${edm01.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
console.log(getTheTitle);
