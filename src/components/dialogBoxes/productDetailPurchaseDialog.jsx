import React from "react";
import { Text, Button } from "../";

import PropTypes from "prop-types";
import { buyItem } from "../../utils/axios";
import { ToastContainer } from "react-toastify";

import { connect } from "react-redux";

const ProductDetailPurchaseDialog = ({
  closeFunc,
  item,
  getProducts,
  open,
}) => {
  const buy = async (item) => {
    const res = await buyItem(item);
    if (res) {
      getProducts();
      setTimeout(() => {
        closeFunc();
      }, 1000);
    }
  };

  return (
    <div className={open ? "dialogbox dialogbox--open" : "dialogbox"}>
      <ToastContainer theme="colored" />
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
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
});

export default connect(null, mapDispatchToProps)(ProductDetailPurchaseDialog);
