import React from "react";
import PageIntro from "../common/PageIntro";
import ProjectExplorer from "./ProjectExplorer";
import projects from "../../data/projects";

function Projects() {
  return (
    <main className="projects-page">
      <PageIntro
        eyebrow="Projects"
        title="Choose a project. See what I built and why."
        description="Browse the work without losing your place. Each project starts with the problem, my contribution and what the finished experience lets someone do."
        meta={<span>{projects.length} projects · select a name to explore</span>}
      />

      <section className="project-browser-section" aria-label="Project browser">
        <div className="page-shell">
          <ProjectExplorer projects={projects} />
        </div>
      </section>
    </main>
  );
}

export default Projects;
