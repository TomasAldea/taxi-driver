import { NavbarDefault } from "./components/NavbarDefault";
import { FooterWithLogo } from "./components/FooterWithLogo";
import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { About } from "./components/About";
import { Instagram } from "./components/Instagram";
import { Analytics } from '@vercel/analytics/react';
import AOS from 'aos';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init( {offset: 500} );
  }, [])
  
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

      <Analytics />
    </>
  );
}

export default App;
