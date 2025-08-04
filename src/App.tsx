import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import "./App.css"; // Keep global styles here

const ABOUT_TEXT = `I am a developer and ux/ui designer based in Mumbai, India. My goal is to combine creative thinking and design with an analytical approach to solve problems. I love being part of a good team and grow a product together while making some buddies for life. I can be counted on to consistently deliver above expectations.`;
const EDUCATION_TEXT = `
<div class='edu-list'>
  <div class='edu-item'>
    <div class='edu-title'>VIDYALANKAR INSTITUTE<br/>OF TECHNOLOGY, MUMBAI,<br/>INDIA</div>
    <div class='edu-degree'>B.Tech in Electronics and Telecommunication</div>
  </div>
  <div class='edu-item'>
    <div class='edu-title'>NIRMALA MEMORIAL<br/>FOUNDATION OF COMMERCE<br/>AND SCIENCE, MUMBAI,<br/>INDIA</div>
    <div class='edu-degree'>Higher Secondary School (HSC) (Class XII)</div>
  </div>
  <div class='edu-item'>
    <div class='edu-title'>IES MANIK VIDYAMANDIR,<br/>MUMBAI, INDIA</div>
    <div class='edu-degree'>Indian Certificate of Secondary Education (ICSE)</div>
  </div>
</div>
`;
const TECHNICAL_SKILLS_TEXT = `
<div class='skills-list'>
  <div class='skills-item'>HTML</div>
  <div class='skills-item'>C & C++</div>
  <div class='skills-item'>JAVA</div>
  <div class='skills-item'>PYTHON</div>
  <div class='skills-item'>REACT</div>
  <div class='skills-item'>JAVASCRIPT</div>
  <div class='skills-item'>FIGMA</div>
  <div class='skills-item'>UI/UX DESIGN</div>
  <div class='skills-item'>NODEJS</div>
  <div class='skills-item'>MATLAB</div>
  <div class='skills-item'>TYPESCRIPT</div>
  <div class='skills-item'>WEB DEVELOPMENT</div>
  <div class='skills-item'>APP DEVELOPMENT</div>
</div>
`;
const EXPERIENCE_TEXT = `
<div class='exp-list'>
  <div class='exp-item'>
    <div class='exp-title'>INTERN – JUGGIE’S COFFER, DELHI, INDIA</div>
    <div class='exp-desc'>implementing marketing strategies, making social media content, helping with creative aspects and web development, planning and execution of events.</div>
  </div>
  <div class='exp-item'>
    <div class='exp-title'>INSTITUTES INNOVATION COUNCIL(IIC), VIT | EVENTS HEAD</div>
    <div class='exp-desc'>organized several events around the year including podcasts and crowd event, looked after the technical aspects for recordings or podcast sessions.</div>
  </div>
</div>
`;
const PROJECTS_TEXT = `
<div class='proj-list'>
  <div class='proj-item'>
    <div class='proj-title'>SMART MIRROR USING AI</div>
    <div class='proj-desc'>Designed and built a Raspberry Pi-based smart mirror with a voice assistant for real-time updates, integrated facial recognition for automatic attendance, and personalized schedule display for enhanced daily organization.</div>
  </div>
  <div class='proj-item'>
    <div class='proj-title'>USER MANAGEMENT SYSTEM</div>
    <div class='proj-desc'>Developed a web-based user management system with secure authentication using Next.js and NextAuth, backed by PostgreSQL and Prisma for user data handling, supporting registration, login, and session management.</div>
  </div>
  <div class='proj-item'>
    <div class='proj-title'>CHOOSE YOUR ADVENTURE GAME</div>
    <div class='proj-desc'>Developed a web application featuring a React-based interface where users can input a story theme, which communicates with a FastAPI backend to generate and display interactive, customized adventure stories based on user-provided themes.</div>
  </div>
</div>
`;

function App() {
  const [bottomText, setBottomText] = useState<string>(ABOUT_TEXT);
  const [showIntro, setShowIntro] = useState(true);
  const [activeNav, setActiveNav] = useState<'about' | 'education' | 'technical' | 'experience' | 'projects'>('about');

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleNav = (target: 'about' | 'education' | 'technical' | 'experience' | 'projects') => {
    setActiveNav(target);
    if (target === 'about') setBottomText(ABOUT_TEXT);
    else if (target === 'education') setBottomText(EDUCATION_TEXT);
    else if (target === 'technical') setBottomText(TECHNICAL_SKILLS_TEXT);
    else if (target === 'experience') setBottomText(EXPERIENCE_TEXT);
    else if (target === 'projects') setBottomText(PROJECTS_TEXT);
  };

  return (
    <div className="center-container">
      {showIntro ? (
        <div className="intro-fade">
          <span className="intro-title">
            <span className="intro-main">Veeraj Morajkar</span>
            <span className="intro-sub"> Portfolio</span>
          </span>
        </div>
      ) : (
        <div className="border-wrapper landing-fade">
          <Landing onNav={handleNav} bottomText={bottomText} activeNav={activeNav} />
        </div>
      )}
    </div>
  );
}

export default App;
