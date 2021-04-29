import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";

const Checkout = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const handleConfirmOrder = () => {
    const order = {
      name: user.displayName,
      email: user.email,
      product: selectedProduct,
      orderDate: new Date().toDateString(),
    };
    if (window.confirm("Are you sure to place the order?")) {
      fetch("https://fathomless-beyond-34579.herokuapp.com/placeOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedCount > 0) {
            alert("Order Placed. Let's Back to Homepage for another order");
            history.replace("/");
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://fathomless-beyond-34579.herokuapp.com/getProduct?id=" + id)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, []);

  return (
    <div className='bg-light text-center'>
      <div className='container'>
        <div className='py-5 bg-light'>
          <h4 className='display-6'>Checkout</h4>
          <div className='w-50 mx-auto'>
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Product</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedProduct.name + " - " + selectedProduct.weight}</td>
                  <td>1</td>
                  <td>{selectedProduct.price} $</td>
                </tr>
                <tr>
                  <td colSpan='3'>
                    <h5>Total: {selectedProduct.price} $</h5>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className='btn btn-success' onClick={handleConfirmOrder}>
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
