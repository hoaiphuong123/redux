import React, { useState } from 'react';
import './main.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkProduct, onBackStep, onNextStep, decreaseQuantity, increaseQuantity, addData } from '../action/sliceproduct';

export default function Main() {
  const [product, setProduct] = useState('');

  const handleAdd = (e) => {
    setProduct(e.target.value);
  };
  const changeAdd = (e) => {
    e.preventDefault();
    console.log(product);
    alert('success');
  };
  const dispatch = useDispatch();
  const { checkout } = useSelector((state) => state.product);

  return (
    <div className="box">
      <form onSubmit={changeAdd}>
        <h1 className="title"> </h1>
        <h4>Price: $</h4>
        <p className="contextproduc">Giỏ hàng đã thêm 1 sản phẩm</p>
        <input value={product} type="number" onChange={handleAdd} />
        <button type="submit" value="submit" className="btn btn-success">
          Add to Korb
        </button>
      </form>
    </div>
  );
}
