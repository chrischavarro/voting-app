import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions'

class Header extends Component {
  componentDidMount() {
    // console.log('mounted header!')
    // this.props.fetchUser();
  }

  renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return <Link to ="/login" style={{ paddingRight: '15px' }}>Log In</Link>
        default:
          return <li style={{ paddingRight: '15px' }}>Welcome Back!</li>;
          // Insert user name here
      }
  }

  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to='/polls'
              className="left brand-logo"
              style={{ paddingLeft: '15px' }}
            >
              Pollr
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
};

export default connect(mapStateToProps, actions)(Header);
