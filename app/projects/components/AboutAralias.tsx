"use client";
import { useState } from "react";

const AboutAralias = () => {
  const content =
    "Situated in Gurgaon at Sector 42, The Aralias is a residentialdevelopment launched by DLF. This project is under construction withpossession scheduled in possession on Oct 09. This project provides avast range of amenities including Club House, Car Parking, Others,Children&apos;s play area, Gymnasium. Prominent suburbs of Gurgaon areclose by and with several schools, hospitals, banks and officessituated in the proximity, the project is a preferred choice for homeseekers";
  let [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">About DLF The Aralias</h1>
      <div className="divider"></div>
      <p className="text-gray-600">
        <span>{content.slice(0, toggleShow ? content.length : 350)}</span>
        {content.length > 350 && (
          <span
            className="cursor-pointer text-primary font-medium"
            onClick={() => setToggleShow((prev) => !prev)}
          >
            ...Show {toggleShow ? "Less" : "More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default AboutAralias;
