import React, { Component } from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
      facebookLogin: PropTypes.func.isRequired
  }

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }

  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);

    // redux action be here!
  };

  _handleFacebookLogin = response => {
    console.log(response);

    // reduc action here!
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
