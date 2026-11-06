import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiGithub } from "react-icons/fi";
import Reveal from "../common/Reveal";

function Github() {
  return (
    <Reveal className="github-panel">
      <div className="github-panel__heading">
        <div><p className="eyebrow">GitHub activity</p><h2>Learning and building in public.</h2></div>
        <a href="https://github.com/Thama-Mabatha" target="_blank" rel="noreferrer"><FiGithub /> @Thama-Mabatha</a>
      </div>
      <div className="github-panel__calendar">
        <GitHubCalendar username="Thama-Mabatha" blockSize={13} blockMargin={5} color="#8cb8e8" fontSize={13} />
      </div>
      <p className="github-panel__note">Contribution data is loaded from GitHub and may be unavailable when the service or network is offline.</p>
    </Reveal>
  );
}

export default Github;
