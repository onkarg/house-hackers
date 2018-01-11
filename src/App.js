import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="">
        <div class="flexContainer blueBackground">
          <div class="nav flexItem flexStart">
            <div>
              <img src={logo} alt='logo' />
            </div>
          </div>
          <div class="nav flexContainer flexEnd">
            <div>
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
