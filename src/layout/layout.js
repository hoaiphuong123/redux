import React from 'react';
import { NavLink } from 'react-router-dom';
import './layout.css';

export default function layout() {
  return (
    <div>
      <nav className="topnav">
        <NavLink style={{ textDecoration: 'none' }} to="/product">
          Products
        </NavLink>
        <NavLink style={{ textDecoration: 'none', marginLeft: '15px' }} to="/Waren">
          My-Cart
        </NavLink>
      </nav>
    </div>
  );
}
