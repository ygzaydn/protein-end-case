import React from "react";
import PropTypes from "prop-types";
import { Text } from "../";

const SkeletonText = ({
  loading,
  size,
  containerClass,
  textClass,
  text,
  fontWeight,
  color,
  display,
}) => {
  return (
    <div
      className={loading ? containerClass : `${containerClass}  loading-box`}
    >
      {loading && (
        <Text
          fontWeight={fontWeight}
          display={display}
          classes={textClass}
          color={color}
          size={size}
        >
          {text}
        </Text>
      )}
    </div>
  );
};

SkeletonText.propTypes = {
  loading: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
  containerClass: PropTypes.string,
  textClass: PropTypes.string,
  text: PropTypes.any,
  size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  fontWeight: PropTypes.oneOf(["light", "medium", "bold"]),
  color: PropTypes.string,
  display: PropTypes.string,
};

export default SkeletonText;
