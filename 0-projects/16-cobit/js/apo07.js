import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo07 = new domainDetail(
  "Align, Plan, and Organize",
  "APO07 - Managed Human Resources",
  " Provide a structured approach to ensure optimal recruitment/acquisition, planning, evaluation and development of human resources (both internal and external).",
  "Optimize human resources capabilities to meet enterprise objectives.",
  "• EG01 Portfolio of competitive products and services • EG10 Staff skills, motivation and productivity • EG13 Product and business innovation",
  "• AG12 Competent and motivated staff with mutual understanding of technology and business • AG13 Knowledge, expertise and initiatives for business innovation",
  "COSO Enterprise Risk Management 2017, Skills Framework for the Information Age V6, 2015, CMMI 2018, ISF The Standard of Good Practice for Information Security, ISO / IEC 27001, NIST 2017"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo07.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo07.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo07.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo07.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo07.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo07.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo07.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
