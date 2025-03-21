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
