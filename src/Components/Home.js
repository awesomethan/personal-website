import React from "react";

function Home() {
  return (
    <div>
      <h1 className="heading title home">Home</h1>
      <p className="text">
        Hey! Welcome to my website! You can use the nav bar above to navigate
        the site. Below you can see a collage of me and my friends. To learn
        more about me, click on 'About'. To check some of my projects and other
        cool things, click on 'Portfolio'. To learn about my 🌟fascinating🌟
        teenage life, click on 'Timeline'.
      </p>
      <div className="image-grid grid-1">
        <img className="image-grid-row-2" src="images/home-img1.jpeg" alt="" />
        <img className="image-grid-row-2" src="images/home-img2.jpeg" alt="" />
        <img className="image-grid-row-2" src="images/home-img3.jpeg" alt="" />
      </div>
      <div className="image-grid grid-2">
        <img className="image-grid-row-2" src="images/home-img4.jpeg" alt="" />
        <img className="image-grid-col-2" src="images/home-img5.jpeg" alt="" />
        <img className="image-grid-col-2" src="images/home-img6.jpeg" alt="" />
      </div>
      <div className="image-grid grid-3">
        <img className="image-grid-col-2" src="images/home-img7.jpeg" alt="" />
        <img className="image-grid-row-2" src="images/home-img8.jpg" alt="" />
        <img className="image-grid-col-2" src="images/home-img9.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
