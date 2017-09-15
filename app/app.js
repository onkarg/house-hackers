import React, { Component } from 'react';
import './App.css';
// import logo from './logo.png';


class App extends Component {
  render() {
    return (
      <div className="background">
          <div className="container">
              <div>
                  {/* <img className="logo" src = "./logo.png"/> */}
                  <h1 className="first-text">Houser</h1>
                  <h2 className="username">Username</h2>
                  <input className="input1"></input>
                  <h2 className="password">Password</h2>
                  <input className="input2"></input>
                  <button className= "login">Login</button>
                  <button className="register">Register</button>
              </div>
          </div>  
      </div>
    );
  }
}

export default App;
