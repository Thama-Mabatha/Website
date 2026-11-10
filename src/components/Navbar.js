import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";

const navigation = [
  { label: "About", to: "/about#about" },
  { label: "Skills", to: "/about#skills" },
  { label: "Projects", to: "/about#projects" },
  { label: "Certificates", to: "/about#certificates" },
  { label: "Live API", to: "/about#live-api" },
  { label: "Contact", to: "/about#connect" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="page-shell site-nav__inner">
        <Link className="site-brand" to="/" aria-label="Thama Mabatha — home">
          <span className="site-brand__mark">{profile.shortName}</span>
          <strong>{profile.name}</strong>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav__links${open ? " site-nav__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const [path, hash] = item.to.split("#");
            const active = location.pathname === path && (!hash || location.hash === `#${hash}`);

            return (
            <Link
              key={item.to}
              to={item.to}
              className={active ? "active" : undefined}
            >
              {item.label}
            </Link>
          );})}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
