import React from "react";
import NavBar from "./componets/NavBar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Tags from "./componets/Tags";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      {/* Background Layer */}
      <div
        className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      ></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Tags/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
