class projectTemplete {
  constructor(project_name, description, phase, activity, start, end, active) {
    (this.project_name = project_name),
      (this.description = description),
      (this.phase = phase),
      (this.activity = activity),
      (this.start = start),
      (this.end = end),
      (this.active = active);
  }
  duration() {
    let start = new Date(this.start);
    let end = new Date(this.end);
    let elapsed = end - start;
    let days = Math.floor(elapsed / (1000 * 3600 * 24) / 30);
    return days;
  }
}

export default projectTemplete;
