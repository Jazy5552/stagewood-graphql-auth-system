import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { AUTH_TOKEN } from '../constants';

const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $name: String!,
    $username: String!,
    $email: String!,
    $password: String!,
  ) {
    register(
      name: $name,
      username: $username,
      email: $email,
      password: $password,
    ) {
      token,
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!,
    $password: String!,
  ) {
    login(
      email: $email,
      password: $password,
    ) {
      token,
    }
  }
`;

class Login extends React.Component {
  state = {
    login: true, // Whether component is in login or register state
    name: '',
    username: '',
    email: '',
    password: '',
    errorMessage: '',
  }

  render() {
    const {
      login,
      name,
      username,
      email,
      password,
      errorMessage,
    } = this.state;

    return (
      <form
        className="w-70 center"
        onSubmit={e => e.preventDefault()}
      >
        <h4 className="mv3">{login ? 'Login' : 'Register'}</h4>
        <div className="mv1 error error--container">{errorMessage}</div>
        <div className="flex flex-column mt3">
          {!login && (
            <>
              <input
                className="mb2 pa1"
                value={name}
                onChange={e => this.setInputState({ name: e.target.value })}
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="mb2 pa1"
                value={username}
                onChange={e => this.setInputState({ username: e.target.value })}
                type="text"
                placeholder="Username"
                name="username"
              />
            </>
          )}
          <input
            className="mb2 pa1"
            value={email}
            onChange={e => this.setInputState({ email: e.target.value })}
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="on"
          />
          <input
            className="mb2 pa1"
            value={password}
            onChange={e => this.setInputState({ password: e.target.value })}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
          />
        </div>
        <div className="flex flex-column mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : REGISTER_MUTATION}
            variables={{ name, username, email, password }}
            onCompleted={this.handleCompleted}
            onError={this.handleError}
          >
            {authMutation => (
              <button
                className="mt4 br3 b--black bg-dark-blue white pa2 dim"
                onClick={authMutation}
                type="submit"
              >
                {login ? 'Login' : 'Register'}
              </button>
            )}
          </Mutation>
        </div>
        <button
          className="mt4 br3 b--black bg-dark-blue white pa1 dim"
          onClick={e => this.setInputState({login: !login})}
        >
          {login ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    );
  }

  // Method to wrap setState
  setInputState = (newState) => {
    this.setState({errorMessage: '', ...newState});
  }

  handleCompleted = (data) => {
    const { token } = this.state.login ? data.login : data.register
    this.saveUserData(token);
    this.props.history.push('/');
  }

  handleError = (error) => {
    this.setState({ errorMessage: error.message });
  }

  saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  }
}

export default Login;