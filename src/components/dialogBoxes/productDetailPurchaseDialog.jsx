import React, { useState } from "react";
import { Text, Button } from "..";

import PropTypes from "prop-types";

const ProductDetailPurchaseDialog = ({ closeFunc, item }) => {
  return (
    <div className="dialogbox">
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
};

export default ProductDetailPurchaseDialog;
