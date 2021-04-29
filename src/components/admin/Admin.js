import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AddProduct from "../addProduct/AddProduct";
import EditProduct from "../editProduct/EditProduct";
import ManageProduct from "../manageProduct/ManageProduct";

import Sidebar from "../sidebar/Sidebar";

const Admin = () => {
  const currentPath = useLocation().pathname;

  return (
    <div>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <Switch>
            <Route path='/admin/ManageProduct'>
              <ManageProduct />
            </Route>
            <Route path='/admin/editProduct'>
              <EditProduct />
            </Route>
            <Route exact path='/admin'>
              <AddProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
