import React, { useState } from "react";
import { Text, Offerbox, OfferInput, OfferItemPreview, Button } from "../";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { dialogText } from "../../constants/texts";

const ProductDetailOfferDialog = ({
  closeFunc,
  item,
  userId,
  open,
  startOffer,
  finishOffer,
  approveFunc,
  mode,
  getProducts,
}) => {
  const [offer, setOffer] = useState(0);

  const offerItem = async (offer, item, userId) => {
    startOffer();
    const res = await approveFunc(offer, item, userId);
    if (res) {
      getProducts();
      finishOffer();
      closeFunc();
    }
  };

  const withdrawOffer = async (offers, userId) => {
    startOffer();
    const res = await approveFunc(offers, userId);
    if (res) {
      getProducts();
      finishOffer();
      closeFunc();
    }
  };

  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <div className="dialogbox__content productdetailofferdialog">
        <Text color="dark" classes="productdetailofferdialog__title">
          <h2>{dialogText.productDetailOffer[mode].offer}</h2>
        </Text>
        <span
          className="productdetailofferdialog__closebutton"
          onClick={() => closeFunc()}
        >
          X
        </span>
        {mode === "make" && <OfferItemPreview item={item} />}
        {mode === "make" && (
          <div className="productdetailofferdialog__offerboxcontainer">
            <Offerbox active={offer === "20%"} amount={20} setFunc={setOffer} />
            <Offerbox active={offer === "30%"} amount={30} setFunc={setOffer} />
            <Offerbox active={offer === "40%"} amount={40} setFunc={setOffer} />
          </div>
        )}
        {mode === "make" && (
          <OfferInput
            onChangeFunc={setOffer}
            placeholder={dialogText.productDetailOffer[mode].placeholder}
            classes="productdetailofferdialog__input"
            value={offer}
          />
        )}

        <Button
          color="primary"
          size="large"
          classes="productdetailofferdialog__button"
          clickFunc={() =>
            mode === "make"
              ? offerItem(offer, item, userId)
              : withdrawOffer(item.offers, userId)
          }
        >
          {dialogText.productDetailOffer[mode].approve}
        </Button>
      </div>
    </div>
  );
};

ProductDetailOfferDialog.propTypes = {
  item: PropTypes.object,
  closeFunc: PropTypes.func,
  userId: PropTypes.number,
  open: PropTypes.bool,
  startOffer: PropTypes.func,
  finishOffer: PropTypes.func,
  approveFunc: PropTypes.func,
  mode: PropTypes.string,
  getProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userId: state?.user?.currentUser?.id,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailOfferDialog);
