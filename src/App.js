import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectCaseStudy from "./components/Projects/ProjectCaseStudy";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./hero-fix.css";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/about#about" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Navigate to="/projects" replace />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Navigate to="/about#skills" replace />} />
          <Route path="/contact" element={<Navigate to="/about#connect" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
