import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import SearchIcon from "@material-ui/icons/Search";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-beyond-34579.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className='py-5 input-group w-25 mx-auto'>
        <input type='text' className='w-25 form-control' placeholder='Search Product'></input>
        <div className='input-group-append'>
          <button className='btn btn-success'>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className='container pb-5'>
        <div className='row'>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
