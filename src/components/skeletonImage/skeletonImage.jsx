import React from "react";
import PropTypes from "prop-types";
import { baseURL } from "../../utils/axios";

const SkeletonImage = ({
  loading,
  url,
  description,
  containerClass,
  imageClass,
}) => {
  return (
    <div
      className={loading ? containerClass : `${containerClass} loading-box`}
      role="img"
    >
      {loading && (
        <img
          src={`${baseURL}${url}`}
          alt={description}
          className={imageClass}
        />
      )}
    </div>
  );
};

SkeletonImage.propTypes = {
  loading: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
  containerClass: PropTypes.string,
  imageClass: PropTypes.string,
};

export default SkeletonImage;
