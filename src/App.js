import React, { Component } from "react";
import routes from "./routes";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
