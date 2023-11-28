"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Property {
  id: number;
  type: string;
  price: number;
  rooms: number;
  baths: number;
  location: string;
}

interface Filter {
  type: string;
  price: string;
  rooms: string;
  baths: string;
  location: string;
}

const FilterMenu = () => {
  const [filter, setFilter] = useState<Filter>({
    type: "",
    price: "",
    rooms: "",
    baths: "",
    location: "",
  });

  const handleFilterChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFilterSubmit} className="space-y-4">
        <div className="flex items-center">
          <label className="mr-2">Type:</label>
          <select
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          >
            <option value="">All</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div className="flex items-center">
          <label className="mr-2">Price:</label>
          <input
            type="number"
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Rooms:</label>
          <input
            type="number"
            name="rooms"
            value={filter.rooms}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Baths:</label>
          <input
            type="number"
            name="baths"
            value={filter.baths}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Location:</label>
          <input
            type="text"
            name="location"
            value={filter.location}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterMenu;
