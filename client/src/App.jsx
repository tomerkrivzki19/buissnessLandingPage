import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Nav from "./components/Nav";
import Prices from "./components/Prices";

function App() {
  const [count, setCount] = useState(0);

  // Notes : TODO:
  // -build all the existing components -finish the ui-ux desing
  // -teanform footer  + nav
  // -create a poput when scrooling to all components = use the exmpale in ganhmishakim project
  //  -create a page for all pricing page
  //  -crate a function that will send me a user detaills

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Prices />
      <Contact />
      {/*Contact -> have also footer inside  */}
    </>
  );
}

export default App;
