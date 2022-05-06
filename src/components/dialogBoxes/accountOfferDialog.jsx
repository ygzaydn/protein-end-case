import React from "react";
import { Text, Button } from "..";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { dialogText } from "../../constants/texts";

const AccountPurchaseDialog = ({
  approveFunc,
  closeFunc,
  id,
  open,
  dialog,
}) => {
  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <div className="dialogbox__content productdetailpurchasedialog">
        <Text color="dark" size="h2">
          {dialogText.accountOffer[dialog].offer}
        </Text>
        <Text color="dark" fontWeight="light" size="h3">
          {dialogText.accountOffer[dialog].question}
        </Text>
        <div className="productdetailpurchasedialog--buttondiv">
          <Button
            color="secondary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => closeFunc()}
          >
            {dialogText.accountOffer[dialog].back}
          </Button>
          <Button
            color="primary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => approveFunc(id)}
          >
            {dialogText.accountOffer[dialog].offer}
          </Button>
        </div>
      </div>
    </div>
  );
};

AccountPurchaseDialog.propTypes = {
  id: PropTypes.object,
  approveFunc: PropTypes.func,
  closeFunc: PropTypes.func,
  open: PropTypes.bool,
  dialog: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(null, mapDispatchToProps)(AccountPurchaseDialog);
