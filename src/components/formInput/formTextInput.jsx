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
  placeholder,
  multiline,
  priceLabel,
}) => {
  const inputClass = ["formtextinput__input"];
  error && inputClass.push("formtextinput__input--error");

  return (
    <div className="formtextinput">
      <label className="formtextinput__label" htmlFor={id}>
        {labelText}
      </label>
      {multiline ? (
        <textarea
          className={
            error
              ? "formtextinput__textarea formtextinput__textarea--error"
              : "formtextinput__textarea"
          }
          id={id}
          name={name}
          type={type}
          onChange={onChangeFunc}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <div className={priceLabel ? "formtextinput__input--priceLabel" : ""}>
          <input
            className={inputClass.join(" ")}
            id={id}
            name={name}
            type={type}
            onChange={onChangeFunc}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </div>
      )}

      {additionalText?.length && (
        <Text size="h6" classes="formtextinput__additionalText">
          {additionalText}
        </Text>
      )}
    </div>
  );
};

FormTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeFunc: PropTypes.func,
  labelText: PropTypes.string,
  additionalText: PropTypes.string,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  priceLabel: PropTypes.bool,
  classes: PropTypes.string,
};

export default FormTextInput;
