import React, { useState } from "react";
import { Text, Offerbox, OfferInput, OfferItemPreview, Button } from "../";

import PropTypes from "prop-types";

const ProductDetailOfferDialog = ({ closeFunc, item }) => {
  const [offer, setOffer] = useState(0);
  return (
    <div className="dialogbox">
      <div className="dialogbox__content productdetailofferdialog">
        <Text color="dark" classes="productdetailofferdialog__title">
          <h2>Teklif Ver</h2>
        </Text>
        <span
          className="productdetailofferdialog__closebutton"
          onClick={() => closeFunc()}
        >
          X
        </span>
        <OfferItemPreview item={item} />
        <div className="productdetailofferdialog__offerboxdiv">
          <Offerbox active={offer === "20%"} amount={20} setFunc={setOffer} />
          <Offerbox active={offer === "30%"} amount={30} setFunc={setOffer} />
          <Offerbox active={offer === "40%"} amount={40} setFunc={setOffer} />
        </div>
        <OfferInput
          priceLabel
          onChangeFunc={setOffer}
          placeholder="Teklif Belirle"
          classes="productdetailofferdialog__input"
        />
        <Button
          color="primary"
          size="large"
          classes="productdetailofferdialog__button"
        >
          Onayla
        </Button>
      </div>
    </div>
  );
};

ProductDetailOfferDialog.propTypes = {
  item: PropTypes.object,
  closeFunc: PropTypes.func,
};

export default ProductDetailOfferDialog;
