import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Award from "./pages/Award";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/awards" element={<Award />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
