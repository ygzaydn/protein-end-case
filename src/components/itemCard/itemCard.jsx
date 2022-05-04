import React from "react";

import { Text } from "../../components";
import PropTypes from "prop-types";

const ItemCard = ({ imageURL, color, brand, price, clickFunc }) => {
  return (
    <div className="itemcard" onClick={() => clickFunc()}>
      <div
        className={
          imageURL ? "itemcard__imagediv" : "itemcard__imagediv loading-box"
        }
      >
        <img
          className="itemcard__image"
          alt={imageURL ? brand + " " + color + " image" : ""}
          src={imageURL && `https://bootcamp.akbolat.net${imageURL}`}
        />
      </div>
      <div className="itemcard__infodiv">
        <div
          className={
            brand
              ? "itemcard__infodiv--brand"
              : "itemcard__infodiv--brand loading-box"
          }
        >
          <Text display="inline" color="blue" fontWeight="medium">
            <h5>{brand && brand}</h5>
          </Text>
        </div>
        <div
          className={
            color
              ? "itemcard__infodiv--color"
              : "itemcard__infodiv--color loading-box"
          }
        >
          <Text display="inline" color="dark" fontWeight="medium">
            <h5>
              {color && <strong>Renk: </strong>}
              {color}
            </h5>
          </Text>
        </div>
      </div>
      <div
        className={
          price ? "itemcard__pricediv" : "itemcard__pricediv loading-box"
        }
      >
        <Text fontWeight="bold" color="dark">
          <h3 style={{ textAlign: "initial" }}>
            {Boolean(price) && `${price} TL`}
          </h3>
        </Text>
      </div>
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
