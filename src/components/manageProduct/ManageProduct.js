import React, { useEffect, useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  const deleteItem = (id) => {
    const getConfirmation = window.confirm("Are you sure to delete the product?");
    if (getConfirmation) {
      fetch("https://fathomless-beyond-34579.herokuapp.com/deleteProduct?id=" + id)
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Succesfully Deleted..");
            let tempProduct = [...products];
            tempProduct = tempProduct.filter((item) => item._id !== id);
            setProducts(tempProduct);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://fathomless-beyond-34579.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h5 className='p-3 text-center display-6'>Manage Product</h5>
      <div className='bg-light p-5 m-3'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Product</th>
              <th scope='col'>Weight</th>
              <th scope='col'>Price</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
                <td>
                  <span id='deleteItem'>
                    <HighlightOffIcon color='secondary' onClick={() => deleteItem(product._id)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
