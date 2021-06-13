class projectTemplete {
  constructor(project_name, description, phase, activity, start, active) {
    (this.project_name = project_name),
      (this.description = description),
      (this.phase = phase),
      (this.activity = activity),
      (this.start = start),
      (this.active = active);
  }
  duration() {
    let now = new Date();
    let start = new Date(this.start);
    let elapsed = now - start;
    let days = Math.floor(elapsed / (1000 * 3600 * 24));
    return days;
  }
}

export default projectTemplete;
