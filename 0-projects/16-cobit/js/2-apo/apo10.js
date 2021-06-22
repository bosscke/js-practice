import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let apo10 = new domainDetail(
  "Align, Plan, and Organize",
  "APO10 - Managed Vendors",
  "Manage I&T-related products and services provided by all types of vendors to meet enterprise requirements. This includes the search for and  selection of vendors, management of relationships, management of contracts, and reviewing and monitoring of vendor performance and vendor  ecosystem (including upstream supply chain) for effectiveness and compliance.",
  "Optimize available I&T capabilities to support the I&T strategy and road map, minimize the risk associated with nonperforming or noncompliant vendors, and ensure competitive pricing.",
  "EG01 Portfolio of competitive products and services • EG08 Optimization of internal business process functionality",
  "AG05 Delivery of I&T services in line with business requirements",
  "ITIL_v3, ISO / IEC 20000"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${apo10.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${apo10.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${apo10.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${apo10.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${apo10.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${apo10.alignment_goals}</dd>
        </dl>
        <dl>
            <dt>Related Guidance:</dt>
            <dd>${apo10.related_guidance}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
