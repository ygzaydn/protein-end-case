import React from "react";
import PropTypes from "prop-types";

const FormTextInput = ({ id, name, type, value, onChangeFunc, labelText }) => {
    return (
        <div className="formtextinput">
            <label className="formtextinput__label" htmlFor={id}>
                {labelText}
            </label>
            <input
                className="formtextinput__input"
                id={id}
                name={name}
                type={type}
                onChange={onChangeFunc}
                value={value}
            />
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
};

export default FormTextInput;
