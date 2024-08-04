import React from "react";
import "../Style/MyWork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import chatxr from "../images/ChatXR.png";
import taskManagement from "../images/TaskManagement.png";
import infoWeather from "../images/InfoWeather.png";

function MyWork() {
  return (
    <>
      <div className="myWork">
        <h1>My Work</h1>
        <div className="myWorkDiv">
          <div className="workDetails">
            <h3 style={{ color: "#874dbd" }}>ChatXr(Chatting app)</h3>
            <p>
              App created using React and firebase. Having feature to chat in
              real-time without any interruprions. Just crate your account and
              start chatting.
            </p>
            <p>
              Try It <a href="https://amanbh0207.github.io/ChatXR/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </p>
          </div>
          <div className="workImg">
            <img src={chatxr} alt="ChatXr" />
          </div>
        </div>

        <div className="myWorkDiv">
          <div className="workImgOpposite">
            <img src={taskManagement} alt="taskmanagement" />
          </div>
          <div className="workDetailsOpposite">
            <h3 style={{ color: "#874dbd" }}>Task Management App</h3>
            <p>
              App created using React and Mongodb as well as in the core
              html,css and javaScript. Both versions are capable of best
              management of your tasks. Just assign task as an admin or get task
              and completed to keep the record of yout tasks.
            </p>
            <p>
              Try It <a href="https://neon-crostata-644514.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </p>
          </div>
        </div>

        <div className="myWorkDiv">
          <div className="workDetails">
            <h3 style={{ color: "#874dbd" }}>Info Weather</h3>
            <p>
              App created using React with the integration of Openwether Api.
              Get realtime weather status of your location as well as the place
              you search.
            </p>
            <p>Try It <a href="https://amanbh0207.github.io/InfoWeather/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </p>
          </div>
          <div className="workImg">
            <img src={infoWeather} alt="infoWeather" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
