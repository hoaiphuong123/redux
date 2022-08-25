import React from 'react';
import './Warenkorb.css';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../product/products';
import PropTypes from 'prop-types';
import { addProduct, decreaseQuantity, increaseQuantity, removeProduct } from '../../action/sliceproduct';

Products.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  total: PropTypes.number,
  quantity: PropTypes.number,
  price: PropTypes.number,
  onDelete: PropTypes.func,
};

export default function Warenw({ name, quantity, total, price, id, onDelete, onIncreaseQuantity, onDecreaseQuantity }) {
  const dispatch = useDispatch();
  const { checkout } = useSelector((state) => state.product);

  console.log('checkout', checkout);

  const IncreaseQuantityToCart = (productId) => {
    dispatch(increaseQuantity(productId));
    console.log('product1', productId);
  };

  const DecreaseQuantityToCart = (productId) => {
    dispatch(decreaseQuantity(productId));
    console.log('product2', productId);
  };
  return (
    <div className="yourcart">
      <h2> {name}</h2>
      <p style={{ marginLeft: '15px', marginTop: '25px' }}>${price} </p>
      <p style={{ marginLeft: '15px', marginTop: '25px' }}>x {quantity}</p>
      <article style={{ marginLeft: '15px', marginTop: '25px' }}>Total:{total}$</article>
      <button
        style={{ marginLeft: '15px', marginTop: '25px' }}
        onClick={() => {
          DecreaseQuantityToCart(id);
        }}
        className="cart-actions"
      >
        -
      </button>
      <button
        style={{ marginLeft: '15px', marginTop: '25px' }}
        onClick={() => {
          IncreaseQuantityToCart(id);
        }}
        className="cart-actions"
      >
        +
      </button>
      <button style={{ marginLeft: '15px', marginTop: '25px' }} onClick={onDelete} className="cart-actions">
        remove
      </button>
    </div>
  );
}
