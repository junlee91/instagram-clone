import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <CommentBox
        handleKeyPress={this._handleKeyPress}
        handleInputChange={this._handleInputChange}
        {...this.state}
      />
    );
  }

  _handleInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      comment: value
    });
  };

  _handleKeyPress = event => {
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
    }
  };
}

export default Container;
