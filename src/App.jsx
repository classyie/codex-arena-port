import React from "react";
import Footer from "./assets/Components/Footer";
import Banner from "./assets/Components/Banner";
import SubmitForm from "./assets/Components/SubmitForm";
import Navbar from "./assets/Components/Navbar";
import ServicesCards from "./assets/Components/ServicesCards";
import About from "./assets/Components/About";
import NoPage from "./assets/Components/NoPage";
import Ourteam from "./assets/Components/Ourteam";
import { BrowserRouter, Routes, Route } from "react-router";
import PricingPlans from "./assets/Components/PricingPlans";

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route
            path="/plans"
            element={
              <>
                <PricingPlans />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
