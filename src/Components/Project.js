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
    <div className="project-container">
      <div className="portfolio-date">{date}</div>
      <div className="description-container">
        <h1 className="heading">{title}</h1>
        <div className="text portfolio-text">{description}</div>
        <div className="portfolio-button-container">
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button className="portfolio-button text">VIEW CODE</button>
          </a>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="portfolio-button text">VIEW DEMO</button>
          </a>
          {showProjectButton()}
        </div>
      </div>
      <div className="portfolio-img-container">
        <img src={image} alt="" className="portfolio-img" />
      </div>
    </div>
  );
}

export default Project;
