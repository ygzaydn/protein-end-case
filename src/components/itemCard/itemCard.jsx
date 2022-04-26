import React from "react";

import { Text } from "../../components";
import PropTypes from "prop-types";

const ItemCard = ({ imageURL, color, brand, price }) => {
    return (
        <div className="itemcard">
            <div
                className={
                    imageURL
                        ? "itemcard__imagediv"
                        : "itemcard__imagediv loading-box"
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
                        <h4>{brand && brand}</h4>
                    </Text>
                </div>
                <div
                    className={
                        color
                            ? "itemcard__infodiv--brand"
                            : "itemcard__infodiv--brand loading-box"
                    }
                >
                    <Text display="inline" color="dark" fontWeight="medium">
                        <h4>
                            {color && <strong>Renk: </strong>}
                            {color}
                        </h4>
                    </Text>
                </div>
            </div>
            <div
                className={
                    price
                        ? "itemcard__pricediv"
                        : "itemcard__pricediv loading-box"
                }
            >
                <Text fontWeight="bold" color="dark">
                    <h2 style={{ textAlign: "initial" }}>
                        {price && `${price} TL`}
                    </h2>
                </Text>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    imageURL: PropTypes.string,
    color: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
};

export default ItemCard;
