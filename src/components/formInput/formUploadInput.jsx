import React from "react";
import PropTypes from "prop-types";
import { Upload } from "../../icons";

const FormUploadInput = ({ value, onChangeFunc }) => {
  console.log(value);
  return (
    <div className="formuploadinput">
      <Upload />
      <p className="formuploadinput__uppertext">
        Sürükleyip bırakarak yükle <br /> veya
      </p>
      <label htmlFor="upload-photo" className="formuploadinput__label">
        Görsel Seçin
      </label>
      <input
        type="file"
        value={value}
        onChange={onChangeFunc}
        className="formuploadinput__input"
        id="upload-photo"
      />

      <p className="formuploadinput__lowertext">
        PNG ve JPEG Dosya boyutu max. 100kb
      </p>
    </div>
  );
};

FormUploadInput.propTypes = {
  value: PropTypes.any,
  onChangeFunc: PropTypes.func,
};

export default FormUploadInput;
