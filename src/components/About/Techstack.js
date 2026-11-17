import React from "react";
import {
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";
import { capabilityGroups } from "../../data/profile";
import Reveal from "../common/Reveal";

const technologyIcons = {
  JavaScript: SiJavascript,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  "C#": SiCsharp,
  ".NET": SiDotnet,
  SQL: SiMysql,
  Git: SiGit,
  "Git & GitHub": SiGithub,
  "VS Code": SiVisualstudiocode,
  Postman: SiPostman,
};

const groupIcons = {
  code: SiJavascript,
  database: SiMysql,
  tool: SiVisualstudiocode,
};

function Techstack() {
  return (
    <div className="capability-grid">
      {capabilityGroups.map((group, index) => {
        const Icon = groupIcons[group.icon];
        return (
          <Reveal as="article" className={`capability-card${index === 0 ? " capability-card--featured" : ""}`} delay={(index % 2) * 70} key={group.title}>
            <div className="capability-card__top"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
            <h3>{group.title}</h3>
            {group.description && <p>{group.description}</p>}
            <ul>{group.technologies.map((technology) => { const Icon = technologyIcons[technology]; return <li key={technology}>{Icon && <Icon aria-hidden="true" />}<span>{technology}</span></li>; })}</ul>
          </Reveal>
        );
      })}
    </div>
  );
}

export default Techstack;
