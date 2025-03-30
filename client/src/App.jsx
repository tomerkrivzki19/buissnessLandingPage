import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./components/subComponents/Contact";
import Hero from "./components/subComponents/Hero";
import Services from "./components/subComponents/Services";
import Nav from "./components/Nav";
import Prices from "./components/subComponents/Prices";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import PricesPage from "./components/PricesPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [count, setCount] = useState(0);

  // Notes : TODO:
  // -build all the existing components -finish the ui-ux desing
  // -tranform footer  + nav
  // -create a poput when scrooling to all components = use the exmpale in ganhmishakim project
  //  -create a page for all pricing page
  //  -crate a function that will send me a user detaills

  // company name -- VeloCommerce
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<ErrorPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/prices" element={<PricesPage />} />
      </Routes>
      <Footer />

      {/* <>
        <Nav />
        <Hero />
        <Services />
        <Prices />
        <Contact />
        <Footer />
      </> */}
    </Router>
  );
}

export default App;
