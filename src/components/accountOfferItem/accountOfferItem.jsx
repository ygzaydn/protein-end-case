import React from "react";
import { ToastContainer } from "react-toastify";
import { Text, Button } from "..";

import { buyItem } from "../../utils/axios";

const AccountOfferItem = ({ item }) => {
  return (
    <>
      {item.product?.id && (
        <div className="accountproductitem">
          <ToastContainer theme="colored" />
          <div className="accountproductitem__imagediv">
            <img
              className="accountproductitem__imagediv--image"
              src={"https://bootcamp.akbolat.net" + item?.product?.image?.url}
            />
          </div>
          <div className="accountproductitem__contentdiv">
            <div>
              <Text
                color="dark"
                fontWeight="medium"
                classes="accountproductitem__contentdiv--title"
              >
                <h2>{item?.product?.name}</h2>
              </Text>
            </div>
            <div>
              <Text
                classes="accountproductitem__contentdiv--offer"
                fontWeight="light"
              >
                <h5>
                  Verilen Teklif: <strong>{item?.offerPrice} TL</strong>
                </h5>
              </Text>
            </div>
          </div>
          <div className="accountproductitem__buttondiv">
            {item?.product.isSold && (
              <Text color="green" fontWeight="light">
                <h4>Satın alındı</h4>
              </Text>
            )}
            {!item?.product?.isSold && (
              <Button
                classes="accountproductitem__buttondiv--button"
                color="primary"
                size="xsmall"
                clickFunc={() => buyItem(item.product)}
              >
                <Text fontWeight="light">
                  <h5>Satın Al</h5>
                </Text>
              </Button>
            )}
            {item?.isStatus === true && (
              <Text color="blue" fontWeight="light">
                <h4>Onaylandı</h4>
              </Text>
            )}
            {item?.isStatus === false && (
              <Text color="red" fontWeight="light">
                <h4>Reddedildi</h4>
              </Text>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountOfferItem;
