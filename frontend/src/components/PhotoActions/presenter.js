import React from "react";
import PropTypes from "prop-types";
import Ionicons from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
    <div>
        <div>
            <span>
                <Ionicons icon="ios-heart-outline" fontSize="28px" color="black" />
            </span>
            <span>
                <Ionicons icon="ios-text-outline" fontSize="28px" color="black"  />
            </span>
        </div>
        <span>{props.number} {props.number === 1 ? context.t("like") : context.t("likes")}</span>
    </div>
);

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired
};

export default PhotoActions;