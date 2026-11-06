import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";
import Reveal from "../common/Reveal";

function FeaturedProject({ project, index }) {
  return (
    <Reveal as="article" className={`featured-project featured-project--${project.accent}`}>
      <div className="featured-project__visual">
        <ProjectVisual project={project} eager={index === 0} />
      </div>
      <div className="featured-project__content">
        <div className="featured-project__meta">
          <span>Featured · 0{index + 1}</span>
          <span>{project.status}</span>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h2>{project.name}</h2>
        <p>{project.shortSummary}</p>

        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 6).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            View Details <FiArrowUpRight aria-hidden="true" />
          </Link>
          {project.github && (
            <a className="icon-link" href={project.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> Repository
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default FeaturedProject;
