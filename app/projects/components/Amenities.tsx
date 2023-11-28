"use client";
import { useState, useEffect } from "react";
import { FaSwimmingPool } from "react-icons/fa";

const Amenities = () => {
  const amenities = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28,
  ];

  let [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias Amenities</h1>
      <div className="divider"></div>
      <div className="flex flex-wrap justify-center items-start gap-4">
        {amenities.slice(0, toggleShow ? amenities.length : 11).map((num) => {
          return (
            <div
              key={num}
              className="flex items-center justify-center flex-col"
            >
              <FaSwimmingPool className="text-2xl" />
              <h3 className="font-medium text-sm">Swimming Pool</h3>
            </div>
          );
        })}
        <button
          className="btn btn-primary"
          onClick={() => setToggleShow((prev) => !prev)}
        >
          {toggleShow ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Amenities;
