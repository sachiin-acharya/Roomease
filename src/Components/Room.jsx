import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { FaBed, FaCouch, FaUtensils, FaWhatsapp } from 'react-icons/fa'; // Import icons for bedroom, hall, and kitchen
import roomImage1 from '../assets/image3.jpg'; 
import roomImage2 from '../assets/room.jpg'; 
import roomImage3 from '../assets/room2.jpg'; 
import roomImage4 from '../assets/room4.jpg'; 
import roomImage5 from '../assets/room5.jpg'; 
import roomImage6 from '../assets/room6.jpg'; 

const Room = () => {
  const rooms = [
    { id: 1, name: 'Room 1', location: 'Chabahil', price: 'RS.10,000', size: '400 sq.ft', bedroom: 1, hall: 1, kitchen: 1, image: roomImage1 },
    { id: 2, name: 'Room 2', location: 'Lalitpur', price: 'RS.4500', size: '350 sq.ft', bedroom: 2, hall: 1, kitchen: 1, image: roomImage2 },
    { id: 3, name: 'Room 3', location: 'Bouddha', price: 'RS.8000', size: '500 sq.ft', bedroom: 1, hall: 1, kitchen: 1, image: roomImage3 },
    { id: 4, name: 'Room 4', location: 'New Baneshwor', price: 'RS.20,000', size: '420 sq.ft', bedroom: 3, hall: 1, kitchen: 1, image: roomImage4 },
    { id: 5, name: 'Room 5', location: 'New Road', price: 'RS.4800', size: '370 sq.ft', bedroom: 2, hall: 1, kitchen: 1, image: roomImage5 },
    { id: 6, name: 'Room 6', location: 'Tikathali', price: 'RS.50,000', size: '450 sq.ft', bedroom: 3, hall: 1, kitchen: 1, image: roomImage6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < rooms.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex items-center ml-40 mt-6">
      {/* Left arrow for navigation */}
      {currentIndex > 0 && (
        <IoIosArrowDropleft className="text-3xl cursor-pointer mr-4 hover:text-blue-500" onClick={handlePrev} />
      )}

      {/* Display four rooms at a time */}
      <div className="grid grid-cols-4 gap-8 w-full">
        {rooms.slice(currentIndex, currentIndex + 4).map((room) => (
          <div key={room.id} className="border rounded-lg shadow-md p-6">
            
            {/* 1st div - Room Image */}
            <div className="h-40 mb-4">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
            </div>

            {/* 2nd div - Room Details */}
            <hr />
            <div className="mb-4">
              <span className="block text-lg font-semibold">{room.name}</span>
              <span className="block text-gray-600 font-bold">Price: {room.price}</span>
              <span className="block text-gray-600">Location: {room.location}</span>
              <span className="block text-gray-600">Size: {room.size}</span>
              
              {/* Bedroom, Hall, and Kitchen details */}
              <div className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <FaBed className="text-gray-600" /> {/* Bedroom Icon */}
                  <span className="text-gray-600">{room.bedroom}</span>
                  <span className="text-gray-600 text-xs">Bedroom</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCouch className="text-gray-600" /> {/* Hall Icon */}
                  <span className="text-gray-600">{room.hall}</span>
                  <span className="text-gray-600 text-xs">Hall</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUtensils className="text-gray-600" /> {/* Kitchen Icon */}
                  <span className="text-gray-600">{room.kitchen}</span>
                  <span className="text-gray-600 text-xs">Kitchen</span>
                </div>
              </div>
            </div>
            <hr />

            {/* 3rd div - Action buttons */}
            <div className="flex justify-between mt-4">
              {/* View Details box */}
              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                View Details
              </div>
              
              {/* WhatsApp box */}
              <div className="bg-green-500 text-white text-sm py-2 px-4 rounded flex items-center hover:bg-green-700 cursor-pointer">
                <FaWhatsapp className="mr-2" /> {/* WhatsApp Icon */}
                
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Right arrow for navigation */}
      {currentIndex < rooms.length - 4 && (
        <IoIosArrowDropright className="text-3xl cursor-pointer ml-4 hover:text-blue-500" onClick={handleNext} />
      )}
    </div>
  );
};

export default Room;
