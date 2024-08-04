import React from "react";
import "../Style/IntroSec.css";
import Lottie from "react-lottie";
import Animation from "../Lottie/Animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function IntroSec() {
  const defaultOptions = {
    loop: true,
    autoplsy: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="introSec">
        <div className="infoContainer">
          <div className="introContainer">
            <div className="fullIntro">
              <div className="welcomeGreet">
                <h2>Welcome To My Portfolio</h2>
              </div>
              <div className="Intro">
              <h1>Hi! Iam Aman Bhardwaj</h1>
              <h2 className="typing-animation"> A Fullstack Developer</h2>
              <p>
                I am a dedicated and hardworking fullstack web developer with
                expertise in Mongo, Express, React, Node and Angular. My journey
                in the tech world has been enriched by working in the tech
                companies, where I honed my skills and developed a passion for
                creating seamless web applications. Now, I am eager to bring my
                knowledge and enthusiasm to a dynamic team, contributing to
                innovative projects and furthering my career in the IT sector.
                Explore my work and let's connect!
              </p>
              <Link to="Contact"><button className="connectBtn pointer"><b>Let's Connect  <FontAwesomeIcon icon={faArrowRight} size="xl" /></b></button></Link>
              </div>
            </div>
            <div className="lottieBg">
              <Lottie
                options={defaultOptions}
                height={"20rem"}
                width={"20rem"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroSec;
