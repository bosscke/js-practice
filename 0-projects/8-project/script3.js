const strategy = {
  process: "financial management",
  activity_group: ["Accounting", "Budgeting", "Charging"],
  totalNumActivities: 17,
  activitiesComplete: 9,
  statusActivities: function (totalNumActivities, activitiesComplete) {
    const status = this.totalNumActivities - this.activitiesComplete;

    if (this.activitiesComplete <= 8) {
      return `${this.activity_group[0]} -${strategy.activitiesComplete}- activities compelted.\n-${status}- activities left to finish.`;
    } else if (this.activitiesComplete > 8 && this.activitiesComplete <= 13) {
      return `${this.activity_group[0]} completed. Working on ${this.activity_group[1]}.\n-${status}- activities left to finish`;
    } else {
      return `Left to complete --${status}--`;
    }
  },
};

console.log(strategy.statusActivities());
