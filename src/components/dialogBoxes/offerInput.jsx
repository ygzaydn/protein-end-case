import React from "react";
import PropTypes from "prop-types";

const OfferInput = ({ value, onChangeFunc, placeholder }) => {
  const val = value && value?.includes("%") ? value?.split("%")[0] : value;

  return (
    <div className="offerinput">
      <input
        className={
          /^[0-9]+$/.test(val + 0)
            ? "offerinput__input"
            : "offerinput__input offerinput__input--error"
        }
        type="text"
        onChange={(e) => {
          onChangeFunc(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

OfferInput.propTypes = {
  value: PropTypes.any,
  onChangeFunc: PropTypes.func,
  placeholder: PropTypes.string,
};

export default OfferInput;
