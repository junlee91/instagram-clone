import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import styles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      {context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />

      {context.t("Log in with Facebook")}
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        placeholder={context.t("Email")}
        className={styles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={context.t("Full Name")}
        className={styles.textInput}
        value={props.fullnameValue}
        onChange={props.handleInputChange}
        name="fullname"
      />
      <input
        type="username"
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
      <input type="submit" value="Sign up" className={styles.button} />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  fullnameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
