import React from "react";

import PropTypes from "prop-types";
import { Text } from "../";
import { baseURL } from "../../utils/axios";

const OfferItemPreview = ({ item }) => {
  return (
    <div className="offeritempreview" role="img">
      <img
        className="offeritempreview__image"
        alt={item?.name}
        src={`${baseURL}${item?.image?.url}`}
      />
      <Text
        color="dark"
        fontWeight="light"
        classes="offeritempreview__text"
        size="h6"
      >
        {item?.name}
      </Text>
      <Text color="dark" classes="offeritempreview__price" size="h4">
        {item.price} TL
      </Text>
    </div>
  );
};

OfferItemPreview.propTypes = {
  item: PropTypes.object,
};

export default OfferItemPreview;
