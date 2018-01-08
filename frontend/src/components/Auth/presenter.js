import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img
        src={require("images/main_photo.png")}
        alt="Checkout our app. It's Cool!"
      />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img
          src={require("images/logo.png")}
          alt="Checkout our app. It's Cool!"
        />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            Don't have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
            {context.t("Sign up")}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            Have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {context.t("Log in")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the app")}</span>
        <div className={styles.appstores}>
          <img
            src={require("images/AppStore.png")}
            alt={context.t("Download it on the Apple App Store")}
          />
          <img
            src={require("images/PlayStore.png")}
            alt={context.t("Download it on the Google Play")}
          />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Auth;
