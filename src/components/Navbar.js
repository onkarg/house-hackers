import React, { Component } from "react";
import logo from "../assetts/house-icon.png";
import { Link } from "react-router-dom";
import "../assetts/styles.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <img
          className="logo"
          src={logo}
          alt="heart"
        />
        <h1 class="heading">House Hackers</h1>
      </header>
    );
  }
}

export default Navbar;
