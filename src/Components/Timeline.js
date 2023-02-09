import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BadmintonLogo from "./Icons/badminton.png";
import WorkLogo from "./Icons/work.png";
import SchoolLogo from "./Icons/school.png";

function Timeline() {
  return (
    <VerticalTimeline className="timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#03045e",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="March 25, 2018"
        icon={<img className="timeline-icon" src={BadmintonLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          First Badminton Tournament
        </h3>
        <p>
          I won my first gold medal! Though it was only a small local
          tournament, I was rather proud of myself :D
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#03045e",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="September 4, 2018"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Started Attending MMHS
        </h3>
        <p>
          This is where I met my amazing friends who suffered through the IB
          programme with me 🥲
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="October 14, 2018"
        icon={<img className="timeline-icon" src={BadmintonLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          First Provincial Badminton Medal
        </h3>
        <p>
          During my second provincial badminton tournament, I made it all the
          way to the finals in boys doubles and earned a silver medal. One of my
          most memorable tournaments.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="November 7, 2018"
        icon={<img className="timeline-icon" src={WorkLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          First Day of Work at Spirit of Math
        </h3>
        <p>
          It was my first time doing formal paid work so it was rather
          nerve-racking for me, especially since I was responsible for an entire
          class of students. Nonetheless, I enjoyed the novel sense of
          responsibility and leadership.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="March 2-3, 2019"
        icon={<img className="timeline-icon" src={BadmintonLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          First Provincial Gold Medal
        </h3>
        <p>
          During my fourth provincial badminton tournament, I won not just one,
          but two gold medals, as well as a bronze too.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="July-August 2019"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Learned About Arduino
        </h3>
        <p>
          During my grade 9 summer, a family friend taught me a little about
          Arduino. I was able to build a light and music bot and program it to
          play simple songs while flashing lights. In addition, I later made it
          able to move in different patterns. Feel free to check out the final
          product and code{" "}
          <a
            href="https://github.com/awesomethan/arduino-mini-projects"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="November 20, 2019"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          First CEMC Contest Honour Roll Placement
        </h3>
        <p>
          At the 2019 CIMC, I earned a certificate of distinction and barely
          made the honour roll by scoring 47/60 and placing in group V. Not the
          most extraordinary achievement, but still one that I was quite proud
          of.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="February 12, 2020"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          My First CCC Contest
        </h3>
        <p>
          I wrote the junior division and scored 61/75. Considering the fact
          that I didn't put that much time in competitive programming back then,
          it wasn’t a horrible result.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="September 9, 2020"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Started the IB Programme
        </h3>
        <p>
          I spent a lot of time preparing for this programme, thinking that it
          would be extremely tough; however, in retrospect, I actually wasted a
          lot of time over studying 😭
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="February 17, 2021"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          My Second CCC Contest
        </h3>
        <p>
          This time, I wrote the senior division and scored 37/75. A very
          mediocre result, considering the fact that I spent a lot of time
          practising and preparing for this contest 🫤
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="April 7, 2021"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          My First Euclid Contest
        </h3>
        <p>
          I scored 73/100 and received a certificate of distinction, a
          satisfactory result for my first time attempting this 2.5 hour long
          math contest.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="May-June, 2021"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">AP Exams</h3>
        <p>
          During these 2 months, I wrote 4 AP exams: Computer Science A,
          Microeconomics, Calculus BC, and Chemistry. Thanks to my hard work and
          studying, I was able to achieve a 5/5 score on all of them, which
          earned me an AP scholar award 😎
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="September 2021"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Became an Executive in the Math and CS Clubs
        </h3>
        <p>
          In the math club, I created content for meetings, including both
          curriculum and contest math. In the computer science club, I was a
          competitive programming trainer, so I enlightened club members on the
          fundamentals of competitive programming. You can find some of my
          resources{" "}
          <a
            href="https://drive.google.com/drive/folders/1VOMTimsvFfidF6dp2nuH89Fk7Bcx-3YU?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="October 2018-November 2021"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Miscellaneous Math Contest Awards
        </h3>
        <p>
          I received a certificate of distinction in the following contests:
          COMC 2018, CIMC 2018, Pascal 2019, Fryer 2019, CIMC 2019, Cayley 2020,
          CCC Junior 2020, COMC 2020, CCC Senior 2021, Fermat 2021, CSMC 2021. I
          was a couple points from making honour roll on some of these contests,
          but oh well lol. These are not particularly notable achievements at
          all, but still awards nonetheless 😅
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="April 2022"
        icon={<img className="timeline-icon" src={WorkLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Started Private Tutoring
        </h3>
        <p>
          I started tutoring high school students AP chemistry, grade 11
          chemistry, precalculus math, competition math, and competitive
          programming.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="October 2018-May 2022"
        icon={<img className="timeline-icon" src={BadmintonLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Miscellaneous Badminton Awards
        </h3>
        <p>
          In total, I won 4 gold, 5 silver, and 3 bronze provincial medals. I
          also played a few other local tournaments and acquired several other
          awards too.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="June 2022"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Finished the IB Programme and Graduated From HS
        </h3>
        <p>
          I achieved an IB score of 40/45. A little confused as to how I got a 7
          in French but 6 in chemistry but oh well! I think I did pretty well on
          my math, physics, and chemistry IAs, so you can read them{" "}
          <a
            href="https://drive.google.com/drive/folders/1Z2HjoVKjvDE0qzM5XQWIWHD1mWhAUvCX?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          if you're interested (my EE is a different story though, so I will not
          share it LOL)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="July-August 2022"
        icon={<img className="timeline-icon" src={WorkLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Coached Badminton (Full Time!)
        </h3>
        <p>
          I led a badminton summer camp and taught 7-13 year old children the
          fundamentals of badminton by showing them proper footwork and
          technique.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="September 2022-present"
        icon={<img className="timeline-icon" src={SchoolLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          Started Attending UWaterloo
        </h3>
        <p>
          Meeting more amazing and intelligent people who share the same
          interests as me makes every day entertaining!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#03045e", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #caf0f8" }}
        date="January 2023-present"
        icon={<img className="timeline-icon" src={BadmintonLogo} alt="" />}
        iconStyle={{
          background: "#03045e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="vertical-timeline-element-title">
          UW Badminton Club Exec
        </h3>
        <p>
          I love playing badminton with friends to relieve stress and have fun,
          so to spend more time at the club, I decided to become an exec to help
          the club run more smoothly.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
