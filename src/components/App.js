import React, { Component } from 'react';

//component
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        
      </div>
    );
  }
}

export default App;
