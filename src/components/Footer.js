import React from "react";
import { Link, useLocation } from "react-router-dom";
import SocialLinks from "./common/SocialLinks";
import { profile } from "../data/profile";

function Footer() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__main">
        <div className="site-footer__intro">
          <span className="site-footer__mark">{profile.shortName}</span>
          <div>
            <strong>{profile.name}</strong>
            <p>Frontend-focused software developer building thoughtful digital experiences.</p>
          </div>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">View CV</Link>
        </nav>
        <SocialLinks compact />
      </div>
      <div className="page-shell site-footer__base">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and developed with care.</span>
      </div>
    </footer>
  );
}

export default Footer;
