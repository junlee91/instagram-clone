import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };

  render() {
    const { email, fullname, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        fullnameValue={fullname}
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
