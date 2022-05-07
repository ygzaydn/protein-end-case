import React, { useState } from "react";
import { Text, Button, AccountOfferDialog } from "..";

import { acceptOffer, declineOffer } from "../../utils/axios";

import { connect } from "react-redux";
import { baseURL } from "../../utils/axios";
import { accountpageText } from "../../constants/texts";

import PropTypes from "prop-types";

const AccountProductItem = ({
  item,
  updateUser,
  userInfo,
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
        setDialog(false);
      }
    } catch (err) {
      console.log(err);
      finishOffer();
      setDialog(false);
    }
  };

  const rejectOffer = async (item) => {
    startOffer();
    try {
      const res = await declineOffer(item);
      if (res) {
        updateUser(userInfo.id);
        finishOffer();
        setDialog(false);
      }
    } catch (err) {
      console.log(err);
      finishOffer();
      setDialog(false);
    }
  };
  const closeDialog = () => setDialog(false);

  return (
    <div className="accountproductitem">
      <AccountOfferDialog
        open={Boolean(dialog)}
        approveFunc={
          dialog === "accept" ? (id) => takeOffer(id) : (id) => rejectOffer(id)
        }
        id={item}
        closeFunc={() => closeDialog()}
        dialog={dialog === "accept" ? "accept" : "reject"}
      />

      <div className="accountproductitem__imagediv" role="img">
        <img
          className="accountproductitem__imagediv--image"
          src={baseURL + item?.item?.image.url}
          alt={item.item?.name}
        />
      </div>
      <div className="accountproductitem__contentdiv">
        <div>
          <Text
            color="dark"
            fontWeight="medium"
            classes="accountproductitem__contentdiv--title"
            size="h2"
          >
            {item.item?.name}
          </Text>
        </div>
        <div>
          <Text
            classes="accountproductitem__contentdiv--offer"
            fontWeight="light"
            size="h5"
          >
            {accountpageText.offer} <strong>{item?.offerPrice} TL </strong>
          </Text>
        </div>
      </div>
      <div className="accountproductitem__buttondiv">
        {!item?.item.isSold && item?.isStatus == null && (
          <Button
            classes="accountproductitem__buttondiv--button"
            color="primary"
            size="xsmall"
            clickFunc={() => setDialog("accept")}
          >
            <Text fontWeight="light" size="h5">
              {accountpageText.approve}
            </Text>
          </Button>
        )}
        {!item?.item.isSold && item?.isStatus == null && (
          <Button
            classes="accountproductitem__buttondiv--button"
            color="red"
            size="xsmall"
            clickFunc={() => setDialog("reject")}
          >
            <Text fontWeight="light" size="h5">
              {accountpageText.refuse}
            </Text>
          </Button>
        )}
        {item?.item.isSold && (
          <Text
            color="green"
            fontWeight="light"
            classes="accountproductitem__buttondiv--text"
            size="h4"
          >
            {accountpageText.sold}
          </Text>
        )}
        {!item?.item.isSold && item?.isStatus === true && (
          <Text
            color="blue"
            fontWeight="light"
            classes="accountproductitem__buttondiv--text"
            size="h4"
          >
            {accountpageText.approved}
          </Text>
        )}
        {!item?.item.isSold && item?.isStatus === false && (
          <Text
            color="red"
            fontWeight="light"
            classes="accountproductitem__buttondiv--text"
            size="h4"
          >
            {accountpageText.refused}
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
  startOffer: PropTypes.func,
  finishOffer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id) => dispatch({ type: "UPDATE_USER", payload: { id } }),
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountProductItem);
