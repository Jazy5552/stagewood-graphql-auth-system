import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants';

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pa1 justify-between nowrap bg-light-blue">
        <div className="flex flex-fixed black">
          <Link
            to="/"
            className="fw7 mr1 no-underline black"
          >
            StageWood Auth System Test
          </Link>
          {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/profile" className="ml1 no-underline black">
              Profile
            </Link>
          </div>
          )}
        </div>
        <div className="flex flex-fixed black">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push('/');
              }}
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              Login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
