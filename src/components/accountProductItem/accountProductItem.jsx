import React, { useState } from "react";
import { Text, Button, ProductDetailPurchaseDialog } from "..";

import { acceptOffer, declineOffer } from "../../utils/axios";

import { connect } from "react-redux";
import { baseURL } from "../../utils/axios";

import PropTypes from "prop-types";
import Loader from "../loader/loader";

const AccountProductItem = ({
  item,
  updateUser,
  userInfo,
  loading,
  startOffer,
  finishOffer,
}) => {
  const [dialog, setDialog] = useState(false);

  const takeOffer = async (item) => {
    startOffer();
    try {
      const res = await acceptOffer(item);
      if (res) {
        updateUser(userInfo.id);
        finishOffer();
      }
    } catch (err) {
      console.log(err);
      finishOffer();
    }
  };
  const rejectOffer = async (item) => {
    startOffer();
    try {
      const res = await rejectOffer(item);
      if (res) {
        updateUser(userInfo.id);
        finishOffer();
      }
    } catch (err) {
      console.log(err);
      finishOffer();
    }
  };

  const closeDialog = () => setDialog(false);
  return (
    <div className="accountproductitem">
      <ProductDetailPurchaseDialog
        open={dialog}
        clickFunc={
          dialog === "accept" ? () => acceptOffer() : () => declineOffer()
        }
        item={item}
        closeFunc={() => closeDialog()}
      />

      <Loader open={loading} />
      <div className="accountproductitem__imagediv">
        <img
          className="accountproductitem__imagediv--image"
          src={baseURL + item.image.url}
        />
      </div>
      <div className="accountproductitem__contentdiv">
        <div>
          <Text
            color="dark"
            fontWeight="medium"
            classes="accountproductitem__contentdiv--title"
          >
            <h2>{item.name}</h2>
          </Text>
        </div>
        <div>
          {item?.offers?.length ? (
            <Text
              classes="accountproductitem__contentdiv--offer"
              fontWeight="light"
            >
              <h5>
                Alınan Teklif:{" "}
                <strong>
                  {item.offers[item.offers.length - 1].offerPrice} TL{" "}
                </strong>
              </h5>
            </Text>
          ) : (
            <Text
              fontWeight="light"
              color="red"
              classes="accountproductitem__contentdiv--nooffer"
            >
              {!item.isSold && <h5>Üründe herhangi bir teklif yok</h5>}
            </Text>
          )}
        </div>
      </div>
      <div className="accountproductitem__buttondiv">
        {!item?.isSold &&
          item?.offers &&
          item?.offers[item.offers.length - 1]?.isStatus == null && (
            <Button
              classes="accountproductitem__buttondiv--button"
              color="primary"
              size="xsmall"
              clickFunc={() => takeOffer(item.offers[item.offers.length - 1])}
            >
              <Text fontWeight="light">
                <h5>Onayla</h5>
              </Text>
            </Button>
          )}
        {!item?.isSold &&
          item?.offers &&
          item?.offers[item.offers.length - 1]?.isStatus == null && (
            <Button
              classes="accountproductitem__buttondiv--button"
              color="red"
              size="xsmall"
              clickFunc={() => rejectOffer(item.offers[item.offers.length - 1])}
            >
              <Text fontWeight="light">
                <h5>Reddet</h5>
              </Text>
            </Button>
          )}
        {item.isSold && (
          <Text
            color="green"
            fontWeight="light"
            classes="accountproductitem__buttondiv--text"
          >
            <h4>Satıldı</h4>
          </Text>
        )}
        {!item?.isSold &&
          item?.offers &&
          item?.offers[item.offers.length - 1]?.isStatus === true && (
            <Text color="blue" fontWeight="light">
              <h4>Onaylandı</h4>
            </Text>
          )}
        {!item?.isSold &&
          item?.offers &&
          item?.offers[item.offers.length - 1]?.isStatus === false && (
            <Text color="red" fontWeight="light">
              <h4>Reddedildi</h4>
            </Text>
          )}
      </div>
    </div>
  );
};

AccountProductItem.propTypes = {
  item: PropTypes.object,
  userInfo: PropTypes.object,
  updateUser: PropTypes.func,
  loading: PropTypes.bool,
  startOffer: PropTypes.func,
  finishOffer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
  loading: state.product.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id) => dispatch({ type: "UPDATE_USER", payload: { id } }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountProductItem);
