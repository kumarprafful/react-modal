import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from './Modal';

import {hideModal} from '../actions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
        <div className="login">
          <h1>Login</h1>
          lorem ipsum dorem
        </div>
      </Modal>
    );
  }
}

export default connect(null, {hideModal})(LoginModal);
