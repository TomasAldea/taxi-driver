import { Routes, Route, BrowserRouter} from "react-router-dom";
import { NavbarDefault } from "./components/NavbarDefault";
import { FooterWithLogo } from "./components/FooterWithLogo";
import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { About } from "./components/About";
import { Instagram } from "./components/Instagram";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { DatosEnriquecidos } from "./components/DatosEnriquecidos";
import { PrivacyPage } from "./components/PrivacyPage";

function App() {
  const [vercelAnalytics, setVercelAnalytics] = useState(false);
  useEffect(() => {}, [vercelAnalytics]);

  return (
    <>
      <BrowserRouter>
        {/* Templeate */}

        {/* Rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarDefault />
                <Hero />
                <div id="sections-container">
                  <Features />
                  <Testimonials />
                  <SimpleRegistrationForm />
                  <About />
                </div>
              </>
            }
          />
          <Route path="/privacidad" element={<PrivacyPage/>}></Route>
          <Route path='*'element={<h1>Not found</h1>}/>

        </Routes>
        {/* End Rutas */}

        {/* Templeate */}
        <Instagram />
        <CookieConsent
          enableDeclineButton
          style={{
            background: "#257053",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "20px",
          }}
          buttonStyle={{
            background: "white",
            color: "black",
            fontFamily: "Roboto",
            fontSize: "20px",
            borderRadius: "5px",
          }}
          declineButtonStyle={{
            background: "#ff0000b0",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "20px",
            borderRadius: "5px",
          }}
          buttonText="Aceptar"
          declineButtonText="Declinar"
          ariaAcceptLabel="Aceptar cookies"
          ariaDeclineLabel="Declinar cookies"
          onDecline={() => {
            setVercelAnalytics(false);
          }}
          onAccept={() => {
            setVercelAnalytics(true);
          }}
        >
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario.
        </CookieConsent>
        <DatosEnriquecidos />
        {vercelAnalytics && <Analytics />}
        <FooterWithLogo />
      </BrowserRouter>
    </>
  );
}

export default App;
