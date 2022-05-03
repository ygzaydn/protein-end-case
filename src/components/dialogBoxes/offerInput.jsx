import React from "react";
import PropTypes from "prop-types";

const OfferInput = ({ value, onChangeFunc, placeholder }) => {
  return (
    <div className="offerinput">
      <input
        className="offerinput__input"
        type="text"
        onChange={(e) => onChangeFunc(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

OfferInput.propTypes = {
  value: PropTypes.number,
  onChangeFunc: PropTypes.func,
  placeholder: PropTypes.string,
};

export default OfferInput;
