import React, { useEffect } from "react";
import Footer from "./assets/Components/Footer";
import Banner from "./assets/Components/Banner";
import SubmitForm from "./assets/Components/SubmitForm";
import Navbar from "./assets/Components/Navbar";
import ServicesCards from "./assets/Components/ServicesCards";
import About from "./assets/Components/About";
import NoPage from "./assets/Components/NoPage";
import FrontendPP from "./assets/Components/PricingPlans/FrontendPP";
import BackendPP from "./assets/Components/PricingPlans/BackendPP";
import FullStackPP from "./assets/Components/PricingPlans/FullStackPP";
import DigitalPP from "./assets/Components/PricingPlans/DigitalPP";

import Ourteam from "./assets/Components/Ourteam";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is a route change or an anchor link
    if (location.hash === '') {
      // Only scroll to top if the hash is empty (no anchor link)
      window.scrollTo(0, 0);
    }
  }, [location]); // Trigger when location changes (i.e., page navigation)

  return null;
};


function App() {
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ServicesCards />
                <SubmitForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Ourteam />
              </>
            }
          />
          {/* Pricing Plan Routes */}
          <Route path="/frontend" element={<FrontendPP />} />
          <Route path="/backend" element={<BackendPP />} />
          <Route path="/fullstack" element={<FullStackPP />} />
          <Route path="/digital" element={<DigitalPP />} />

          <Route
            path="*"
            element={
              <>
                <NoPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;