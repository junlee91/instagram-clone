import React from "react";
import PropTypes from "prop-types";
//import styles from "./styles.scss";

const Profile = props => {
  if (!props.loading) {
    const { profileList } = props;
    console.log(profileList);
  }

  return <h1>This is Profile</h1>;
};

Profile.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Profile;
