import React from "react";
import ButtonCategory from "../components/ButtonCategory";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Principal from "../components/Principal";
import ContactMe from "../components/ContactMe";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="snap-y">
      <Principal />
      <SkillsSection />

      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default LandingPage;
