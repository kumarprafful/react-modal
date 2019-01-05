import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginModal from './loginModal';

import {LOGIN_MODAL} from './modalTypes'

const MODAL_COMPONENTS = {
  LOGIN_MODAL: LoginModal,
};

const ModalContainer = (props) => {
  if(!props.modalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[props.modalType];
  return <SpecificModal />;
};

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType
  };
};

export default connect(mapStateToProps)(ModalContainer);
