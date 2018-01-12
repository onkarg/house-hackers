import React, { Component } from "react";
import logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt='logo' />
        </div>
        <div className="nav-right">
          <Link to="/">
            <p>Login</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
