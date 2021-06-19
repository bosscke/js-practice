class domainDetail {
  constructor(
    domain,
    governance_objective,
    description,
    purpose,
    enterprise_goals,
    alignment_goals,
    related_guidance
  ) {
    (this.domain = domain),
      (this.governance_objective = governance_objective),
      (this.description = description),
      (this.purpose = purpose),
      (this.enterprise_goals = enterprise_goals),
      (this.alignment_goals = alignment_goals),
      (this.related_guidance = related_guidance);
  }
}

export default domainDetail;
