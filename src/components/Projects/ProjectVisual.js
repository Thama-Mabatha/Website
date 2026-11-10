import React from "react";
import { FiBookOpen, FiHeart, FiSearch } from "react-icons/fi";

function HymnalVisual() {
  return (
    <div className="product-illustration hymnal-illustration" role="img" aria-label="Illustration of the Nyimbo dza Vhatendi hymnal application">
      <span className="product-illustration__label">Interface illustration · local source</span>
      <div className="hymnal-phone">
        <div className="hymnal-phone__top">
          <span className="hymnal-mark">N</span>
          <div><strong>Nyimbo dza</strong><small>Vhatendi</small></div>
        </div>
        <p className="hymnal-kicker">A personal worship companion</p>
        <h3>Hymns close at hand.</h3>
        <div className="hymnal-search"><FiSearch /><span>Search hymn number or words…</span></div>
        <div className="hymnal-actions">
          <span><FiBookOpen /> Find a hymn</span>
          <span><FiHeart /> Favourites</span>
        </div>
        <div className="hymnal-row"><i>65</i><span><strong>Hymn title</strong><small>Ready offline</small></span></div>
        <div className="hymnal-row"><i>94</i><span><strong>Recent hymn</strong><small>Continue reading</small></span></div>
      </div>
      <div className="hymnal-note-card"><span>private notes</span><strong>Scripture · topic · hymn</strong></div>
    </div>
  );
}

function MachineLearningVisual() {
  return (
    <div className="product-illustration ml-illustration" role="img" aria-label="Illustrative lead conversion model workflow">
      <span className="product-illustration__label">Visual motif · not project results</span>
      <div className="ml-card">
        <div className="ml-card__top"><strong>Model comparison</strong><small>classification workflow</small></div>
        <div className="ml-bars" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="ml-legend"><span>CatBoost</span><span>Random Forest</span><span>XGBoost</span><span>Ensemble</span></div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, eager = false }) {
  if (project.visual === "hymnal") return <HymnalVisual />;
  if (project.visual === "ml") return <MachineLearningVisual />;

  return (
    <div className={`project-visual project-visual--image project-visual--${project.accent || "blue"}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

export default ProjectVisual;
