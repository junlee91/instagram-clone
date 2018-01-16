import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getUserProfile: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getUserProfile } = this.props;

    getUserProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.profileList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { profileList } = this.props;
    return <Profile {...this.state} profileList={profileList} />;
  }
}

export default Container;
