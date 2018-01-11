import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { email, name, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }

  _handleInputChange = event => {
    const { target: { value, name } } = event;
    //console.log(value, name);
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    console.log(this.state);
    
    // redux action be here!
    const { email, name, password, username } = this.state;
    const { createAccount } = this.props;
    
    event.preventDefault();
    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    console.log(response);

    // reduc action here!
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
