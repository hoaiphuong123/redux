import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Index } from '../product/products.js';
import { toast } from 'react-toastify';
import { addCount } from '../action/action.js';
import 'react-toastify/dist/ReactToastify.css';
import './main.css';

toast.configure();
export function Main(Props) {
  const [i, setI] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setI(Index);
  }, []);

  const total = (event) => {
    if (event.target.value < 0) return;
    setQuantity(event.target.value);
  };

  function addToKorb(object, menge, prix, idx) {
    if (menge === 0) {
      return;
    }
    Props.products[idx].quantity.push(menge);
    const x = menge * prix;
    Props.products[idx].total.push(x);
    Props.totalToPay.push(x);
    Props.warenListe.push(object);
    // Notification //
    toast.success('Product added to your Korb', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
  }

  return (
    <div className="box">
      <h1 className="title">{Props.products[i].name}</h1>
      <h4>Price: {Props.products[i].price} $</h4>
      <p className="contextproduc">Giỏ hàng đã thêm 1 sản phẩm</p>
      <input value={quantity} type="number" onChange={total}></input>
      <button type="button" className="btn btn-success" onClick={() => addToKorb(Props.products[i], quantity, Props.products[i].price, i)}>
        Add to Korb
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    warenListe: state.warenListe,
    totalToPay: state.totalToPay,
    count: state.count,
  };
};
const dispatchtoProps = (dispatch) => {
  return {
    addCount: (value) => dispatch(addCount(value)),
  };
};

export default connect(mapStateToProps, dispatchtoProps)(Main);
