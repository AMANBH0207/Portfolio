import React from 'react';
import "../Style/Skills.css";
import skillsSvg from "../images/skills.svg";


function Skills() {
  return (
    <>
    <div className='skills'>
    <h1>Skills</h1>
    <div className='skillsDiv'>
    <img src={skillsSvg} alt="my skills"/>
    </div>
    </div>
    </>
  )
}

export default Skills