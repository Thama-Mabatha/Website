import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";
import Reveal from "../common/Reveal";

function ProjectCard({ project, index = 0 }) {
  return (
    <Reveal as="article" className={`project-card-modern project-card-modern--${project.accent}`} delay={(index % 2) * 90}>
      <ProjectVisual project={project} />
      <div className="project-card-modern__body">
        <div className="project-card-modern__meta">
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.shortSummary}</p>
        <ul className="tag-list tag-list--small">
          {project.stack.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card-modern__links">
          <Link to={`/projects/${project.slug}`} aria-label={`View ${project.name} details`}>
            View Details <FiArrowUpRight aria-hidden="true" />
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
              <FiGithub aria-hidden="true" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCard;
