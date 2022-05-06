import React from "react";

import PropTypes from "prop-types";

const Text = ({
  color,
  display,
  fontWeight,
  children,
  classes,
  size,
  clickFunc,
}) => {
  const classNames = [classes, "text"];

  color === "white" && classNames.push("text__white");
  color === "dark" && classNames.push("text__dark");
  color === "blue" && classNames.push("text__blue");
  color === "red" && classNames.push("text__red");
  color === "green" && classNames.push("text__green");

  display === "block" && classNames.push("text__block");
  display === "inline" && classNames.push("text__inline");

  fontWeight === "light" && classNames.push("text__light");
  fontWeight === "medium" && classNames.push("text__medium");
  fontWeight === "bold" && classNames.push("text__bold");

  return (
    <>
      {size === "h1" && (
        <h1
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h1>
      )}
      {size === "h2" && (
        <h2
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h2>
      )}
      {size === "h3" && (
        <h3
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h3>
      )}
      {size === "h4" && (
        <h4
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h4>
      )}
      {size === "h5" && (
        <h5
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h5>
      )}
      {size === "h6" && (
        <h6
          onClick={() => clickFunc && clickFunc()}
          className={classNames.join(" ")}
        >
          {children}
        </h6>
      )}
    </>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  clickFunc: PropTypes.func,
};

export default Text;
