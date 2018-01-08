import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import styles from "shared/formStyles.scss";

const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder={context.t("Username")}
        className={styles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={styles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input type="submit" value="Log in" className={styles.button} />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Log in with Facebook")}
    </span>
    <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
