import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Orders = () => {
  const [user, setUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-beyond-34579.herokuapp.com/getOrders?email=" + user.email)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <h5 className='p-3 text-center display-6'>Your Orders</h5>
      <div className='bg-light p-5 m-3'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Order ID</th>
              <th scope='col'>Order Date</th>
              <th scope='col'>Product</th>
              <th scope='col'>Qunatity</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderDate}</td>
                <td>{order.product.name + " - " + order.product.weight}</td>
                <td>1</td>
                <td>{order.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
