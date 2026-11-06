import React from "react";
import { FiEye, FiLayers, FiSliders } from "react-icons/fi";
import Reveal from "../common/Reveal";

const approach = [
  {
    icon: FiEye,
    number: "01",
    title: "Understand the real need",
    text: "I like learning what someone wants from an application and what should feel easier when they use it.",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Shape the whole experience",
    text: "I think beyond the first requirement—how the flow connects, what information matters and where a small improvement could help.",
  },
  {
    icon: FiSliders,
    number: "03",
    title: "Refine the small details",
    text: "Spacing, wording, feedback and responsive behaviour all influence whether a product simply works or feels considered.",
  },
];

function AboutCard() {
  return (
    <div className="approach-grid">
      {approach.map(({ icon: Icon, number, title, text }, index) => (
        <Reveal as="article" className="approach-card" delay={index * 90} key={title}>
          <div className="approach-card__top"><Icon aria-hidden="true" /><span>{number}</span></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default AboutCard;
