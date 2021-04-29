import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ProductCard = (props) => {
  const { _id, name, image, price, weight } = props.product;

  return (
    <div className='col-sm-4 mb-3'>
      <div className='card'>
        <img className='card-img-top' src={image} alt={name} />
        <div className='card-body'>
          <h6 className='card-title'>
            {name} - {weight}
          </h6>
          <div className='d-flex align-items-center justify-content-between'>
            <h2 className='text-success'> {price} $</h2>
            <Link to={"/checkout/" + _id}>
              <button className='btn btn-success'>
                <ShoppingCartIcon /> &nbsp; Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
