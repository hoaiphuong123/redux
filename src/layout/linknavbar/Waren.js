import React from 'react';
import './Warenkorb.css';
import { useDispatch, useSelector } from 'react-redux';
import Warenw from './Warenw';
import { addProduct, decreaseQuantity, increaseQuantity, removeProduct } from '../../action/sliceproduct';
import PropTypes from 'prop-types';

export default function Waren() {
  const dispatch = useDispatch();

  const itemsList = useSelector((state) => state.product.checkout.cart);
  let totals = 0;
  itemsList.forEach(myFunction);
  function myFunction(item) {
    totals += item.price * item.quantity;
    console.log('myFunction', totals);
  }

  const handleDeleteCart = () => {
    dispatch(removeProduct());
  };
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id}>
            <Warenw quantity={item.quantity} id={item.id} price={item.price} name={item.name} total={item.price * item.quantity} onDelete={handleDeleteCart} />
          </li>
        ))}
        <div className="total-price">
          <h3>SubTotal: {totals}$</h3>
        </div>
      </ul>
    </div>
  );
}
