import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className='navigationbar'>
      <div className='navbar__brand'>
        <Link to='/'>
          <h4>Eazy Buy</h4>
        </Link>
      </div>
      <div className='navigation'>
        <ul>
          <Link to='/'>
            <li className='navigation__item'>Home</li>
          </Link>
          <Link to='/orders'>
            <li className='navigation__item'>Orders</li>
          </Link>
          <Link to='/admin'>
            <li className='navigation__item'>Admin</li>
          </Link>
          <Link to='/'>
            <li className='navigation__item'>Deals</li>
          </Link>
          {user.displayName || (
            <Link to='/login'>
              <button className='btn btn-secondary'>Log In</button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
