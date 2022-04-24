import React from "react";

import PropTypes from "prop-types";

const CategoryText = ({ name, active, clickFunc }) => {
    return (
        <h3
            className={`${
                active ? "categoryText categoryText__active" : "categoryText"
            }`}
            onClick={() => clickFunc && clickFunc()}
        >
            {name}
        </h3>
    );
};

CategoryText.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool,
    clickFunc: PropTypes.bool,
};

export default CategoryText;
