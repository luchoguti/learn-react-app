//dependecies
import React, { Component } from 'react';
//component
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

//Data
import ittems from '../data/menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Natura Software" ittems={ittems} />
        <Content />
        <Footer copyright="&copy; Natura Software 2017" />
        
      </div>
    );
  }
}

export default App;
