import React from "react";
import { ToastContainer } from "react-toastify";
import { Text, Button, Loader } from "..";

import { buyItem } from "../../utils/axios";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { baseURL } from "../../utils/axios";

const AccountOfferItem = ({
  item,
  updateUser,
  userInfo,
  loading,
  startOffer,
  finishOffer,
}) => {
  const buy = async (item) => {
    startOffer();
    try {
      const res = await buyItem(item);
      if (res) {
        updateUser(userInfo.id);
        finishOffer();
      }
    } catch (err) {
      console.log(err);
      finishOffer();
    }
  };

  return (
    <div className="accountproductitem">
      <Loader open={loading} />
      <ToastContainer theme="colored" />
      <div className="accountproductitem__imagediv">
        <img
          className="accountproductitem__imagediv--image"
          src={baseURL + item?.image?.url}
        />
      </div>
      <div className="accountproductitem__contentdiv">
        <div>
          <Text
            color="dark"
            fontWeight="medium"
            classes="accountproductitem__contentdiv--title"
          >
            <h2>{item?.name}</h2>
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
        {item?.isSold && (
          <Text
            color="green"
            fontWeight="light"
            classes="accountproductitem__buttondiv--text"
          >
            <h4>Satın alındı</h4>
          </Text>
        )}
        {!item?.isSold && (
          <Button
            classes="accountproductitem__buttondiv--button"
            color="primary"
            size="xsmall"
            clickFunc={() => buy(item)}
          >
            <Text fontWeight="light">
              <h5>Satın Al</h5>
            </Text>
          </Button>
        )}
        {!item?.isSold && item?.isStatus === true && (
          <Text color="blue" fontWeight="light">
            <h4>Onaylandı</h4>
          </Text>
        )}
        {!item?.isSold && item?.isStatus === false && (
          <Text color="red" fontWeight="light">
            <h4>Reddedildi</h4>
          </Text>
        )}
      </div>
    </div>
  );
};

AccountOfferItem.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountOfferItem);
