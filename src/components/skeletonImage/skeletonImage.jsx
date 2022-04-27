import React from "react";
import PropTypes from "prop-types";

const SkeletonImage = ({
    loading,
    url,
    description,
    containerClass,
    imageClass,
}) => {
    return (
        <div
            className={
                loading ? containerClass : `${containerClass} loading-box`
            }
        >
            {loading && (
                <img
                    src={`https://bootcamp.akbolat.net${url}`}
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
