import React from "react";
import { Text, Button } from "..";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { dialogText } from "../../constants/texts";

const AccountOfferDialog = ({ approveFunc, closeFunc, id, open }) => {
  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <div className="dialogbox__content productdetailpurchasedialog">
        <Text color="dark" size="h2">
          {dialogText.accountPurchase.offer}
        </Text>
        <Text color="dark" fontWeight="light" size="h3">
          {dialogText.accountPurchase.question}
        </Text>
        <div className="productdetailpurchasedialog--buttondiv">
          <Button
            color="secondary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => closeFunc()}
          >
            {dialogText.accountPurchase.back}
          </Button>
          <Button
            color="primary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => approveFunc(id)}
          >
            {dialogText.accountPurchase.offer}
          </Button>
        </div>
      </div>
    </div>
  );
};

AccountOfferDialog.propTypes = {
  id: PropTypes.object,
  approveFunc: PropTypes.func,
  closeFunc: PropTypes.func,
  open: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(null, mapDispatchToProps)(AccountOfferDialog);
