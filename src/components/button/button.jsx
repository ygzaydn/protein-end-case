import React from "react";

import PropTypes from "prop-types";

const Button = ({ children, clickFunc, size, color }) => {
  const classNames = ["button"];
  size === "large" && classNames.push("button__large");
  size === "medium" && classNames.push("button__medium");
  size === "small" && classNames.push("button__small");
  size === "xsmall" && classNames.push("button__xsmall");

  color === "primary" && classNames.push("button__primary");
  color === "secondary" && classNames.push("button__secondary");
  color === "orange" && classNames.push("button__orange");
  color === "red" && classNames.push("button__red");

  return (
    <button onClick={() => clickFunc()} className={classNames.join(" ")}>
      {children}
    </button>
  );
};

Button.propTypes = {
  clickFunc: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
