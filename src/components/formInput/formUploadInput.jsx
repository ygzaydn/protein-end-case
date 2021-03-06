import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Upload } from "../../icons";
import { additemformText } from "../../constants/texts";

const FormUploadInput = ({ onChangeFunc, id, name, error }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      ref?.current.addEventListener("dragover", handleDragOver);
      ref?.current.addEventListener("drop", handleDrop);
    }

    return () => {
      if (ref?.current) {
        ref?.current.removeEventListener("dragover", handleDragOver);
        ref?.current.removeEventListener("drop", handleDrop);
      }
    };
  }, [ref]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      setSelectedFile(files[0]);
      onChangeFunc("file", files[0]);
    }
  };

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
      ref={ref}
    >
      {selectedFile ? (
        <div className="formuploadinput__uploadeddiv" role="img">
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
            {additemformText.upload.upperText} <br /> veya
          </p>
          <label htmlFor={id} className="formuploadinput__label">
            {additemformText.upload.label}
          </label>
          <input
            type="file"
            name={name}
            id={id}
            onChange={onSelectFile}
            className="formuploadinput__input"
          />

          <p className="formuploadinput__lowertext">
            {additemformText.upload.constraint}
          </p>
        </>
      )}
      {error && selectedFile && (
        <p className="formuploadinput__error">{error}</p>
      )}
    </div>
  );
};

FormUploadInput.propTypes = {
  value: PropTypes.any,
  onChangeFunc: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
};

export default FormUploadInput;
