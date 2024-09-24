import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Content to switch based on route */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
