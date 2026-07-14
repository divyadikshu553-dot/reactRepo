import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/routers/Navbar";
import Home from "./Components/routers/Home";
import Projects from "./Components/routers/Projects";
import Posts from "./Components/routers/Posts";
import About from "./Components/routers/About";

function App() {
  return (
    <>
      {/* <Navbar/>
     <Slider/> */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
           <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
