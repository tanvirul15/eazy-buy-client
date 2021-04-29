import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import HomeIcon from "@material-ui/icons/Home";
import "./Sidebar.css";

const Sidebar = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <div className='flex' id='side-bar'>
        <h2 className='side-bar__brand'>Eazy Buy</h2>
        <ul className='side-bar-list'>
          <Link to={url}>
            <li className='side-bar-list-item'>
              <AddCircleOutlineIcon /> &nbsp; Add Product
            </li>
          </Link>

          <Link to={url + "/ManageProduct"}>
            <li className='side-bar-list-item'>
              <SettingsApplicationsIcon /> &nbsp; Manage Product
            </li>
          </Link>
          <Link to={url + "/editProduct"}>
            <li className='side-bar-list-item'>
              <EditIcon />
              &nbsp; Edit Product
            </li>
          </Link>
          <Link to='/'>
            <li className='side-bar-list-item'>
              <HomeIcon />
              &nbsp;Back to Homepage
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
