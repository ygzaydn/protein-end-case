import React from "react";

import PropTypes from "prop-types";

const CategoryText = ({ name, active, clickFunc }) => {
  return (
    <h4
      className={`${
        active ? "categoryText categoryText__active" : "categoryText"
      }`}
      onClick={() => clickFunc && clickFunc()}
    >
      {name}
    </h4>
  );
};

CategoryText.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  clickFunc: PropTypes.func,
};

export default CategoryText;
