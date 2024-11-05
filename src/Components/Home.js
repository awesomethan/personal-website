import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faSpotify,
  faLinkedin,
  faGithub,
  // faInstagram,
  // faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="homepage-container">
      <div className="flex flex-col items-center md:flex-row md:justify-center w-full gap-12">
        <img
          className="w-36 h-36 md:w-52 md:h-52 rounded-full homepage-img mt-14 md:m-0"
          src={"images/homepic.jpg"}
          alt=""
        />
        <div className="homepage-left flex flex-col items-center md:items-start w-full md:w-3/5 px-12">
          <h1 className="heading text-5xl">
            Hi, I'm <span className="highlight">Ethan👋</span>
          </h1>
          <div className="flex flex-row gap-4 my-4">
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
              href="mailto:eqwang@uwaterloo.ca"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon email" />
            </a>
          </div>
          <div className="py-10 md:p-0">
            <p className="text homepage-text">
              3rd year computer science student specializing in human-computer
              interaction @ UWaterloo
            </p>
            <br />
            <p className="text homepage-text">
              I’m a software developer aspiring to help build impactful
              solutions that enrich lives and benefit society.
            </p>
          </div>
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
