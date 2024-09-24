import React from 'react';
import Room from '../Components/Room';

const Rent = () => {
  return (
    <>
      {/* Filters Section */}
      <div className="bg-white mt-8 p-6 rounded-md mb-8 flex flex-wrap gap-4 justify-evenly px-5 py-4">
        {/* Property Type Dropdown */}
        <div className="w-36">
          <select
            id="propertyType"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Property Type"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="Room">Room</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        {/* Location Input */}
        <div className="w-36">
          <input
            type="text"
            id="location"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Location"
          />
        </div>

        {/* Price Range Dropdown */}
        <div className="w-36">
          <select
            id="priceRange"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Price Range"
          >
            <option value="">Price Range</option>
            <option value="Rs.5000">Rs.5000</option>
            <option value=" Rs.8000">Rs.8000</option>
            <option value="Rs.10,000">Rs.10,000</option>
            <option value="aRs.15,000">Rs.15,000</option>
            <option value="Rs.20,000">Rs.20,000</option>
            <option value="Rs.30,000">Rs.30,000</option>
          </select>
        </div>

        {/* More Filters Input */}
        <div className="w-36">
          <input
            type="text"
            id="more"
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="More Filters"
          />
        </div>
      </div>

      {/* Properties Section */}
      <div className="px-5 py-4 mt-32">
        <h1 className="text-xl font-bold mb-8 ml-40">Properties for Rent in Nepal</h1>
        <Room />
      </div>
    </>
  );
};

export default Rent;
