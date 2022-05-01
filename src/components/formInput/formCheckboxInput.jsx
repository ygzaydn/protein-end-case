import React from "react";
import PropTypes from "prop-types";

const FormCheckboxInput = ({
  id,
  name,
  onChangeFunc,
  uncheckedText,
  checkedText,
  error,
  onBlur,
  value,
}) => {
  return (
    <div className="formcheckboxinput">
      <p
        className={
          !value
            ? "formcheckboxinput__label"
            : "formcheckboxinput__label formcheckboxinput__label--checked"
        }
      >
        {value ? checkedText : uncheckedText}
      </p>
      <div
        className={
          !value
            ? "formcheckboxinput__inputdiv"
            : "formcheckboxinput__inputdiv formcheckboxinput__inputdiv--checked"
        }
      >
        <label
          htmlFor={id}
          className={
            !value
              ? "formcheckboxinput__inputdiv__label"
              : " formcheckboxinput__inputdiv__label formcheckboxinput__inputdiv__label--checked"
          }
        ></label>
        <input
          type="checkbox"
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChangeFunc}
          value={value}
          className={
            error
              ? "formcheckboxinput__input formcheckboxinput__input--error"
              : "formcheckboxinput__input"
          }
        />
      </div>
    </div>
  );
};

FormCheckboxInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChangeFunc: PropTypes.func,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  value: PropTypes.bool,
  uncheckedText: PropTypes.string,
  checkedText: PropTypes.string,
};

export default FormCheckboxInput;
