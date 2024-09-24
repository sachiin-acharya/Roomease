import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        {/* Footer section 1 */}
        <div>
          <h2 className="text-xl font-bold">About RoomEase</h2>
          <p className="text-sm mt-2">RoomEase is the ultimate platform for finding and renting rooms online.</p>
        </div>

        {/* Footer section 2 */}
        <div>
          <h2 className="text-xl font-bold">Legals</h2>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Footer section 3 */}
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <MdFacebook size={24} />
            <FaInstagram size={24} />
            <IoLogoTiktok size={24} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        &copy; 2024 RoomEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
