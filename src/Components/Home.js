import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faLinkedin,
  faGithub,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-top">
        <div className="homepage-left">
          <h1 className="heading title homepage-heading">
            Hi, I'm <span className="highlight">Ethan👋</span>
          </h1>
          <p className="text homepage-text">
            3rd year computer science student specializing in human-computer
            interaction @ UWaterloo
          </p>
        </div>
        <img className="homepage-img" src="images/homepic.jpg" alt=""></img>
      </div>
      <div className="homepage-bottom">
        <p className="text">Connect with me using the buttons below!</p>
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
          <a href="mailto:eqwang@uwaterloo.ca" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon email" />
          </a>
          {/* <a
            href="https://discordapp.com/users/221721964602064896"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="icon discord" />
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
          </a>*/}
        </div>
      </div>
    </div>

    // OLD CONTENT
    // <p className="text">
    //     Hey! Welcome to my website! You can use the nav bar above to navigate
    //     the site. Below you can see a collage of me and my friends. To learn
    //     more about me, click on 'About'. To check some of my projects and other
    //     cool things, click on 'Portfolio'. To learn about my 🌟fascinating🌟
    //     teenage life, click on 'Timeline'.
    //   </p>
    //   <div className="grid-container">
    //     <div className="image-grid grid-1">
    //       <img
    //         className="image-grid-row-2"
    //         src="images/home-img1.jpeg"
    //         alt=""
    //       />
    //       <img
    //         className="image-grid-row-2"
    //         src="images/home-img2.jpeg"
    //         alt=""
    //       />
    //       <img
    //         className="image-grid-row-2"
    //         src="images/home-img3.jpeg"
    //         alt=""
    //       />
    //     </div>
    //     <div className="image-grid grid-2">
    //       <img
    //         className="image-grid-row-2"
    //         src="images/home-img4.jpeg"
    //         alt=""
    //       />
    //       <img
    //         className="image-grid-col-2"
    //         src="images/home-img5.jpeg"
    //         alt=""
    //       />
    //       <img
    //         className="image-grid-col-2"
    //         src="images/home-img6.jpeg"
    //         alt=""
    //       />
    //     </div>
    //     <div className="image-grid grid-3">
    //       <img
    //         className="image-grid-col-2"
    //         src="images/home-img7.jpeg"
    //         alt=""
    //       />
    //       <img className="image-grid-row-2" src="images/home-img8.jpg" alt="" />
    //       <img className="image-grid-col-2" src="images/home-img9.jpg" alt="" />
    //     </div>
    //   </div>
  );
}

export default Home;
