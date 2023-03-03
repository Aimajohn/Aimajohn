import React from "react";
import ButtonCategory from "./ButtonCategory";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Principal from "./Principal";
import ContactMe from "./ContactMe";
import SkillsSection from './SkillsSection'
type Props = {};

function MainPortfolio({}: Props) {
  return (
    <div className="snap-y">
      <Principal/>
      <SkillsSection/>

      <Projects />
      <AboutMe />
      <ContactMe/>
      
    </div>
  );
}

export default MainPortfolio;
