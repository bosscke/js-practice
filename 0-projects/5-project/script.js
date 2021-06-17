import projectTemplete from "./project-template.js";

const projectMake = new projectTemplete(
  "Make",
  "October 30, 2020, 11:00",
  "Make stuff happen",
  "Stuff is happening",
  "Being busy",
  "March 7, 2021, 11:00",
  true
);

const content = `
<main>
<section>
    <article>
        <h1>${projectMake.project_name}</h1>
        
       <p> Project Name: ${projectMake.project_name}</p>
       <dl> 
            <li>Initialized: ${projectMake.init()}</li>
            <li>Description: ${projectMake.description}</li>
            <li>Phase: ${projectMake.phase}</li>
            <li>Activity: ${projectMake.activity}</li>
            <li>Start: ${projectMake.start}</li>
            <li>Active: ${projectMake.active}</li>
            <li>Duration: ${projectMake.duration()} days</li>
            <li>Duration: ${projectMake.durationWeeks()} weeks</li>
            <li>Duration: ${projectMake.durationMonths()} months</li>
        </dl>
        
    
    </article>
</section>
</main>
`;
document.body.innerHTML = content;

console.log("**Show the Project**", projectMake);
console.log("**Name**", projectMake.project_name);
console.log("**Description**", projectMake.description);
console.log("**Start**", projectMake.start);
console.log("**End**", projectMake.end);
console.log("**Duration**", projectMake.duration());
