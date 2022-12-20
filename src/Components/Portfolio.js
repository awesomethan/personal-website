import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <Project
        title={"Demon Slayer Quiz"}
        description={
          "A Demon Slayer Quiz made using HTML, CSS, and Javascript. Feel free to try it and test your Demon Slayer knowledge!"
        }
        image={"images/demon-slayer.png"}
        codeLink={"https://github.com/awesomethan/demon-slayer-quiz"}
        demoLink={"https://drive.google.com/file/d/155LjTpC5BOFewyCAXOcmr3ARh_K8XhHH/view?usp=share_link"}
      ></Project>
      <Project
        title={"Cookie Clicker"}
        description={
          "A simulation of the game Cookie Clicker made using HTML, CSS, and Javascript. As an introductory web dev project, it's not that interesting, but I promise that it is still fun to play :)"
        }
        image={"images/cookie-clicker.png"}
        codeLink={"https://github.com/awesomethan/cookie-clicker"}
        demoLink={"https://drive.google.com/file/d/1vhF53viOMvJBzpoKHuvkIreBl5QX5vfO/view?usp=share_link"}
      ></Project>
    </div>
  );
}

export default Portfolio;
