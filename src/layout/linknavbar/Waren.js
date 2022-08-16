import { React, useEffect, useState } from 'react';
import './Warenkorb.css';
import { connect } from 'react-redux';

function Waren(Props) {
  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let summe = 0;
    const array = Props.totalToPay;
    for (let i = 0; i < array.length; i++) {
      summe = summe + array[i];
    }
    setSum(summe);
  }, []);

  useEffect(() => {
    setProducts(Props.warenListe);
  }, []);

  function remove(index) {
    // Calculate the total to pay - //
    let newSum = sum;
    newSum = newSum - Props.totalToPay[index];
    setSum(newSum);
    Props.totalToPay.splice(index, 1);

    // Here remove the Item //
    Props.warenListe.splice(index, 1);
    const newarray = [...products];
    newarray.splice(index, 1);
    setProducts(newarray);
  }

  return (
    <div>
      <h1>Your Products: </h1>
      <br />
      <div>
        {products.map((obj, index) => (
          <div className="liste">
            <h3>{obj.name}</h3>
            <p>{obj.price}$</p>
            <p>{obj.quantity[0]} product</p>
            <p>Total: {obj.total} $</p>
            <button onClick={() => remove(index)} type="button" className="btn btn-danger">
              remove
            </button>
          </div>
        ))}
        <h2>Total: {sum}$</h2>
        <button type="submit">Continue to Payment</button>
      </div>
    </div>
  );
}

// Here we take the products from Redux Store //
const mapStateToProps = (state) => {
  return {
    warenListe: state.warenListe,
    totalToPay: state.totalToPay,
  };
};

// Here we make our Actions on react redux Store //
const mapDispatchToProps = (dispatch) => {
  return {
    RemoveFromKorb: (index) => dispatch(RemoveFromKorb(index)),
  };
};

// Here we conncect our Component with our Redux-Store //
export default connect(mapStateToProps, mapDispatchToProps)(Waren);
