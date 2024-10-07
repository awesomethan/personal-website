import React from "react";
import Job from "./Job";

function Experience() {
  return (
    <div>
      <p className="heading title">Work Experience</p>
      <Job
        title={"Software Developer"}
        date={"September - December 2024"}
        company={"WOLF Advanced Technology"}
        image={"images/wolflogo.jpg"}
        skills={"C#, .NET, Git, SQL"}
      ></Job>
      <Job
        title={"Data Analyst"}
        date={"January - April 2024"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={"SQL, Python, Power BI, Power Query"}
      ></Job>
      <Job
        title={"QA Analyst/Automation Engineer"}
        date={"May - August 2023"}
        company={"Globalfaces Direct"}
        image={"images/gfdlogo.jpg"}
        skills={"SQL, VBA, Microsoft Excel, Google Apps Script"}
      ></Job>
    </div>
  );
}

export default Experience;
