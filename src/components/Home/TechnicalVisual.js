import React from "react";
import { FiHeart, FiMousePointer, FiStar } from "react-icons/fi";

function TechnicalVisual() {
  return (
    <div className="creative-visual" aria-hidden="true">
      <span className="creative-visual__orb creative-visual__orb--blue" />
      <span className="creative-visual__orb creative-visual__orb--pink" />

      <div className="creative-window">
        <div className="creative-window__bar">
          <span />
          <span />
          <span />
          <small>idea → working app</small>
        </div>
        <div className="creative-window__canvas">
          <div className="idea-note">
            <FiStar />
            <span>Start with the feeling</span>
            <small>What should this experience make easier?</small>
          </div>

          <div className="interface-sketch">
            <div className="interface-sketch__nav">
              <i />
              <span />
              <span />
            </div>
            <div className="interface-sketch__eyebrow" />
            <div className="interface-sketch__title" />
            <div className="interface-sketch__line" />
            <div className="interface-sketch__line interface-sketch__line--short" />
            <div className="interface-sketch__cards">
              <span />
              <span />
            </div>
          </div>

          <div className="detail-chip detail-chip--cursor">
            <FiMousePointer />
            <span>Refine the details</span>
          </div>
          <div className="detail-chip detail-chip--heart">
            <FiHeart />
            <span>Make it feel good</span>
          </div>
        </div>
      </div>

      <div className="creative-visual__caption">
        <span>idea</span>
        <i />
        <strong>working app</strong>
      </div>
    </div>
  );
}

export default TechnicalVisual;
