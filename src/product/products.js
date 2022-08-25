import React from 'react';
import Product from './product';
import './products.css';

const dataSp = [
  { id: '0', name: 'sản phẩm 1', price: 100 },
  { id: '1', name: 'sản phẩm 2', price: 100 },
  { id: '2', name: 'sản phẩm 3', price: 150 },
  { id: '3', name: 'sản phẩm 4', price: 100 },
  { id: '4', name: 'sản phẩm 5', price: 160 },
  { id: '5', name: 'sản phẩm 6', price: 100 },
  { id: '6', name: 'sản phẩm 7', price: 170 },
  { id: '7', name: 'sản phẩm 8', price: 180 },
  { id: '8', name: 'sản phẩm 9', price: 130 },
  { id: '9', name: 'sản phẩm 10', price: 180 },
];

export default function Products() {
  return (
    <div>
      <div className="App-header">
        <h1>Product Portfolio</h1>
      </div>
      <div className="rowSp">
        {dataSp.map((item, index) => (
          <div className="box" key={index}>
            <Product id={item.id} name={item.name} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
