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
          <small>selected work · 01 / 03</small>
        </div>
        <div className="creative-window__canvas">
          <div className="idea-note">
            <FiStar />
            <span>Nyimbo dza Vhatendi</span>
            <small>Offline-first hymnal and personal sermon notes</small>
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
            <span>GBV Detection</span>
          </div>
          <div className="detail-chip detail-chip--heart">
            <FiHeart />
            <span>QuickKart</span>
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
