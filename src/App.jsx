import { useState } from "react";
import { NavbarDefault } from "./components/NavbarDefault";
import { FooterWithLogo } from "./components/FooterWithLogo";
import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { About } from "./components/About";
import { Instagram } from "./components/Instagram";

function App() {
  return (
    <>
      <NavbarDefault/>
      <Hero/>
      <div id="sections-container">
        <Features/>
        <Testimonials/>
        <SimpleRegistrationForm/>
        <About/>
      </div>
      <Instagram/>
      <FooterWithLogo/>
    </>
  );
}

export default App;
