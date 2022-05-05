import React from "react";
import { Text, Button } from "../";

import PropTypes from "prop-types";
import { buyItem } from "../../utils/axios";

import { connect } from "react-redux";

const ProductDetailPurchaseDialog = ({
  closeFunc,
  item,
  getProducts,
  open,
  startOffer,
  finishOffer,
}) => {
  const buy = async (item) => {
    startOffer();
    const res = await buyItem(item);
    if (res) {
      getProducts();
      finishOffer();
      closeFunc();
    }
  };

  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <div className="dialogbox__content productdetailpurchasedialog">
        <Text color="dark">
          <h2>Satın Al</h2>
        </Text>
        <Text color="dark" fontWeight="light">
          <h3>Satın Almak istiyor musunuz?</h3>
        </Text>
        <div className="productdetailpurchasedialog--buttondiv">
          <Button
            color="secondary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => closeFunc()}
          >
            Vazgeç
          </Button>
          <Button
            color="primary"
            size="small"
            classes="productdetailpurchasedialog--button"
            clickFunc={() => buy(item)}
          >
            Satın Al
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductDetailPurchaseDialog.propTypes = {
  item: PropTypes.object,
  closeFunc: PropTypes.func,
  getProducts: PropTypes.func,
  open: PropTypes.bool,
  startOffer: PropTypes.func,
  finishOffer: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(null, mapDispatchToProps)(ProductDetailPurchaseDialog);
