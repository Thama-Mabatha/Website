import React from "react";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { profile } from "../../data/profile";

const items = [
  { label: "GitHub", href: profile.links.github, icon: FiGithub },
  { label: "LinkedIn", href: profile.links.linkedin, icon: FiLinkedin },
];

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      {items.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">
          <Icon aria-hidden="true" />
          <span>{label}</span>
          {!compact && <FiExternalLink aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
