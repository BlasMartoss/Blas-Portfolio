import React from "react";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/skills/SkillsSection";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="bg-[#0E141B]">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default Home;
