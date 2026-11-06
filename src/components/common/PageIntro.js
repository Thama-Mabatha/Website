import React from "react";

function PageIntro({ eyebrow, title, description, meta }) {
  return (
    <section className="page-intro">
      <div className="page-intro__shape page-intro__shape--blue" aria-hidden="true" />
      <div className="page-intro__shape page-intro__shape--pink" aria-hidden="true" />
      <div className="page-shell page-intro__inner reveal-on-load">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__description">{description}</p>
        {meta && <div className="page-intro__meta">{meta}</div>}
      </div>
    </section>
  );
}

export default PageIntro;
