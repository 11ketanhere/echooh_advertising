import React from "react";
import Home from "./components/Home";
import Service from "./components/Service";
import Header from "./components/Header";
import Project from "./components/Project";
import WorkShowcase from "./components/WorkShowcase";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Service />
      <Project />
      <WorkShowcase />
      <About />
      <Team />
      <Contact />
    </>
  );
};

export default App;
