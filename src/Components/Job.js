import React from "react";

function Job({ title, date, company, image, skills }) {
  return (
    <div className="experience-container">
      <div className="experience-left">
        <img src={image} alt="" className="experience-img" />
        <div className="experience-text-container">
          <h1 className="heading">{title}</h1>
          <p className="text experience-subheading">{company}</p>
          <div className="text experience-skills">
            <img src="images/skills.jpg" alt="" className="skills-img" />
            <p className="skills-text">{skills}</p>
          </div>
        </div>
      </div>

      <div className="experience-date">{date}</div>
    </div>
  );
}

export default Job;
