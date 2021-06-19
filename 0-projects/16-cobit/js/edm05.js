import domainDetail from "./domain-detail.js";

// let getTheTitle = document
//   .querySelector("header")
//   .textContent.toLocaleLowerCase();

// console.log(getTheTitle);

let edm05 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM05 - Ensured Stakeholder Engagement",
  "Ensure that stakeholders are identified and engaged in the I&T governance system and that enterprise I&T performance and conformance  measurement and reporting are transparent, with stakeholders approving the goals and metrics and necessary remedial actions.",
  "Ensure that stakeholders are supportive of the I&T strategy and road map, communication to stakeholders is effective and timely, and the basis for  reporting is established to increase performance. Identify areas for improvement, and confirm that I&T-related objectives and strategies are in line with the enterprise’s strategy.",
  "• EG04 Quality of financial information • EG07 Quality of management information",
  "AG10 Quality of I&T management information"
);

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
        <dl>
            <dt>Domain:</dt>
            <dd>${edm05.domain}</dd>
            
         </dl>
        <dl>
            <dt>Governance Objective:</dt>
            <dd>${edm05.governance_objective}</dd>
      </dl>
        <dl>
            <dt>Description:</dt>
            <dd>${edm05.description}</dd>
        </dl>
        <dl>
            <dt>Purpose:</dt>
            <dd>${edm05.purpose}</dd>
        </dl>
        <dl>
            <dt>Enterprise Goals:</dt>
            <dd>${edm05.enterprise_goals}</dd>
        </dl>
        <dl>
            <dt>Alignment Goals:</dt>
            <dd>${edm05.alignment_goals}</dd>
        </dl>
    </article>
</section>
`;

main.innerHTML = content;
