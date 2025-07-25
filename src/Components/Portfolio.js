import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <h1 className="heading title">My Portfolio</h1>
      <Project
        date={"October 204"}
        title={"Anime Archive"}
        description={
          "An anime site created using Next.js and Tailwind CSS that allows the user to search for any anime and receive its details. I used JavaScript Fetch API to retrieve the data from Jikan API."
        }
        image={"images/anime-archive.png"}
        codeLink={"https://github.com/awesomethan/anime-archive"}
        demoLink={
          "https://drive.google.com/file/d/1hnwaK_UbLO-Plkwp_cRVfAGrVz8r3967/view?usp=share_link"
        }
        projectLink={"https://ethans-anime-archive.vercel.app/"}
      ></Project>
      <Project
        date={"February 2023"}
        title={"Meme Machine"}
        description={
          "A Google Chrome extension created using JSON, HTML, CSS, and JavaScript. It fetches a random meme from meme-api.com each time it is opened and keeps track of the number of memes viewed on that day."
        }
        image={"images/meme-machine.png"}
        codeLink={"https://github.com/awesomethan/meme-machine"}
        demoLink={
          "https://drive.google.com/file/d/1_Who8tToaec6Gnyr5mMnV3VsPZISGTVK/view?usp=share_link"
        }
        projectLink={""}
      ></Project>
      <Project
        date={"January 2023"}
        title={"Credictor"}
        description={
          "A site created in a team of 3 that uses machine learning trained on banking datasets to predict a person's eligibility for a credit card. I designed and built the front-end form and helped connect the React front-end with the Flask back-end."
        }
        image={"images/credictor.png"}
        codeLink={"https://github.com/awesomethan/credictor"}
        projectLink={""}
      ></Project>
      <Project
        date={"December 2022"}
        title={"Pokédex"}
        description={
          "A Pokédex created using React JS, Axios, Bootstrap, React-Bootstrap, and CSS. I used the library Axios to get data from PokéAPI."
        }
        image={"images/pokedex.png"}
        codeLink={"https://github.com/awesomethan/pokedex"}
        demoLink={
          "https://drive.google.com/file/d/15Le33xZkgzou13vYdvK3Bx1Du04SJpqy/view?usp=share_link"
        }
        projectLink={"https://pokedex-awesomethan.vercel.app/"}
      ></Project>
      <Project
        date={"November 2022"}
        title={"Demon Slayer Quiz"}
        description={
          "A Demon Slayer Quiz created using HTML, CSS, and JavaScript. Feel free to try it and test your Demon Slayer knowledge! I guarantee that there will be at least one question that you do not know ;)"
        }
        image={"images/demon-slayer.png"}
        codeLink={"https://github.com/awesomethan/demon-slayer-quiz"}
        demoLink={
          "https://drive.google.com/file/d/155LjTpC5BOFewyCAXOcmr3ARh_K8XhHH/view?usp=share_link"
        }
        projectLink={"https://demon-slayer-quiz-awesomethan.vercel.app/"}
      ></Project>
      <Project
        date={"October 2022"}
        title={"Cookie Clicker"}
        description={
          "A simulation of the game Cookie Clicker created using HTML, CSS, and JavaScript. As an introductory web dev project, it's not that interesting, but I promise that it is still fun to play :)"
        }
        image={"images/cookie-clicker.png"}
        codeLink={"https://github.com/awesomethan/cookie-clicker"}
        demoLink={
          "https://drive.google.com/file/d/1vhF53viOMvJBzpoKHuvkIreBl5QX5vfO/view?usp=share_link"
        }
        projectLink={"https://cookie-clicker-awesomethan.vercel.app/"}
      ></Project>
      <Project
        date={"April 2020"}
        title={"Domino Game"}
        description={
          "A domino game created using Python in my ICS3U class in high school. I used object-oriented programming (OOP) to make, randomize, and display 3 dominos. At that time, it was one of my better projects, so I decided to share it here."
        }
        image={"images/domino-game.png"}
        codeLink={"https://github.com/awesomethan/python-domino-game"}
        demoLink={
          "https://drive.google.com/file/d/1BKBGaLJJriuW-5yFEmyZmfmcX7Apr8po/view?usp=share_link"
        }
        projectLink={""}
      ></Project>
      <Project
        date={"January 2019"}
        title={"Trio Tic Tac Toe"}
        description={
          "A trio tic tac toe game created using Visual Basic in my ICS2O class in high school. The user can play against AI that was programmed to always make the most optimal move. This was the first time I was happy losing to AI LOL"
        }
        image={"images/triotictactoe.png"}
        codeLink={"https://github.com/awesomethan/vb-triotictactoe"}
        demoLink={
          "https://drive.google.com/file/d/1kCVmaa6lDvGDknFvzBdT1VPe69a8vxJU/view?usp=share_link"
        }
        projectLink={""}
      ></Project>
    </div>
  );
}

export default Portfolio;
