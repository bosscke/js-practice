class domainDetail {
  constructor(
    domain,
    governance_objective,
    description,
    purpose,
    enterprise_goals,
    alignment_goals,
    related_guidance,
    detailed_reference
  ) {
    (this.domain = domain),
      (this.governance_objective = governance_objective),
      (this.description = description),
      (this.purpose = purpose),
      (this.enterprise_goals = enterprise_goals),
      (this.alignment_goals = alignment_goals),
      (this.related_guidance = related_guidance);
    this.detailed_reference = detailed_reference;
  }
}

let edm02 = new domainDetail(
  "Evaluate, Direct, and Monitor",
  "EDM02 - Ensured Benefits Delivery",
  "Optimize the value to the business from investments in business processes, I&T services and I&T assets.",
  "Secure optimal value from I&T-enabled initiatives, services and assets; cost-efficient delivery of solutions and services; and a reliable and accurate  picture of costs and likely benefits so that business needs are supported effectively and efficiently.",
  "• EG08 Optimization of internal business process functionality • EG12 Managed digital transformation programs",
  "AG03 Realized benefits from I&T-enabled investments and services portfolio"
);

let standards = [
  "CIS® Center for Internet Security®, The CIS Critical Security Controls for Effective Cyber Defense,  Version 6.1,August 2016",
  { Cloud_standards_and_good_practices: "Amazon Web Services - AWS" },
  {
    Cloud_standards_and_good_practices:
      "Security Considerations for Cloud Computing, ISACA",
  },
  {
    Cloud_standards_and_good_practices:
      "Controls and Assurance in the Cloud: Using COBIT 5, ISACA",
  },
  "CMMI Cybermaturity Platform 2018",
  "CMMI Data Management Maturity (DMM) model 2014",
  "CMMI DevelopmentV2.0, CMMI Institute, USA, 2018",
  "Committee of Sponsoring Organizations (COSO) Enterprise Risk Management (ERM) Framework, June 2017",
  "European Committee for Standardization (CEN), e-Competence Framework (e-CF) - A common European Framework for ICT Professionals in all industry sectors - Part 1: Framework, EN 16234-1:2016",
  "HITRUST Common Security Framework, version 9, September 2017",
  "Information Security Forum (ISF), The Standard of Good Practice for Information Security 2016",
  'ISO/IEC 20000-1:2011(E)',
  'ISO/IEC 27001:2013/Cor.2:2015(E)',
  'ISO/IEC 27002:2013/Cor.2:2015(E)',
  'ISO/IEC 27004:2016(E)',
  'ISO/IEC 27005:2011(E)',
  'ISO/IEC 38500:2015(E)',
  'ISO/IEC 38502:2017(E)',
  'Information Technology Infrastructure Library (ITIL®) v3, 2011',
  'Institute of Internal Auditors® (IIA®), “Core Principles for the Professional Practice of Internal Auditing',
  'King IV Report on Corporate Governance™, 2016',
  'NIST - Framework for Improving Critical Infrastructure Cybersecurity V1.1, April 2018',
  'NIST - Special Publication 800-37, Revision 2 (Draft), May 2018',
  'Special Publication 800-53, Revision 5 (Draft), August 2017',
  '“Options for Transforming the IT Function Using Bimodal IT,” MIS Quarterly Executive (white paper)',
  'A Guide to the Project Management Body of Knowledge: PMBOK® Guide, Sixth Edition, 2017',
  'PROSCI® 3-Phase Change Management Process',
  'Scaled Agile Framework for Lean Enterprises (SAFe®)',
  'Skills Framework for the Information Age (SFIA®) V6, 2015',
  'The Open Group IT4IT™ Reference Architecture, version 2.0',
  'The Open Group Standard TOGAF® version 9.2, 2018',
  'The TBM Taxonomy, The TBM Council'
];

const main = document.querySelector(".cobit__main");
const content = `
<section>
    <article>       
    <div class="card">
    <div class="card__domain"><p>Domain:</p> 
    <div class="card__domain--text">${edm02.domain}</div>
    </div>
    <div class="card__governance-objective"><p>Governence Objective:</p> 
    <div class="card__governance-objective--text">${edm02.governance_objective}</div>
    </div>
    <div class="card__description">
      <p>Description:</p>
      <div class="card__description--text">${edm02.description}</div>
    </div>
    <div class="card__purpose">
      <p>Purpose:</p>
      <div class="card__purpose--text">${edm02.purpose}</div>
    </div>
    <div class="card__goals">
    <div class="card__goals-enterprise-goals">
      <p>Enterprise Goals:</p>
      <div class="card__goals-enterprise-goals--text">${edm02.enterprise_goals}</div>
    </div>
    <div class="card__goals-alignment-goals">
     <p>Alignment Goals:</p>
      <div class="card__goals-alignment-goals--text">${edm02.alignment_goals}</div>
    </div>
  </div>
  <div class="card__framework">
          <div class="card__framework-related-guidance">
            <p>Related Guidance:</p>
            <div class="card__framework-related-guidance--standards">
              ${standards[0]}
            </div>
          </div>
          <div class="card__framework-detailed-reference">
            <p>Detailed Refence:</p>
            <div class="card__framework-detailed-reference--standards">
            ${standards[0]}
            </div>
          </div>
        </div>
  </div>
    </article>
</section>
`;

main.innerHTML = content;
