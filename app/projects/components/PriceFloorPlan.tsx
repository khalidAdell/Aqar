"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PriceFloorPlan = () => {
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  const [activeArea, setActiveArea] = useState(1);
  const handleArea = (index: number) => {
    setActiveArea(index);
  };

  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias Price & Floor Plan</h1>
      <div className="divider"></div>
      <div className="flex gap-2">
        <button
          className={`border py-3 px-4 text-sm font-medium ${
            activeButton === 0
              ? "bg-white text-primary shadow-lg"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => handleButtonClick(0)}
        >
          4 BHK Apartment
        </button>
        <button
          className={`border py-3 px-4 text-sm font-medium ${
            activeButton === 1
              ? "bg-white text-primary shadow-lg"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          4.5 BHK Apartment
        </button>
      </div>
      <div className="mt-6 flex gap-4">
        <span
          onClick={() => handleArea(0)}
          className={`font-medium cursor-pointer ${
            activeArea === 0 &&
            "text-primary before:absolute before:left-0 before:right-0 before:bottom-[-0.5rem] before:h-[2px] before:bg-primary relative"
          }`}
        >
          6000.00 SQ.FT
        </span>
        <span
          onClick={() => handleArea(1)}
          className={`font-medium cursor-pointer ${
            activeArea === 1 &&
            "text-primary before:absolute before:left-0 before:right-0 before:bottom-[-0.5rem] before:h-[2px] before:bg-primary relative"
          }`}
        >
          6200.00 SQ.FT
        </span>
      </div>
      <div className="divider mt-0"></div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-base md:text-lg font-medium text-gray-500">
              4.5 BHK
            </p>
            <p className="text-sm md:text-base">
              Builtup Area : 5575.00 sq.ft at ₹6.5K per sq.ft
            </p>
          </div>
          <p className="font-medium text-base md:text-lg">₹ 24 Cr</p>
        </div>
        <Image
          src="/images/floorPlan.jpg"
          width={800}
          height={900}
          alt="floor image"
          priority={false}
          className="my-6 w-full max-w-2xl h-auto"
        />
        <div className="text-center">
          <Link className="btn btn-primary text-lg text-white" href="/">
            Contact Sellers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceFloorPlan;
