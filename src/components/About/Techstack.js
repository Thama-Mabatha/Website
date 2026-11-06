import React from "react";
import {
  FiLayers,
  FiTerminal,
  FiTool,
} from "react-icons/fi";
import { capabilityGroups } from "../../data/profile";
import Reveal from "../common/Reveal";

const icons = {
  layers: FiLayers,
  terminal: FiTerminal,
  tool: FiTool,
};

function Techstack() {
  return (
    <div className="capability-grid">
      {capabilityGroups.map((group, index) => {
        const Icon = icons[group.icon];
        return (
          <Reveal as="article" className={`capability-card${index === 0 ? " capability-card--featured" : ""}`} delay={(index % 2) * 70} key={group.title}>
            <div className="capability-card__top"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </Reveal>
        );
      })}
    </div>
  );
}

export default Techstack;
