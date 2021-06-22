import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo14 = new domainDetail(
  "Align, Plan, and Organize",
  "APO14 - Managed Data",
  "Achieve and sustain effective management of the enterprise data assets across the data life cycle, from creation through delivery, maintenance  and archiving.",
  "Ensure effective utilization of the critical data assets to achieve enterprise goals and objectives.",
  "• EG04 Quality of financial information • EG07 Quality of management information",
  "AG10 Quality of I&T management information",
  "CMMI Data Maturity Maturity Model 2014, ITIL_v3 2011, The CIS Critical Security Controls for Effective Cyber Defence"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo14.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo14.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo14.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo14.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo14.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo14.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo14.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
