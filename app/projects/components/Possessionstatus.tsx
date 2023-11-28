"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
let data = [1, 1, 1, 2, 2, 2, 3, 3, 3];

const Possessionstatus = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [projects, setProjects] = useState(data);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    setProjects(() => data.filter((ele) => ele === index));
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4 flex-wrap">
        <h3>Possession status:</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleButtonClick(1)}
            className={`border py-2 px-3 rounded-xl text-sm font-medium hover:bg-primary hover:bg-opacity-20 hover:text-primary transition ${
              activeButton === 1 ? "bg-primary bg-opacity-20 text-primary" : ""
            }`}
          >
            Ready to Move
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={`border py-2 px-3 rounded-xl text-sm font-medium hover:bg-primary hover:bg-opacity-20 hover:text-primary transition ${
              activeButton === 2 ? "bg-primary bg-opacity-20 text-primary" : ""
            }`}
          >
            In 3 years
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className={`border py-2 px-3 rounded-xl text-sm font-medium hover:bg-primary hover:bg-opacity-20 hover:text-primary transition ${
              activeButton === 3 ? "bg-primary bg-opacity-20 text-primary" : ""
            }`}
          >
            Beyond 3 years
          </button>
        </div>
      </div>
      <div className="mt-4">
        {projects.map((project, index) => (
          <ProjectCard num={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Possessionstatus;
