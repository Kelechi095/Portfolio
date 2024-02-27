import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavProvider from "./components/providers/NavProvider";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import React, { useLayoutEffect } from "react";

interface ScrollToTopProps {
  children: React.ReactNode
}

function App() {
  const ScrollToTop = ({ children}: ScrollToTopProps) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <NavProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
