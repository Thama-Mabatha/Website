import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";
import Reveal from "../common/Reveal";
import { getProjectBySlug } from "../../data/projects";

function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className={`case-study case-study--${project.accent || "blue"}`}>
      <section className="case-study__hero">
        <div className="page-shell">
          <Link className="back-link" to="/projects">
            <FiArrowLeft aria-hidden="true" /> All projects
          </Link>
          <div className="case-study__heading reveal-on-load">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1>{project.name}</h1>
              <p>{project.shortSummary}</p>
            </div>
            <dl className="project-facts">
              <div><dt>Status</dt><dd>{project.status}</dd></div>
              <div><dt>Context</dt><dd>{project.ownership}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-study__visual-section">
        <div className="page-shell"><ProjectVisual project={project} eager /></div>
        {project.gallery && (
          <div className="page-shell case-study__gallery" aria-label={`${project.name} screenshots`}>
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        )}
      </section>

      <section className="case-study__body">
        <div className="page-shell case-study__layout">
          <div className="case-study__content">
            <Reveal as="section" className="case-study__essentials">
              <div><p className="eyebrow">Why I built it</p><p>{project.whyBuilt}</p></div>
              <div><p className="eyebrow">What I implemented</p><p>{project.contribution}</p></div>
              <div><p className="eyebrow">What you can do</p><p>{project.canDo}</p></div>
            </Reveal>

            <Reveal as="section">
              <p className="eyebrow">The idea</p>
              <h2>How the idea came together</h2>
              <p>{project.overview}</p>
            </Reveal>

            <Reveal as="section" className="case-study__two-column">
              <div><p className="eyebrow">The problem</p><h2>What needed solving</h2><p>{project.challenge}</p></div>
              <div><p className="eyebrow">The approach</p><h2>How it works</h2><p>{project.solution}</p></div>
            </Reveal>

            <Reveal as="section">
              <p className="eyebrow">Under the surface</p>
              <h2>A simple system view</h2>
              <ol className="architecture-list">
                {project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
              </ol>
            </Reveal>

            <Reveal as="section">
              <p className="eyebrow">What it can do</p>
              <h2>Main features</h2>
              <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </Reveal>

            <Reveal as="section" className="case-study__two-column case-study__closing">
              <div><p className="eyebrow">Today</p><h2>Where it stands</h2><p>{project.outcome}</p></div>
              <div><p className="eyebrow">Reflection</p><h2>What I learned</h2><p>{project.lessons}</p></div>
            </Reveal>
          </div>

          <aside className="case-study__aside">
            <p className="eyebrow">Built with</p>
            <ul className="case-study__stack">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="case-study__external">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> View repository</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Open live demo</a>}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default ProjectCaseStudy;
