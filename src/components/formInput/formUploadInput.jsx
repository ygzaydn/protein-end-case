import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Upload } from "../../icons";

const FormUploadInput = ({ value, onChangeFunc, id, name }) => {
  console.log(value);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      onChangeFunc("file", "");
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    onChangeFunc("file", e.currentTarget.files[0]);
  };

  return (
    <div
      className={
        selectedFile
          ? "formuploadinput formuploadinput--selected"
          : "formuploadinput"
      }
    >
      {selectedFile ? (
        <div className="formuploadinput__uploadeddiv">
          <img
            src={preview}
            className="formuploadinput__uploadeddiv--image"
            alt="uploaded"
          />
          <div
            onClick={(e) => onSelectFile(e)}
            className="formuploadinput__uploadeddiv--cross"
          >
            <p>X</p>
          </div>
        </div>
      ) : (
        <>
          <Upload />
          <p className="formuploadinput__uppertext">
            Sürükleyip bırakarak yükle <br /> veya
          </p>
          <label htmlFor={id} className="formuploadinput__label">
            Görsel Seçin
          </label>
          <input
            type="file"
            name={name}
            id={id}
            onChange={onSelectFile}
            className="formuploadinput__input"
          />

          <p className="formuploadinput__lowertext">
            PNG ve JPEG Dosya boyutu max. 100kb
          </p>
        </>
      )}
    </div>
  );
};

FormUploadInput.propTypes = {
  value: PropTypes.any,
  onChangeFunc: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default FormUploadInput;
