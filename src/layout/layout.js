import React from 'react';
import { Link } from 'react-router-dom';
import Warenkorb from '../layout/linknavbar/Warenkorb.js';

export default function Navlink() {
  return (
    <nav className="topnav">
      <Link style={{ textDecoration: 'none' }} to="/">
        Products
      </Link>
      <Link style={{ textDecoration: 'none', marginLeft: '15px' }} to="/main">
        Main
      </Link>
      <div>
        <Warenkorb />
      </div>
    </nav>
  );
}
