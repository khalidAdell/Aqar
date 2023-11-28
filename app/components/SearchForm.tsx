"use client";

import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

const SearchForm: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number>(0);

  const handlePriceRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseInt(event.target.value, 10));
  };

  return (
    <div className="bg-[#816bffd8] pt-4 pb-6 rounded-b-2xl px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="location"
              className="block text-white font-bold mb-2"
            >
              Location
            </label>
            <input
              autoComplete="off"
              placeholder="Search for locality, landmark or project"
              type="text"
              id="location"
              className="w-full bg-white rounded-lg py-2 px-3 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="propertyType"
              className="block text-white font-bold mb-2"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              className="w-full bg-white rounded-lg py-2 px-3 focus:outline-none"
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <label
              htmlFor="priceRange"
              className="block text-white font-bold mb-2"
            >
              Price Range
            </label>
            <input
              type="range"
              id="priceRange"
              min="10000"
              max="1000000"
              step="1000"
              className="w-full range range-xs range-primary"
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
            <span className="text-white text-base font-bold mt-2">
              ${priceRange}
            </span>
          </div>
          <div>
            <label htmlFor="rooms" className="block text-white font-bold mb-2">
              Rooms
            </label>
            <input
              placeholder="Bedrooms"
              type="number"
              id="rooms"
              className="w-full bg-white rounded-lg py-2 px-3 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="baths" className="block text-white font-bold mb-2">
              Baths
            </label>
            <input
              placeholder="Bath"
              type="number"
              id="baths"
              className="w-full bg-white rounded-lg py-2 px-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/search/list"
            className="bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 rounded"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
