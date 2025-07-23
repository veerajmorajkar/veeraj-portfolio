import React, { useRef } from "react";
import "./Landing.css";
import Dither from './Dither/Dither';
import profileImg from "./assets/your-profile-image.png"; // update with your image
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface LandingProps {
  mode: 'dark' | 'light';
  setMode: (mode: 'dark' | 'light') => void;
  onNav: (target: 'about' | 'education' | 'technical' | 'experience' | 'projects') => void;
  bottomText: string;
}

const Landing: React.FC<LandingProps> = ({ mode, setMode, onNav, bottomText }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="landing-border">
      <Dither mode={mode} />
      <div className="left-column">
        <h1 className="name">Veeraj Morajkar</h1>
        <p className="subtitle">designer &amp; developer</p>
        <nav className="sidebar-nav">
          <ul>
            <li><button onClick={() => onNav('about')}>about me</button></li>
            <li><button onClick={() => onNav('education')}>education</button></li>
            <li><button onClick={() => onNav('technical')}>technical skills</button></li>
            <li><button onClick={() => onNav('experience')}>experience</button></li>
            <li><button onClick={() => onNav('projects')}>projects</button></li>
          </ul>
        </nav>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={bottomText}
          timeout={400}
          classNames="fade"
          nodeRef={nodeRef}
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className={
              "landing-bottom-right-text" +
              (bottomText.includes("skills-list") ? " technical-box"
                : bottomText.includes("VIDYALANKAR INSTITUTE") ? " education-box"
                : bottomText.includes("proj-list") ? " project-box"
                : bottomText.includes("exp-list") ? " experience-box"
                : "")
            }
            dangerouslySetInnerHTML={{ __html: bottomText }}
          />
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Landing;
