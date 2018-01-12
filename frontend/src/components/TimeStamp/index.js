import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const TimeStamp = (props, context) => props.time;

TimeStamp.propTYpes = {
    time: PropTypes.string.isRequired
}

export default TimeStamp;