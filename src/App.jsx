import React, { useRef, useState } from "react";
import Background from "./pages/Animatedbackground";
import Landingpart from "./pages/Landingpart";
import { Code, GitHub, LinkedIn, Twitter, Mail } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Profilepage from "./pages/Profilepage";
import ProjectSlider from "./components/Workslider";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  // Create refs for each section
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const workRef = useRef(null);

  const handleClick = (section, ref) => {
    setCurrentSection(section);
    scrollToSection(ref);
  };

  // Function to scroll to the section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Background />
      <div className="socialicons">
        <div className="icon">
          <Tooltip title="LeetCode Profile" arrow>
            <a href="https://leetcode.com/u/kotiajignesh8/">
              <Code />
            </a>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="GitHub Profile" arrow>
            <a href="https://github.com/Jigneshkotia">
              <GitHub />
            </a>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="LinkedIn Profile" arrow>
            <a href="https://www.linkedin.com/in/jignesh-kotia">
              <LinkedIn />
            </a>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Twitter Profile" arrow>
            <a href="https://x.com/KotiaJignesh">
              <Twitter />
            </a>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Send Email" arrow>
            <a href="mailto:kotiajignesh8@gmail.com">
              <Mail />
            </a>
          </Tooltip>
        </div>
      </div>

      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Assign the ref to the corresponding section */}
        <div className="landingpart" ref={homeRef}>
          <Landingpart />
        </div>
        <div style={{ height: "100vh", width: "100vw" }} ref={profileRef}>
          <Profilepage />
        </div>
        <div style={{ height: "100vh", width: "100vw" }} ref={workRef}>
          <ProjectSlider />
        </div>
      </div>

      <div className="navbar">
        <nav>
          {/* On click, call handleClick with the corresponding section and ref */}
          <div
            className="navoptions"
            onClick={() => handleClick("home", homeRef)}
            style={{ color: currentSection === "home" ? "cyan" : "white" }}
          >
            Home
          </div>
          <div
            className="navoptions"
            onClick={() => handleClick("profile", profileRef)}
            style={{ color: currentSection === "profile" ? "cyan" : "white" }}
          >
            Profile
          </div>
          <div
            className="navoptions"
            onClick={() => handleClick("work", workRef)}
            style={{ color: currentSection === "work" ? "cyan" : "white" }}
          >
            Work
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;