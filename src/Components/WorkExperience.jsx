import React from "react";
import "../Style/WorkExperience.css";
import Arohar from "../images/Arohar.png";
import CodeJi from "../images/CodeJi.png";
import KushubMedia from "../images/KushubMedia.png"

function WorkExperience() {
  return (
    <>
      <div className="workExperience">
        <h1>Work Experience</h1>
        <div className="workExpCont">
          <div className="ExpCard">
            <img src={KushubMedia} alt=" technologies"/>
            <div>
            <h4>Kushub Media Solutions Pvt. Ltd.</h4>
            <h6>FrontEnd Developer</h6>
            <p>Currently, working here as a FrontEnd Developer. Crafting Interfaces and Solutions</p>
            </div>
        </div>
        <div className="ExpCard">
            <img src={CodeJi} alt=" technologies"/>
            <div>
            <h4>Codeji Infotech Private Limited</h4>
            <h6>MERN Stack Developer(Intern)</h6>
            <p>Working in a fullstack React Project with mongo and express. Created a task assignment app.</p>
            </div>
        </div>
        <div className="ExpCard">
            <img src={Arohar} alt="arohar technologies"/>
            <div>
            <h4>Arohar Technologies</h4>
            <h6>FullStack Developer(Intern)</h6>
            <p>Understands the working of MVC architecture using Angular, .NET, Mysql.</p>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
