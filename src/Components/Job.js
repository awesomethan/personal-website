import React from "react";

function Job({ title, date, company, image, skills }) {
  return (
    <div className="experience-container flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={image} alt="" className="experience-img" />
        <div className="experience-text-container md:pl-12">
          <h1 className="heading text-3xl py-6 text-center md:text-left">
            {title}
          </h1>
          <p className="text experience-subheading text-center md:text-left">
            {company}
          </p>
          <div className="text experience-skills">
            <img src="images/skills.jpg" alt="" className="skills-img" />
            <p className="skills-text py-3">{skills}</p>
          </div>
        </div>
      </div>

      <div className="experience-date">{date}</div>
    </div>
  );
}

export default Job;
