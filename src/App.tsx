import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavProvider from "./components/providers/NavProvider";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
      <Navbar />
      <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
