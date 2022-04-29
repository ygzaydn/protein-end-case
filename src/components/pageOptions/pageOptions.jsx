import React from "react";

import PropTypes from "prop-types";

const PageOptions = ({ active, clickFunc, text }) => {
  return (
    <div
      className={active ? "pageoptions pageoptions--active" : "pageoptions"}
      onClick={() => clickFunc()}
    >
      <p>{text}</p>
    </div>
  );
};

PageOptions.propTypes = {
  clickFunc: PropTypes.func,
  active: PropTypes.bool,
  text: PropTypes.string,
};

export default PageOptions;
