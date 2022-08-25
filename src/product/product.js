import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, CheckoutProduct, removeProduct, increaseQuantity, decreaseQuantity } from '../action/sliceproduct';
import './products.css';
import PropTypes from 'prop-types';
import Products from './products';

Products.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
};

const Product = ({ id, name, price }) => {
  const { products, checkout } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addProduct(item));
    alert(`Succcesss to cart: ${item.name}`);
  };
  return (
    <div className="card">
      <h2 style={{ marginLeft: '15px' }}>{name}</h2>
      <p style={{ marginLeft: '15px', marginTop: '25px' }}> {price} $</p>
      <button
        style={{ marginLeft: '15px' }}
        onClick={() => {
          addToCart({ id, name, price });
        }}
        className="btn btn-outline-primary"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
