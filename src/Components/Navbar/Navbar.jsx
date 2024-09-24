import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Button from "../Button";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white shadow-md flex justify-between items-center py-6 px-6 lg:px-14 xl:px-40">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-28 mr-2" />
      </div>

      {/* Center Nav Links */}
      <div className="flex space-x-8">
        <Link to="/">Home</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/PostRoom">PostRoom</Link>

        <span>About Us</span>
      </div>

      {/* Right Side Icons */}
      <div className="flex space-x-6 items-center">
        <div className="relative flex items-center" style={{ width: "200px" }}>
          <div className="relative flex items-center w-full bg-white shadow-sm">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 outline-none rounded-l-md w-full transition-all duration-300"
                autoFocus
              />
            )}
            <IoIosSearch
              className="text-2xl cursor-pointer absolute right-2"
              onClick={toggleSearch}
            />
          </div>
        </div>
        <IoNotificationsOutline className="text-2xl ml-10" />
        <CgProfile className="text-2xl ml-4" />
        <Link to="/signin">
          <Button text="Sign In" className="ml-4 mt-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
