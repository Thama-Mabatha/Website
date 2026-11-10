import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";

function ProjectActions({ project }) {
  return (
    <div className="project-explorer__actions">
      <Link className="button button--primary" to={`/projects/${project.slug}`}>
        Read case study <FiArrowRight aria-hidden="true" />
      </Link>
      {project.demo && (
        <a className="project-explorer__external" href={project.demo} target="_blank" rel="noreferrer">
          Live demo <FiExternalLink aria-hidden="true" />
        </a>
      )}
      {project.github && (
        <a className="project-explorer__external" href={project.github} target="_blank" rel="noreferrer">
          Repository <FiGithub aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function ProjectStory({ project }) {
  return (
    <>
      <div className="project-explorer__story">
        <div>
          <span>Why I built it</span>
          <p>{project.whyBuilt}</p>
        </div>
        <div>
          <span>What I implemented</span>
          <p>{project.contribution}</p>
        </div>
        <div>
          <span>What you can do</span>
          <p>{project.canDo}</p>
        </div>
      </div>

      <div className="project-explorer__footer">
        <ul aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ProjectActions project={project} />
      </div>
    </>
  );
}

function DesktopPreview({ project, selectedIndex }) {
  return (
    <article
      className={`project-explorer__preview project-explorer__preview--${project.accent}`}
      id={`project-panel-${project.slug}`}
      role="tabpanel"
      aria-labelledby={`project-tab-${project.slug}`}
      tabIndex="0"
      key={project.slug}
    >
      <div className="project-explorer__visual">
        <ProjectVisual project={project} eager={selectedIndex === 0} />
      </div>
      <div className="project-explorer__content">
        <div className="project-explorer__meta">
          <span>{String(selectedIndex + 1).padStart(2, "0")} / 06</span>
          <span>{project.status}</span>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h2>{project.name}</h2>
        <p className="project-explorer__summary">{project.shortSummary}</p>
        <ProjectStory project={project} />
      </div>
    </article>
  );
}

function ProjectExplorer({ projects }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonRefs = useRef([]);
  const selectedProject = projects[selectedIndex];

  const selectProject = (index, focus = false) => {
    setSelectedIndex(index);
    if (focus) buttonRefs.current[index]?.focus();
  };

  const handleKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % projects.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projects.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectProject(nextIndex, true);
    }
  };

  return (
    <div className="project-explorer">
      <div className="project-explorer__desktop">
        <div className="project-explorer__list" role="tablist" aria-label="Choose a project">
          <p>Selected work</p>
          {projects.map((project, index) => (
            <button
              key={project.slug}
              ref={(element) => { buttonRefs.current[index] = element; }}
              id={`project-tab-${project.slug}`}
              className={selectedIndex === index ? "is-selected" : undefined}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-controls={`project-panel-${project.slug}`}
              tabIndex={selectedIndex === index ? 0 : -1}
              onClick={() => selectProject(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <small>{project.category}</small>
              <FiArrowRight aria-hidden="true" />
            </button>
          ))}
          <small className="project-explorer__hint">Use ↑ and ↓ to browse.</small>
        </div>

        <DesktopPreview project={selectedProject} selectedIndex={selectedIndex} />
      </div>

      <div className="project-explorer__mobile">
        {projects.map((project, index) => (
          <article className={`project-explorer__mobile-project project-explorer__mobile-project--${project.accent}`} key={project.slug}>
            <header>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{project.category}</small><h2>{project.name}</h2></div>
            </header>
            <ProjectVisual project={project} eager={index === 0} />
            <p className="project-explorer__summary">{project.shortSummary}</p>
            <ProjectStory project={project} />
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectExplorer;
