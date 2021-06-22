import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo12 = new domainDetail(
  "Align, Plan, and Organize",
  "APO12 - Managed Risk",
  "Continually identify, assess and reduce I&T-related risk within tolerance levels set by enterprise executive management.",
  "Integrate the management of I&T-related enterprise risk with overall enterprise risk management (ERM) and balance the costs and benefits of managing I&T-related enterprise risk.",
  "• EG02 Managed business risk • EG06 Business service continuity and availability",
  "• AG02 Managed I&T-related risk   • AG07 Security of information, processing infrastructure and applications, and privacy",
  "CMMI 2014, COSO Enterprise Risk Management 2017, CMMI 2014, ISO / IEC 27001, NIST 2018"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo12.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo12.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo12.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo12.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo12.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo12.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo12.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
