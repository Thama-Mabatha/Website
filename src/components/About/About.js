import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCoffee, FiCompass, FiDownload, FiMonitor } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import SocialLinks from "../common/SocialLinks";
import Reveal from "../common/Reveal";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Github from "./Github";
import projects from "../../data/projects";
import istqbCertificate from "../../Assets/ISTQB-CTFL.jpeg";
import sheCodesWebCertificate from "../../Assets/SheCodes-Web-Development.jpg";
import sheCodesCodingCertificate from "../../Assets/SheCodes-Introduction-to-Coding.jpg";
import ProjectVisual from "../Projects/ProjectVisual";
import Home from "../Home/Home";

const interests = [
  { icon: FiMonitor, label: "Gaming" },
  { icon: FiCoffee, label: "Cooking and trying new recipes" },
  { icon: FiCompass, label: "New and thrill-seeking experiences" },
];

function About() {
  return (
    <main className="about-page">
      <Home />
      <section className="about-story" id="about">
        <div className="page-shell about-story__grid">
          <Reveal>
            <p className="eyebrow">About me</p>
          </Reveal>
          <Reveal className="about-story__copy" delay={90}>
            <p>
              I’m Thama Mabatha, an Information Technology-focused software developer who enjoys frontend development. I like turning ideas into useful digital experiences, then refining the details until they feel clear, thoughtful and good to use.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="frontend-note">
        <div className="page-shell frontend-note__inner">
          <Reveal>
            <p className="eyebrow">Why frontend</p>
            <blockquote>“I love frontend development because I get to turn ideas into something people can actually see, interact with and use.”</blockquote>
          </Reveal>
          <Reveal delay={80}>
            <p>
              I like working on the details people directly experience: responsive
              layouts, clear interactions, useful feedback and the quiet visual choices
              that make a product easier to understand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="approach-section">
        <div className="page-shell">
          <SectionHeading eyebrow="How I build" title="Thoughtful from the first question to the final detail." />
          <AboutCard />
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Technical skills"
            title="Frontend first, with experience across the tools that support the work."
            description="A focused view of the technologies I use most and others I have worked with along the way."
          />
          <Techstack />
        </div>
      </section>

      <section className="selected-work-section" id="projects">
        <div className="page-shell">
          <SectionHeading eyebrow="Selected projects" title="Work that is personal, practical and worth exploring." description="A closer look at two projects where the problem, the interface and the implementation all mattered." />
          <div className="selected-work-grid">
            {projects.filter((project) => ["multilingual-gbv-detection", "nyimbo-dza-vhatendi", "universal-admin-platform", "quickkart-ecommerce"].includes(project.slug)).map((project, index) => (
              <Reveal as="article" className={`selected-work-card selected-work-card--${project.accent}`} delay={index * 80} key={project.slug}>
                <div className="selected-work-card__visual"><ProjectVisual project={project} /></div>
                <div className="selected-work-card__content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.whyBuilt}</p>
                  <p>{project.contribution}</p>
                  <Link className="text-link" to={`/projects/${project.slug}`}>Read the case study <FiArrowRight aria-hidden="true" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Link className="button button--secondary selected-work-section__all" to="/projects">Browse all projects <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="interests-section">
        <div className="page-shell interests-section__grid">
          <SectionHeading eyebrow="Away from the keyboard" title="Curiosity needs room to wander." />
          <div className="interest-list">
            {interests.map(({ icon: Icon, label }, index) => (
              <Reveal key={label} delay={index * 70}><Icon aria-hidden="true" /><span>{label}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="certificates-section" id="certificates">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Certificates & learning"
            title="A record of the learning behind the work."
            description="I keep the full, current list of qualifications and certificates in my CV so it stays easy to verify and download."
          />
          <div className="certificate-grid">
            <Reveal as="article" className="certificate-card">
              <img className="certificate-card__image" src={istqbCertificate} alt="ISTQB Certified Tester Foundation Level certificate" />
              <p className="certificate-card__number">01 · iLab</p>
              <h3>ISTQB Certified Tester Foundation Level</h3>
              <p>A verified certificate in software testing fundamentals and quality-focused practice.</p>
              <a className="text-link" href={istqbCertificate} target="_blank" rel="noreferrer">View certificate <FiArrowRight aria-hidden="true" /></a>
            </Reveal>
            <Reveal as="article" className="certificate-card" delay={80}>
              <img className="certificate-card__image" src={sheCodesWebCertificate} alt="SheCodes Plus Web Development certificate" />
              <p className="certificate-card__number">02 · SheCodes</p>
              <h3>Web Development</h3>
              <p>A SheCodes Plus workshop certificate covering practical web development foundations.</p>
              <a className="text-link" href={sheCodesWebCertificate} target="_blank" rel="noreferrer">View certificate <FiArrowRight aria-hidden="true" /></a>
            </Reveal>
            <Reveal as="article" className="certificate-card" delay={140}>
              <img className="certificate-card__image" src={sheCodesCodingCertificate} alt="SheCodes Basics Introduction to Coding certificate" />
              <p className="certificate-card__number">03 · SheCodes</p>
              <h3>Introduction to Coding</h3>
              <p>A SheCodes Basics workshop certificate focused on introductory coding concepts.</p>
              <a className="text-link" href={sheCodesCodingCertificate} target="_blank" rel="noreferrer">View certificate <FiArrowRight aria-hidden="true" /></a>
            </Reveal>
            <Reveal as="article" className="certificate-card" delay={80}>
              <p className="certificate-card__number">04</p>
              <h3>Learning through projects</h3>
              <p>My project work is where I practise new ideas, from responsive React interfaces to API-driven experiences.</p>
              <Link className="text-link" to="/projects">Browse the projects <FiArrowRight aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="live-api-section" id="live-api">
        <div className="page-shell live-api-section__grid">
          <div>
            <p className="eyebrow">Live API</p>
            <h2>One small project, built around useful data.</h2>
            <p>{projects.find((project) => project.slug === "weather-app")?.description}</p>
          </div>
          <Reveal className="live-api-card">
            <div>
              <p className="live-api-card__status"><span /> Live demo</p>
              <h3>Weather App</h3>
              <p>Search for a city and see current conditions presented in a focused, responsive interface.</p>
            </div>
            <a className="button button--primary" href={projects.find((project) => project.slug === "weather-app")?.demo} target="_blank" rel="noreferrer">Try the live API project <FiArrowRight aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>

      <section className="connect-section" id="connect">
        <div className="page-shell connect-section__inner">
          <Reveal>
            <p className="eyebrow">Let’s connect</p>
            <h2>Have an idea, an opportunity or a thoughtful frontend challenge?</h2>
            <p>The verified public channels below are the best way to start a conversation.</p>
          </Reveal>
          <Reveal className="connect-section__actions" delay={90}>
            <Link className="button button--primary" to="/resume"><FiDownload /> View & download CV</Link>
            <Link className="button button--secondary" to="/projects">See my projects <FiArrowRight /></Link>
            <SocialLinks />
          </Reveal>
        </div>
      </section>

      <section className="github-section"><div className="page-shell"><Github /></div></section>
    </main>
  );
}

export default About;
