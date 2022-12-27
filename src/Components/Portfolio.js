import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <Project
        title={"Pokédex"}
        description={
          "A Pokédex made using React JS, Axios, Bootstrap, React-Bootstrap, and CSS. I also used the library Axios to get data from PokéAPI. Try it out, and learn more about Pokémon!"
        }
        image={"images/pokedex.png"}
        codeLink={"https://github.com/awesomethan/pokedex"}
        demoLink={
          "https://drive.google.com/file/d/15Le33xZkgzou13vYdvK3Bx1Du04SJpqy/view?usp=share_link"
        }
        projectLink={"https://pokedex-awesomethan.vercel.app/"}
      ></Project>
      <Project
        title={"Demon Slayer Quiz"}
        description={
          "A Demon Slayer Quiz made using HTML, CSS, and Javascript. Feel free to try it and test your Demon Slayer knowledge! I guarantee that there will be at least one question that you do not know ;)"
        }
        image={"images/demon-slayer.png"}
        codeLink={"https://github.com/awesomethan/demon-slayer-quiz"}
        demoLink={
          "https://drive.google.com/file/d/155LjTpC5BOFewyCAXOcmr3ARh_K8XhHH/view?usp=share_link"
        }
        projectLink={"https://demon-slayer-quiz-awesomethan.vercel.app/"}
      ></Project>
      <Project
        title={"Cookie Clicker"}
        description={
          "A simulation of the game Cookie Clicker made using HTML, CSS, and Javascript. As an introductory web dev project, it's not that interesting, but I promise that it is still fun to play :)"
        }
        image={"images/cookie-clicker.png"}
        codeLink={"https://github.com/awesomethan/cookie-clicker"}
        demoLink={
          "https://drive.google.com/file/d/1vhF53viOMvJBzpoKHuvkIreBl5QX5vfO/view?usp=share_link"
        }
        projectLink={"https://cookie-clicker-awesomethan.vercel.app/"}
      ></Project>
    </div>
  );
}

export default Portfolio;
