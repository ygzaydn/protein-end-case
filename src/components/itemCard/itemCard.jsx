import React from "react";

import { Text } from "../../components";
import PropTypes from "prop-types";

const ItemCard = ({ imageURL, color, brand, price }) => {
    return (
        <div className="itemcard">
            <img
                className="itemcard__image"
                alt={brand + " " + color + " image"}
                src={imageURL && imageURL}
            />
            <div className="itemcard__infodiv">
                <Text display="inline" color="blue" fontWeight="medium">
                    <h3>{brand}</h3>
                </Text>
                <Text display="inline" color="dark" fontWeight="medium">
                    <h3>
                        <strong>Renk: </strong> {color}
                    </h3>
                </Text>
            </div>

            <Text fontWeight="bold" color="dark">
                <h2 style={{ textAlign: "initial" }}>{price}TL</h2>
            </Text>
        </div>
    );
};

ItemCard.propTypes = {
    imageURL: PropTypes.string,
    color: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
};

export default ItemCard;
