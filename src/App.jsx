import React from "react";
import About from "./Component/About";
import "../public/styles.css";
import Navbar from "./Component/Navbar";
import ContactMe from "./Component/ContactMe";
import AboutWindows from "./Component/AboutWindow";
import Card from "./Component/Card";
import Content from "./Component/Content";
import Badges from "./Component/Badges";

function createCard(content) {
  return (
    <Card img={content.img} name={content.name} listOne={content.listOne} />
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <ContactMe />
      <AboutWindows />
      <div className="containerCard">{Content.map(createCard)}</div>
      <Badges />
    </div>
  );
}

export default App;
