import React from 'react';
import './products.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export let Index = 0;
function getIdx(idx) {
  Index = idx;
}

export function Products(Props) {
  return (
    <div className="App">
      <div className="App-header">
        <h1>danh mục sản phẩm</h1>
      </div>
      <div className="rowsp">
        {Props.products.map((product, index) => (
          <div className="box" key={index}>
            <h3> {product.name}</h3>
            <p> {product.price} $</p>
            <Link className="button" type="button" onClick={() => getIdx(index)} to={'/product/' + product.id}>
              thêm vào giỏ hàng
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Products);
