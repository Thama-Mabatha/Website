import React from "react";
import PageIntro from "../common/PageIntro";
import SectionHeading from "../common/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCards";
import { additionalProjects, featuredProjects } from "../../data/projects";

function Projects() {
  return (
    <main className="projects-page">
      <PageIntro
        eyebrow="Projects"
        title="A few ideas I’ve loved bringing to life."
        description="From a mobile worship companion to language-aware moderation research, each project taught me something different about making software useful, clear and considerate."
        meta={<span>{featuredProjects.length + additionalProjects.length} projects · built with curiosity and care</span>}
      />

      <section className="featured-projects-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Products with a story behind them."
            description="Two current projects where the interface, the underlying system and the people using it all matter."
          />
          <div className="featured-projects-list">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="additional-projects-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="More projects"
            title="More ways I’ve learned by building."
            description="Earlier projects across frontend development, full-stack systems and applied machine learning."
          />
          <div className="additional-projects-grid">
            {additionalProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
