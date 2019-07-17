import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  //Basically if isGoogleSignIn is true, it will also render the google-sign-in SCSS property
  //isGoogleSignIn is coming from the Google Custom Bottom, in the sign-in component
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
