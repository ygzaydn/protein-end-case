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
}) => {
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
};

export default FormTextInput;
