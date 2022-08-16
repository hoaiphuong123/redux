import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Warenkorb.css';

function Warenkorb() {
  return (
    <div className="warenkorb">
      <Link to="./Waren">
        <p className="badge badge-danger" style={{ textDecoration: 'none' }}>
          My Cart
        </p>
        <FaShoppingCart className="waren" />
      </Link>
    </div>
  );
}

// Here we take the products from Redux Store //
const mapStateToProps = (state) => {
  return {
    warenListe: state.warenListe,
    count: state.count,
  };
};

// Here we conncect our Component with our Redux-Store //
export default connect(mapStateToProps)(Warenkorb);
