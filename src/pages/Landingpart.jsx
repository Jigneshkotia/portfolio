import React from "react";
import ProjectAnimation from "../components/projectAnimation";
import  mypic  from "./mypic1.png";
import { Download } from "@mui/icons-material";

const Landingpart = () => {

  return (
    <div className="landingpart">
      <div className="landingpartleft">
        <div>
          <div className="engineer">ENGINEER</div>
          <div className="name">Jignesh</div>
          <a href="https://drive.google.com/file/d/1bC7xVdVrWD4zGW7MQzbu6e4_5rY1DwdV/view?usp=sharing">
          <button className="resume">
            Resume <Download />
          </button>
          </a>
          <div className="bio1">Persuing BTech in CSE from Delhi Technological University</div>
        <img src={mypic} alt="My Picture" id="mypic" />
        </div>
      </div>
      <div className="landingpartright">
        <ProjectAnimation />
      </div>
    </div>
  );
};

export default Landingpart;
