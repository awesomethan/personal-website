import React from "react";

function Project({
  title,
  description,
  image,
  codeLink,
  demoLink,
  projectLink,
}) {
  return (
    <div className="project-container">
      <div className="description-container">
        <h1 className="heading">{title}</h1>
        <div className="text portfolio-text">{description}</div>
        <div className="portfolio-button-container">
          <a href={codeLink} target="_blank">
            <button className="portfolio-button text">VIEW CODE</button>
          </a>
          <a href={demoLink} target="_blank">
            <button className="portfolio-button text">VIEW DEMO</button>
          </a>
          <a href={projectLink} target="_blank">
            <button className="portfolio-button text">VIEW PROJECT</button>
          </a>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="portfolio-img" />
      </div>
    </div>
  );
}

export default Project;
