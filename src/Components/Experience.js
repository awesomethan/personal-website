import React from "react";
import Job from "./Job";

function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="heading title">Work Experience</h1>
      <Job
        title={"Software Engineer Intern"}
        date={"May - August 2026"}
        company={"Okta"}
        image={"images/oktalogo.jpeg"}
        skills={"GitHub Actions, JavaScript"}
      ></Job>
      <Job
        title={"Software Engineer Intern"}
        date={"January - April 2026"}
        company={"StackAdapt"}
        image={"images/stackadaptlogo.jpeg"}
        skills={"Ruby on Rails, TypeScript, GraphQL"}
      ></Job>
      <Job
        title={"Software Engineer Intern"}
        date={"May - August 2025"}
        company={"Vidyard"}
        image={"images/vidyardlogo.jpg"}
        skills={"Ruby on Rails, Vue, GraphQL, Jest"}
      ></Job>
      <Job
        title={"Software Engineer (Part-Time)"}
        date={"January - March 2025"}
        company={"Mercor"}
        image={"images/mercorlogo.jpg"}
        skills={"Java, Python, C++"}
      ></Job>
      <Job
        title={"Software Engineer Intern"}
        date={"September - December 2024"}
        company={"WOLF Advanced Technology"}
        image={"images/wolflogo.jpg"}
        skills={
          "C#, .NET, EF Core, Git, Blazor, NUnit, Docker, Kubernetes, GitHub Actions"
        }
      ></Job>
      <Job
        title={"Data Analyst Intern"}
        date={"January - April 2024"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={
          "Python, SQL, Snowflake, Sigma Computing, VBA, Power BI, Power Query"
        }
      ></Job>
      <Job
        title={"QA Automation Engineer Intern"}
        date={"May - August 2023"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={"SQL, SSMS, Cypress, Google Apps Script, Excel"}
      ></Job>
    </div>
  );
}

export default Experience;
