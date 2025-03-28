import React from "react";
import Contact from "./subComponents/Contact";
import Hero from "./subComponents/Hero";
import Services from "./subComponents/Services";
import Nav from "./Nav";
import Prices from "./subComponents/Prices";

function MainPage() {
  return (
    <>
      <Hero />
      <Services />
      <Prices />
      <Contact />
    </>
  );
}

export default MainPage;
