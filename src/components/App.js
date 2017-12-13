//dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//component
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

//Data
import ittems from '../data/menu.js';

class App extends Component {
  static propTypes = {
  	children: PropTypes.object.isRequired
  };
  render() {
  	const {children} = this.props;
    return (
      <div className="App">
        <Header title="Natura Software" ittems={ittems} />
        <Content body={children} />
        <Footer copyright="&copy; Natura Software 2017" />
        
      </div>
    );
  }
}

export default App;
