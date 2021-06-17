class projectTemplete {
  constructor(
    project_name,
    initialized,
    description,
    phase,
    activity,
    start,
    active
  ) {
    (this.project_name = project_name),
      (this.initialized = initialized),
      (this.description = description),
      (this.phase = phase),
      (this.activity = activity),
      (this.start = start),
      (this.active = active);
  }
  init() {
    let now = new Date();
    let initialized = new Date(this.initialized);
    let elapsed = now - initialized;
    let months = elapsed / (1000 * 3600 * 24) / 31;
    return months.toFixed(1);
  }
  duration() {
    let now = new Date();
    let start = new Date(this.start);
    let elapsed = now - start;
    let days = Math.floor(elapsed / (1000 * 3600 * 24));
    return days;
  }

  durationWeeks() {
    let now = new Date();
    let start = new Date(this.start);
    let elapsed = now - start;
    let weeks = elapsed / (1000 * 3600 * 24) / 7;
    return weeks.toFixed(1);
  }
  durationMonths() {
    let now = new Date();
    let start = new Date(this.start);
    let elapsed = now - start;
    let months = elapsed / (1000 * 3600 * 24) / 31;
    return months.toFixed(1);
  }
}

export default projectTemplete;
