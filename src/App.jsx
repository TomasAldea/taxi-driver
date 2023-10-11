import { NavbarDefault } from "./components/NavbarDefault";
import { FooterWithLogo } from "./components/FooterWithLogo";
import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { About } from "./components/About";
import { Instagram } from "./components/Instagram";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

function App() {
  const [vercelAnalytics, setVercelAnalytics] = useState(false);

  useEffect(() => {
    console.log(vercelAnalytics);
  }, [vercelAnalytics]);

  useEffect(() => {
    AOS.init({ offset: 300 });
  }, []);

  return (
    <>
      <NavbarDefault />
      <Hero />
      <div id="sections-container">
        <Features />
        <Testimonials />
        <SimpleRegistrationForm />
        <About />
      </div>
      <Instagram />
      <FooterWithLogo />
      {vercelAnalytics && <Analytics />}

      <CookieConsent 
      enableDeclineButton 
      style={{ background: "#257053", color: "white", fontFamily: "Roboto", fontSize: "20px" }}
      buttonStyle={{ background: "white", color: "black", fontFamily: "Roboto", fontSize: "20px", borderRadius: "5px" }}
      declineButtonStyle={{ background: "#ff0000b0", color: "white", fontFamily: "Roboto", fontSize: "20px", borderRadius: "5px" }}
      buttonText="Aceptar"
      declineButtonText="Declinar"
      onDecline={() => {
        setVercelAnalytics(false);
      }}
      onAccept={(acceptedByScrolling) => {
        setVercelAnalytics(true);
      }}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
      </CookieConsent>
    </>
  );
}

export default App;
