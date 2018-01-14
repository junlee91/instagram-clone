import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea
      className={styles.input}
      placeholder={context.t("Add a comment...")}
      value={props.comment}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentBox;
