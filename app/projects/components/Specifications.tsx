"use client";

import { useState } from "react";

const Specifications = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    handleContent(index);
  };
  const data = [
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "floor",
      type: "floor&counter",
    },
    {
      title: "Living/Dining",
      type: "fitting",
    },
    {
      title: "Exterior",
      type: "wall&ceiling",
    },
  ];

  const init = [
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "Electrical",
      type: "all",
    },
    {
      title: "Electrical",
      type: "all",
    },
  ];
  let [content, setContent] = useState(init);

  const handleContent = (index: number) => {
    switch (index) {
      case 0:
        return setContent(() => data.filter((ele) => ele.type === "all"));
      case 1:
        return setContent(() =>
          data.filter((ele) => ele.type === "floor&counter")
        );
      case 2:
        return setContent(() => data.filter((ele) => ele.type === "fitting"));
      case 3:
        return setContent(() =>
          data.filter((ele) => ele.type === "wall&ceiling")
        );
      default:
        return setContent(() => data.filter((ele) => ele.type === "all"));
    }
  };
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias Specifications</h1>
      <div className="divider"></div>
      <div className="flex gap-2">
        <button
          className={`border py-2 px-3 rounded-xl text-sm font-medium ${
            activeButton === 0 ? "bg-primary bg-opacity-20 text-primary" : ""
          }`}
          onClick={() => handleButtonClick(0)}
        >
          All
        </button>
        <button
          className={`border py-2 px-3 rounded-xl text-sm font-medium ${
            activeButton === 1 ? "bg-primary bg-opacity-20 text-primary" : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Floor & Counter
        </button>
        <button
          className={`border py-2 px-3 rounded-xl text-sm font-medium ${
            activeButton === 2 ? "bg-primary bg-opacity-20 text-primary" : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Fitting
        </button>
        <button
          className={`border py-2 px-3 rounded-xl text-sm font-medium ${
            activeButton === 3 ? "bg-primary bg-opacity-20 text-primary" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Wall & Ceiling
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {content.map((ele, index) => (
          <div key={index}>
            <h3 className="text-sm text-gray-500">{ele.title}</h3>
            <p className="text-sm">Concealed copper wiring</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
