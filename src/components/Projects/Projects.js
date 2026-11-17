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
