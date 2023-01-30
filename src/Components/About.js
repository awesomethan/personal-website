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
    "I started playing provincial badminton during high school. After playing competitively for less than a year, I attained a rank of 21st in Ontario when I was finishing my grade 9 year. In addition, at the end of grade 12, I achieved a peak rank of 14th in Ontario. During the summer after I graduated from high school, I also worked as a badminton coach for a summer camp. Although I am not playing the sport competitively anymore, I still really enjoy playing it with friends recreationally.";
  const [title, setTitle] = useState("Badminton");
  const [text, setText] = useState(badmintonText);

  function badminton() {
    setTitle("Badminton");
    setText(badmintonText);
  }

  function math() {
    setTitle("Math");
    setText(
      "In grade 9, I became an assistant teacher at Spirit of Math. I primarily helped teach a grade 7 class and a grade 8 class, but I was also a supply assistant teacher for other classes, ranging from kindergarten to grade 6. Furthermore, I wrote many math contests throughout high school, including COMC, AMC, and the University of Waterloo’s CEMC contests. Although I only achieved honour roll once, I consistently made the distinction cutoff, and was very close to attaining honour roll on two other occasions. In addition, I did remote 1 on 1 private math tutoring for a period of time. Topics ranged from high school curriculum math, such as functions and trigonometry, to contest math, such as AMC questions."
    );
  }

  function compsci() {
    setTitle("Computer Science");
    setText(
      "I started learning competitive programming in grade 10 and mainly practised solving questions on DMOJ. I slowly stopped doing DMOJ problems during the start of grade 12 to focus more on school, but during the end of high school, I started tutoring the fundamentals of competitive programming. Currently, I am learning front-end web development, and I hope to learn more about back-end tools as well as game development in the future."
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
      <p className="text">
        My name is Ethan Wang, and I am currently a first year Computer Science
        student at the University of Waterloo. From time to time, I work on
        personal projects and learn more about web development. My interests
        include mathematics, programming, badminton, anime (I'm a Demon Slayer
        simp), and League of Legends (it's an awful game, please don't play it).
        I also enjoy spending time with friends, meeting new people, and
        listening to a variety of music. Feel free to contact me on Discord
        @thebaldffs#3128, email me at ethanwang1203@gmail.com, or connect with
        me using the buttons below!
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
