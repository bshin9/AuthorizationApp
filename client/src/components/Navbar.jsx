import React from "react";
import { NavLink } from "react-router-dom";

// Created a separate Navbar component
// Using NavLink to route within my app freely
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Proper Watch
          </NavLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </li>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
