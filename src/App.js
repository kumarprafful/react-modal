import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import Main from './components/main';
import ModalContainer from './components/modalContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <ModalContainer />

      </div>
    );
  }
}

export default App;
