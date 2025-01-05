import React from 'react';

// Needed to allow layout to apply to pages you desired
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
        {/* Components you want on many pages (e.g. <Navbar />) */}
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout