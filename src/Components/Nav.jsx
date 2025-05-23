import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo"> Premium Cars</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#cars">Cars</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
