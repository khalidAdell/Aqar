"use client";

import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ProjectProperties = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [projects, setProjects] = useState(data);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl" ref={divRef}>
      <h1 className="text-xl font-bold">Properties In This Project</h1>
      <div className="divider"></div>
      <div>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleButtonClick(1)}
            className={`font-semibold cursor-pointer text-lg px-2 mx-2 transition ${
              activeButton === 1 &&
              "text-primary before:absolute before:left-0 before:right-0 before:bottom-[-0.5rem] before:h-[2px] before:bg-primary relative"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={`font-semibold cursor-pointer text-lg px-2 mx-2 transition ${
              activeButton === 2 &&
              "text-primary before:absolute before:left-0 before:right-0 before:bottom-[-0.5rem] before:h-[2px] before:bg-primary relative"
            }`}
          >
            Rent
          </button>
        </div>
        <div className="divider mt-0"></div>

        <div className="mt-4">
          {projects.map((project, index) => (
            <ProjectCard num={project} key={index} />
          ))}
        </div>
      </div>
      <Pagination elements={data} setElements={setProjects} divRef={divRef} />
    </div>
  );
};

export default ProjectProperties;
