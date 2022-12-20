import React from "react";

function Project({ title, description, image, codeLink, demoLink }) {
  return (
    <div className="project-container">
      <div className="description-container">
        <h1 className="heading">{title}</h1>
        <div className="text portfolio-text">{description}</div>
        <a href={codeLink}>
          <button className="portfolio-button text">VIEW CODE</button>
        </a>
        <a href={demoLink}>
          <button className="portfolio-button text">VIEW DEMO</button>
        </a>
      </div>
      <img src={image} alt="" className="portfolio-img" />
    </div>
  );
}

export default Project;
