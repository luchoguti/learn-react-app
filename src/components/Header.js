import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Helllo Wordl React</h1>
        </header>
      </div>
    );
  }
}

export default Header;
