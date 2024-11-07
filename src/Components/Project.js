import React from "react";

function Project({
  date,
  title,
  description,
  image,
  codeLink,
  demoLink,
  projectLink,
}) {
  function showProjectButton() {
    if (projectLink === "") return null;
    else
      return (
        <a href={projectLink} target="_blank" rel="noreferrer">
          <button className="portfolio-button text">VIEW PROJECT</button>
        </a>
      );
  }
  return (
    <div className="project-container flex flex-col md:flex-row">
      <div className="portfolio-date">{date}</div>
      <div className="description-container w-5/6 md:w-3/5 md:px-6">
        <h1 className="heading text-4xl pt-6 text-center">{title}</h1>
        <div className="text portfolio-text py-8">{description}</div>
        <div className="portfolio-button-container w-full lg:w-2/3 mb-5 md:mb-0 mx-3">
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button className="portfolio-button text">VIEW CODE</button>
          </a>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="portfolio-button text">VIEW DEMO</button>
          </a>
          {showProjectButton()}
        </div>
      </div>
      <img src={image} alt="" className="portfolio-img w-4/5 md:w-2/5" />
    </div>
  );
}

export default Project;
