import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li><a onClick={this.props.showLoginMenu}>Login</a></li>
      </ul>
    );
  }
}

export default NavBar;
