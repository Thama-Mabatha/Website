import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCoffee, FiCompass, FiDownload, FiMonitor } from "react-icons/fi";
import PageIntro from "../common/PageIntro";
import SectionHeading from "../common/SectionHeading";
import SocialLinks from "../common/SocialLinks";
import Reveal from "../common/Reveal";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Github from "./Github";

const interests = [
  { icon: FiMonitor, label: "Gaming" },
  { icon: FiCoffee, label: "Cooking and trying new recipes" },
  { icon: FiCompass, label: "New and thrill-seeking experiences" },
];

function About() {
  return (
    <main className="about-page">
      <PageIntro
        eyebrow="About me"
        title="I love coming up with an idea, picturing how it could look, and then bringing it to life."
        description="Frontend development lets me combine creative thinking with the practical work of building something people can see, interact with and use."
      />

      <section className="about-story">
        <div className="page-shell about-story__grid">
          <Reveal>
            <p className="eyebrow">A little more about me</p>
            <h2>I’m happiest when an idea starts feeling real.</h2>
          </Reveal>
          <Reveal className="about-story__copy" delay={90}>
            <p>
              I enjoy coming up with ideas and imagining how they could look and work.
              But what I love just as much is actually building them and seeing
              everything come together.
            </p>
            <p>
              I’m also someone who enjoys refining things. Sometimes it’s a small
              visual detail, an interaction or just finding a better way to make
              something work. I like going back and improving things until I’m happy
              with the result.
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
