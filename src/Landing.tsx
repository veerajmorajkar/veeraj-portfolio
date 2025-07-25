import React, { useRef, useState } from "react";
import "./Landing.css";
import Dither from './Dither/Dither';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const NAVS = [
  { key: 'about', label: 'about me' },
  { key: 'education', label: 'education' },
  { key: 'technical', label: 'technical skills' },
  { key: 'experience', label: 'experience' },
  { key: 'projects', label: 'projects' },
];

interface LandingProps {
  onNav: (target: 'about' | 'education' | 'technical' | 'experience' | 'projects') => void;
  bottomText: string;
  activeNav: 'about' | 'education' | 'technical' | 'experience' | 'projects';
}

const Landing: React.FC<LandingProps> = ({ onNav, bottomText, activeNav }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePos({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
  };

  return (
    <div className="landing-border" onMouseMove={handleMouseMove}>
      <Dither externalMousePos={mousePos} />
      <div className="left-column">
        <h1 className="name">Veeraj Morajkar</h1>
        <p className="subtitle">designer &amp; developer</p>
        <nav className="sidebar-nav">
          <ul>
            {NAVS.map(nav => (
              <li key={nav.key}>
                <button
                  onClick={() => onNav(nav.key as any)}
                  style={{ minWidth: 80 }}
                >
                  {activeNav === nav.key ? (
                    <span style={{
                      display: 'inline-block',
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: '#fff',
                      verticalAlign: 'middle'
                    }} />
                  ) : nav.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {activeNav === 'about' && (
        <div className="social-links-box">
          <button className="social-link-btn" onClick={() => window.open('https://www.linkedin.com/in/veeraj-morajkar-a24994244/', '_blank')}>
            <b>LinkedIn</b> <span style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: 2}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10L10 4M10 4H5.5M10 4V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <button className="social-link-btn" onClick={() => window.open('https://github.com/veerajmorajkar', '_blank')}>
            <b>Github</b> <span style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: 2}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10L10 4M10 4H5.5M10 4V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <button className="social-link-btn" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mkar.veeraj@gmail.com&su=SUBJECT&body=BODY', '_blank')}>
            <b>Email</b> <span style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: 2}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10L10 4M10 4H5.5M10 4V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </div>
      )}
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
