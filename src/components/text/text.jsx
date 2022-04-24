import React from "react";

import PropTypes from "prop-types";

const Text = ({ color, display, fontWeight, children }) => {
    const classNames = ["text"];
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

    return <span className={classNames.join(" ")}>{children}</span>;
};

Text.propTypes = {
    color: PropTypes.string,
    display: PropTypes.string,
    fontWeight: PropTypes.string,
    children: PropTypes.node,
};

export default Text;
