import React from "react";

import { SkeletonImage, SkeletonText } from "../../components";
import PropTypes from "prop-types";
import { indexpageText } from "../../constants/texts";

const ItemCard = ({ imageURL, color, brand, price, clickFunc }) => {
  return (
    <div className="itemcard" onClick={() => clickFunc()}>
      <SkeletonImage
        loading={Boolean(imageURL)}
        containerClass="itemcard__imagecontainer"
        imageClass="itemcard__imagecontainer--image"
        url={`${imageURL}`}
        description={brand + " " + color + " image"}
      />

      <div className="itemcard__info">
        <SkeletonText
          loading={Boolean(brand)}
          fontWeight="medium"
          color="blue"
          size="h5"
          containerClass="itemcard__info--brand"
          textClass=" "
          text={brand}
          display="inline"
        />

        <SkeletonText
          loading={Boolean(color)}
          fontWeight="medium"
          color="dark"
          size="h5"
          containerClass="itemcard__info--color"
          textClass=" "
          text={
            <>
              <strong>{indexpageText.itemCard.color} </strong> {color}
            </>
          }
          display="inline"
        />
      </div>

      <SkeletonText
        loading={Boolean(price)}
        size="h3"
        containerClass="itemcard__price"
        textClass="itemcard__price--text"
        text={`${price} TL`}
        fontWeight="bold"
        color="dark"
      />
    </div>
  );
};

ItemCard.propTypes = {
  imageURL: PropTypes.string,
  color: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  clickFunc: PropTypes.func,
};

export default ItemCard;
