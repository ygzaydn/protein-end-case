import React from "react";
import PropTypes from "prop-types";
import { Text } from "../";

const FormTextInput = ({
  id,
  name,
  type,
  value,
  onChangeFunc,
  labelText,
  additionalText,
  error,
  onBlur,
}) => {
  return (
    <div className="formtextinput">
      <label className="formtextinput__label" htmlFor={id}>
        {labelText}
      </label>
      <input
        className={
          error
            ? "formtextinput__input formtextinput__input--error"
            : "formtextinput__input"
        }
        id={id}
        name={name}
        type={type}
        onChange={onChangeFunc}
        value={value}
        onBlur={onBlur}
      />
      {additionalText?.length && (
        <Text>
          <h6
            style={{
              textAlign: "end",
              cursor: "pointer",
              color: "#b1b1b1",
            }}
          >
            {additionalText}
          </h6>
        </Text>
      )}
    </div>
  );
};

FormTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
  labelText: PropTypes.string,
  additionalText: PropTypes.string,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default FormTextInput;
