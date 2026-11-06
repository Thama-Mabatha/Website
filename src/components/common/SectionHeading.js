import React from "react";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}

export default SectionHeading;
