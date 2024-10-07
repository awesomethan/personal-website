import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const badmintonText =
    "I started playing provincial badminton during high school. After playing competitively for less than a year, I attained a rank of 21st in Ontario when I was finishing my grade 9 year. At the end of grade 12, I achieved a peak rank of 14th in Ontario. I also worked as a badminton coach for a summer camp once. Now, I'm just a retired recreational player.";
  const [title, setTitle] = useState("Badminton");
  const [text, setText] = useState(badmintonText);

  function badminton() {
    setTitle("Badminton");
    setText(badmintonText);
  }

  function math() {
    setTitle("Math");
    setText(
      "In grade 10, I was an assistant teacher for a grade 7 and 8 class at Spirit of Math. Furthermore, I wrote many math contests throughout high school, including COMC, AMC, and UWaterloo's CEMC contests. Although I only achieved honour roll once, I consistently made the distinction cutoff, and was very close to attaining honour roll on two other occasions."
    );
  }

  function compsci() {
    setTitle("Computer Science");
    setText(
      "I started learning competitive programming in grade 10 and mainly practised solving questions on DMOJ. During the end of high school, I started tutoring the fundamentals of competitive programming. Currently, I am learning more about full stack development, and I hope to learn more about AI and game development in the future."
    );
  }

  function anime() {
    setTitle("Anime");
    setText(
      "Whenever I’m stressed, bored, happy, sad, or honestly feeling any type of emotion, I enjoy watching anime! Some of my favourite anime are Demon Slayer, Death Note, Attack on Titan, Blue Lock, and A Silent Voice. I am always curious about interesting or new anime, so feel free to let me know your favourites!"
    );
  }

  return (
    <div>
      <h1 className="heading title">About Me</h1>
      <p className="bigHeading heading">Ethan Wang</p>
      <p className="text">
        3rd year Computer Science student specializing in human-computer
        interaction @ uwaterloo
      </p>
      <p className="text">
        In my free time, I enjoy playing badminton, working out at the gym,
        listening to Kpop, and watching anime. Feel free to contact me on
        Discord @thebaldffs, email me at ethanwang1203@gmail.com, or connect
        with me using the buttons below!
      </p>
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/ethan-wang-3a5506217/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a
          href="https://github.com/awesomethan"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a
          href="https://www.instagram.com/baldndumbethan/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a
          href="https://open.spotify.com/user/awesomethan1026?si=2a3b5aae60584ae0"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} className="icon spotify" />
        </a>
      </div>
      <h2 className="heading">
        Click on the buttons below for more info about me!
      </h2>
      <div className="about-button-container">
        <div className="about-button-div">
          <button
            className="badminton-img about-button"
            onClick={badminton}
          ></button>
        </div>
        <div className="about-button-div">
          <button className="math-img about-button" onClick={math}></button>
        </div>
        <div className="about-button-div">
          <button
            className="compsci-img about-button"
            onClick={compsci}
          ></button>
        </div>
        <div className="about-button-div">
          <button className="anime-img about-button" onClick={anime}></button>
        </div>
      </div>
      <h2 className="heading">{title}</h2>
      <div className="text">{text}</div>
    </div>
  );
}

export default About;
