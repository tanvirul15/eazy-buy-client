import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import { createContext, useContext, useState } from "react";
import Navbar from "./navbar/Navbar";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Checkout from "./components/checkout/Checkout";
import Orders from "./components/orders/Orders";
import NoMatch from "./components/nomatch/NoMatch";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className='App'>
        <Router>
          <Switch>
            <PrivateRoute path='/admin'>
              <Admin />
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Navbar />
              <Orders />
            </PrivateRoute>
            <PrivateRoute path='/checkout/:id'>
              <Navbar />
              <Checkout />
            </PrivateRoute>
            <Route path='/login'>
              <Navbar />
              <Login />
            </Route>

            <Route exact path='/'>
              <Navbar />
              <Home />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
