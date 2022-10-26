import React, { Component } from "react";
import "../styles/Header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="header">
        <h1 className="title">CV GENERATOR</h1>
      </header>
    );
  }
}

export default Header;
