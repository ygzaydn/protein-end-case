import React, { useState } from "react";
import PropTypes from "prop-types";

const FormSelectInput = ({
  id,
  name,
  onChangeFunc,
  labelText,
  error,
  onBlur,
  placeholder,
  options,
}) => {
  const [newOption, setNewOption] = useState("");

  return (
    <div className="formselectinput">
      <label className="formselectinput__label" htmlFor={id}>
        {labelText}
      </label>

      <input
        type="text"
        list={id}
        name={name}
        onBlur={onBlur}
        onChange={onChangeFunc}
        placeholder={placeholder}
        className={
          error
            ? "formselectinput__input formselectinput__input--error"
            : "formselectinput__input"
        }
      />
      <datalist id={id} className="formselectinput__datalist">
        <option
          className="formselectinput__datalist--option"
          disabled
          defaultValue
          hidden
        >
          {placeholder}
        </option>
        {options.map((el) => (
          <option
            className="formselectinput__datalist--option"
            key={el}
            value={el}
          >
            {el}
          </option>
        ))}
      </datalist>
      {/* <select
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChangeFunc}
        placeholder={placeholder}
        className={
          error
            ? "formselectinput__input formselectinput__input--error"
            : "formselectinput__input"
        }
      >
        <option disabled selected hidden>
          {placeholder}
        </option>
        {options.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
        
      </select>*/}
    </div>
  );
};

FormSelectInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChangeFunc: PropTypes.func,
  labelText: PropTypes.string,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  newOptionFlag: PropTypes.bool,
};

export default FormSelectInput;
