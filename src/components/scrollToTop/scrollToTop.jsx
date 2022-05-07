import React from "react";

import PropTypes from "prop-types";
import { UpArrow } from "../../icons";

const ScrollToTop = ({ visible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={visible ? "scroll" : "scroll scroll--hidden"}
      onClick={() => scrollToTop()}
    >
      <UpArrow />
    </div>
  );
};

ScrollToTop.propTypes = {
  visible: PropTypes.bool,
};

export default ScrollToTop;
