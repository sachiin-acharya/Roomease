import React, { useState } from 'react';
import DescriptionBox from '../Components/PropertyDescriptionBox';
import { FaImage } from 'react-icons/fa'; // For the gallery icon


const PostRoom = () => {
  const [propertyType, setPropertyType] = useState('');
  const [amenities, setAmenities] = useState({
    balcony: false,
    cctv: false,
    fencing: false,
    parking: false,
    waterTank: false,
    waterWell: false,
    wifi: false,
  });
  const [thumbnail, setThumbnail] = useState(null); // State for the thumbnail

  // Handler for changing the property type
  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  // Handler for changing amenities
  const handleAmenityChange = (event) => {
    const { name, checked } = event.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  };

  // Handler for uploading the thumbnail
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file)); // Preview the image
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Post Your Room</h1>
      <form>
        {/* Property Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Property Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Property Title"
            required
          />
        </div>

        {/* Property Type Field (Radio Buttons) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Property Type <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            <div>
              <input
                type="radio"
                id="flat"
                name="propertyType"
                value="flat"
                className="mr-2 focus:ring-blue-500"
                onChange={handlePropertyTypeChange}
                required
              />
              <label htmlFor="flat" className="text-gray-700">Flat</label>
            </div>
            <div>
              <input
                type="radio"
                id="room"
                name="propertyType"
                value="room"
                className="mr-2 focus:ring-blue-500"
                onChange={handlePropertyTypeChange}
                required
              />
              <label htmlFor="room" className="text-gray-700">Room</label>
            </div>
          </div>
        </div>

        {/* Conditional Rendering for Property Categories */}
        {propertyType === 'flat' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Flat Category <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select BHK</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
            </select>
          </div>
        )}

        {propertyType === 'room' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Room Category <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Room Type</option>
              <option value="single">Single Room</option>
              <option value="with-kitchen">With Kitchen</option>
              <option value="2-rooms">2 Rooms</option>
            </select>
          </div>
        )}

        {/* Address, Area, and City Fields in a Row */}
        <div className="flex space-x-4 mb-4">
          {/* Address Input */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Street Name"
              required
            />
          </div>

          {/* Area Input */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Area <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Area"
              required
            />
          </div>

          {/* City Input */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter City"
              required
            />
          </div>
        </div>

        {/* Amenities (Checkboxes for Multiple Selection in 4 Columns) */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amenities 
          </label>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <input
                type="checkbox"
                id="balcony"
                name="balcony"
                checked={amenities.balcony}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="balcony" className="text-gray-700">Balcony</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="cctv"
                name="cctv"
                checked={amenities.cctv}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="cctv" className="text-gray-700">CCTV</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fencing"
                name="fencing"
                checked={amenities.fencing}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="fencing" className="text-gray-700">Fencing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="parking"
                name="parking"
                checked={amenities.parking}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="parking" className="text-gray-700">Parking</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="waterTank"
                name="waterTank"
                checked={amenities.waterTank}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="waterTank" className="text-gray-700">Water Tank</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="waterWell"
                name="waterWell"
                checked={amenities.waterWell}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="waterWell" className="text-gray-700">Water Well</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="wifi"
                name="wifi"
                checked={amenities.wifi}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor="wifi" className="text-gray-700">Wifi</label>
            </div>
          </div>
        </div>

        {/* Thumbnail Upload Box */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Thumbnail <span className="text-red-500">*</span>
          </label>
          <div
            className="w-36 h-36 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer relative"
            onClick={() => document.getElementById('thumbnailInput').click()}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt="Thumbnail preview"
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
            ) : (
              <FaImage className="text-4xl text-gray-400" />
            )}
            <input
              type="file"
              id="thumbnailInput"
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailChange}
              required
            />
          </div>
        </div>

        {/* Upload Image */}
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Upload Image <span className="text-red-500">*</span>
  </label>
  <div
    className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer relative"
    onClick={() => document.getElementById('thumbnailInput').click()}
  >
    {thumbnail ? (
      <img
        src={thumbnail}
        alt="Thumbnail preview"
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />
    ) : (
      <>
        <FaImage className="text-4xl text-gray-400" />
        <p className="text-gray-600 mt-2">Click or drag file to this area to upload</p>
      </>
    )}
    <input
      type="file"
      id="thumbnailInput"
      accept="image/*"
      className="hidden"
      onChange={handleThumbnailChange}
      required
    />
  </div>
</div>


{/* Upload 360 image */}
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">
  Implementation of 360 view of a room  <span className="text-red-500">*</span>
  </label>
  <div
    className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer relative"
    onClick={() => document.getElementById('thumbnailInput').click()}
  >
    {thumbnail ? (
      <img
        src={thumbnail}
        alt="Thumbnail preview"
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />
    ) : (
      <>
        <FaImage className="text-4xl text-gray-400" />
        <p className="text-gray-600 mt-2">Click or drag file to this area to upload</p>
      </>
    )}
    <input
      type="file"
      id="thumbnailInput"
      accept="image/*"
      className="hidden"
      onChange={handleThumbnailChange}
      required
    />
  </div>
  <p className='text-sm text-gray-600 mt-2 '>please upload multiple images atleast 7 overlapping images (atleast 30%) of a room from a single point of view</p>
</div>

    <div >
      <p className='block text-sm font-medium text-gray-700 mb-2'>Property Description</p>
      <DescriptionBox/>
      </div>




      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Property Price"
            required
          />
        </div>




 {/* Owner name, Email, and Number Fields in a Row */}

 <div className="flex space-x-4 mb-4">
          {/* Name */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Owner Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter  Name"
              required
            />
          </div>

          {/* Email */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Owner Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* City Input */}
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Owner Number<span className="text-red-500">*</span>
            </label>
            <input
              type="Phone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter  number"
              required
            />
          </div>
        </div>


        <p className=' text-sm'>This site is protected by reCAPTCHA  and the Google Privacy Policy and Terms of Service appply</p>



        {/* Submit Button */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-11 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default PostRoom;
