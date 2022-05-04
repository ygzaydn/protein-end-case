import React, { useState } from "react";
import { Text, Offerbox, OfferInput, OfferItemPreview, Button } from "../";

import PropTypes from "prop-types";
import { makeOffer } from "../../utils/axios";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

const ProductDetailOfferDialog = ({ closeFunc, item, userId, open }) => {
  const [offer, setOffer] = useState(0);

  const offerItem = async (offer, item, userId) => {
    const res = await makeOffer(offer, item, userId);
    if (res) {
      setTimeout(() => {
        closeFunc();
      }, 1000);
    }
  };

  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <ToastContainer theme="colored" />
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
          clickFunc={() => offerItem(offer, item, userId)}
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
  userId: PropTypes.string,
  open: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  userId: state?.user?.currentUser?.id,
});

export default connect(mapStateToProps, null)(ProductDetailOfferDialog);
