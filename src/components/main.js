import React, {Component} from 'react';

import {connect} from 'react-redux';
import NavBar from './navbar';
import {loadModal} from '../actions';

import {LOGIN_MODAL} from './modalTypes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.showLoginMenu = this.showLoginMenu.bind(this);
  }

  showLoginMenu() {
    console.log('HEllo');
    this.props.loadModal(LOGIN_MODAL);
  }

  render() {
    return (
      <NavBar
        showLoginMenu={this.showLoginMenu}
      />
    );
  }
}

export default connect(null, {loadModal})(Main);
