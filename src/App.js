import React from 'react';
import './App.css';
import Layout from './layout/layout';
import Products from './product/products';
import Waren from './layout/linknavbar/Waren';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/waren" element={<Waren />} />
      </Routes>
    </div>
  );
}
