import React from "react";
import Footer from "./assets/Components/Footer";
import Banner from "./assets/Components/Banner";
import SubmitForm from "./assets/Components/submitForm";
import Navbar from "./assets/Components/Navbar";
import ServicesCards from "./assets/Components/ServicesCards";

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <ServicesCards />

      <SubmitForm />
      <Footer />
    </>
  );
}

export default App;
