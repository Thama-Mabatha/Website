import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import TechnicalVisual from "./TechnicalVisual";
import { profile } from "../../data/profile";

function Home() {
  return (
    <main className="home-page">
      <section className="landing-hero">
        <div className="landing-hero__wash landing-hero__wash--blue" aria-hidden="true" />
        <div className="landing-hero__wash landing-hero__wash--pink" aria-hidden="true" />

        <div className="page-shell landing-hero__inner">
          <div className="landing-hero__copy">
            <p className="eyebrow hero-enter hero-enter--one">Hello, I’m Thama.</p>
            <h1 className="hero-enter hero-enter--two">
              I love turning <span>ideas</span> into experiences people can use.
            </h1>
            <p className="landing-hero__intro hero-enter hero-enter--three">
              {profile.introduction}
            </p>

            <div className="landing-hero__actions hero-enter hero-enter--four">
              <Link className="button button--primary" to="/projects">
                Explore Projects <FiArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button--text" to="/about">
                About Me
              </Link>
            </div>

            <p className="landing-hero__location hero-enter hero-enter--four">
              <FiMapPin aria-hidden="true" /> Frontend-focused · {profile.location}
            </p>
          </div>

          <div className="landing-hero__visual hero-enter hero-enter--visual">
            <TechnicalVisual />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
