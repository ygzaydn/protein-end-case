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
}) => {
    return (
        <div
            className={
                loading ? containerClass : `${containerClass}  loading-box`
            }
        >
            {loading && (
                <Text fontWeight={fontWeight} classes={textClass}>
                    {size === "h1" && <h1>{text}</h1>}
                    {size === "h2" && <h2>{text}</h2>}
                    {size === "h3" && <h3>{text}</h3>}
                    {size === "h4" && <h4>{text}</h4>}
                    {size === "h5" && <h5>{text}</h5>}
                    {size === "h6" && <h6>{text}</h6>}
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
};

export default SkeletonText;
