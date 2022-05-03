import React from "react";

import PropTypes from "prop-types";
import { Text } from "../";

const OfferItemPreview = ({ item }) => {
  console.log(item);
  return (
    <div className="offeritempreview">
      <img
        className="offeritempreview__image"
        alt="item-image"
        src={`https://bootcamp.akbolat.net${item?.image?.url}`}
      />
      <Text color="dark" fontWeight="light" classes="offeritempreview__text">
        <h6>{item?.name}</h6>
      </Text>
      <Text color="dark" classes="offeritempreview__price">
        <h4>{item.price} TL</h4>
      </Text>
    </div>
  );
};

OfferItemPreview.propTypes = {
  item: PropTypes.object,
};

export default OfferItemPreview;
