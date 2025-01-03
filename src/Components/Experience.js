import React from "react";
import Job from "./Job";

function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="heading title">Work Experience</h1>
      <Job
        title={"Software Developer"}
        date={"September - December 2024"}
        company={"WOLF Advanced Technology"}
        image={"images/wolflogo.jpg"}
        skills={
          "C#, .NET, EF Core, Git, Blazor, NUnit, Docker, Kubernetes, GitHub Actions"
        }
      ></Job>
      <Job
        title={"Data Analyst"}
        date={"January - April 2024"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={
          "Python, SQL, Snowflake, Sigma Computing, Power BI, Power Query"
        }
      ></Job>
      <Job
        title={"QA Automation Engineer"}
        date={"May - August 2023"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={"SQL, SSMS, VBA, Google Apps Script, Excel"}
      ></Job>
    </div>
  );
}

export default Experience;
