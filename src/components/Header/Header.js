import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button, Form, FormControl, InputGroup, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="  col-sm-12 col-md-5 ">
          <img
            style={{ height: "175px", weidth: "175px" }}
            src="https://i.pinimg.com/280x280_RS/f0/8e/3f/f08e3fc9b25d405d9c48318dfee31d0c.jpg"
            alt="error"
          />
        </div>
        <nav className=" col-sm-12 col-md-7  ">
          <Link to="/home">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/admin">Admin</Link>
          <a href="">Deals</a>
          <Link to="/login">
            <button
              style={{ marginLeft: "40px" }}
              type="button"
              class="btn btn-danger"
            >
              LogIn
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
