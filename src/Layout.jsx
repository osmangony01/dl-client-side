import { jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;