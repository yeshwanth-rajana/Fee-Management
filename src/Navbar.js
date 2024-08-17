import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          src="https://seeklogo.com/images/G/gmr-logo-938D13259E-seeklogo.com.png"
          alt="gmr"
          style={{ height: "40px" }} // Customize the logo height if needed
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signorlog">
              Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/trainee">
              Trainer
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
}

export default Navbar;
