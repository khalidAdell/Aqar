import Image from "next/image";
import React from "react";

const SinglePropertyPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-4xl">
          <div className="md:flex">
            <div className="md:flex-1">
              <Image
                className="h-full w-full object-cover md:w-full"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property"
                width={500}
                height={800}
              />
            </div>
            <div className="p-8 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">For Sale</span>
                <span className="text-sm text-gray-500">ID: #12345</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                Property Title
              </h2>
              <p className="mt-2 text-gray-500">Location, City, Country</p>
              <div className="mt-4">
                <span className="text-gray-500">Price:</span>{" "}
                <span className="text-lg font-semibold">$500,000</span>
              </div>
              <div className="mt-4">
                <h4 className="text-gray-600 font-semibold">
                  Property Details:
                </h4>
                <ul className="mt-2 text-gray-500">
                  <li>Bedrooms: 4</li>
                  <li>Bathrooms: 3</li>
                  <li>Area: 2000 sqft</li>
                  <li>Garage: 2</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-gray-600 font-semibold">Description:</h4>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent aliquam elementum elit, vitae hendrerit tellus
                  iaculis id. Fusce lacinia felis sit amet pulvinar feugiat.
                  Nulla vel imperdiet magna. Integer vel pulvinar risus, vitae
                  ultrices augue.
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
