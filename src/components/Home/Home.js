import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import coverImage from "../../Assets/thama-cover.jpeg";

function Home() {
  return (
    <main className="home-page">
      <section className="landing-hero">
        <div className="landing-hero__wash landing-hero__wash--blue" aria-hidden="true" />
        <div className="landing-hero__wash landing-hero__wash--pink" aria-hidden="true" />
        <img className="landing-hero__background" src={coverImage} alt="" aria-hidden="true" />

        <div className="page-shell landing-hero__inner">
          <div className="landing-hero__copy">
            <p className="eyebrow hero-enter hero-enter--one">Software developer · Information Technology</p>
            <h1 className="hero-enter hero-enter--two">
              <span>Thama Mabatha.</span> I build thoughtful digital experiences.
            </h1>
            <p className="landing-hero__intro hero-enter hero-enter--three">
              {profile.introduction}
            </p>

            <div className="landing-hero__actions hero-enter hero-enter--four">
              <Link className="button button--primary" to="/projects">
                Explore Projects <FiArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button--secondary" to="/about#connect">
                Contact Me <FiMail aria-hidden="true" />
              </Link>
              <Link className="button button--text" to="/resume">
                Download CV <FiDownload aria-hidden="true" />
              </Link>
            </div>

            <p className="landing-hero__location hero-enter hero-enter--four">
              React interfaces · responsive experiences · thoughtful details
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
