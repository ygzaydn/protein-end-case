import React, { useState } from "react";
import { Text, Button, AccountPurchaseDialog } from "..";

import { buyItem } from "../../utils/axios";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { baseURL } from "../../utils/axios";
import { toast } from "react-toastify";
import { accountpageText } from "../../constants/texts";

const AccountOfferItem = ({
  item,
  updateUser,
  userInfo,
  startOffer,
  finishOffer,
}) => {
  const [dialog, setDialog] = useState(false);

  const buy = async (item) => {
    startOffer();
    try {
      const res = await buyItem(item);
      if (res) {
        updateUser(userInfo.id);
        finishOffer();
        setDialog(false);
        toast.success(`Satın alma başarılı.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      finishOffer();
      setDialog(false);
      toast.error(`Satın alma sırasında hata oluştu.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {item?.product?.id !== undefined && (
        <div className="accountproductitem">
          <AccountPurchaseDialog
            open={Boolean(dialog)}
            approveFunc={(id) => buy(id)}
            id={item}
            closeFunc={() => setDialog(false)}
          />
          <div className="accountproductitem__imagediv" role="img">
            <img
              className="accountproductitem__imagediv--image"
              src={baseURL + item?.product?.image?.url}
              alt={item?.product?.name}
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
                {item?.product?.name}
              </Text>
            </div>
            <div>
              <Text
                classes="accountproductitem__contentdiv--offer"
                fontWeight="light"
                size="h5"
              >
                {accountpageText.offerTo}
                <strong>{item?.offerPrice} TL</strong>
              </Text>
            </div>
          </div>
          <div className="accountproductitem__buttondiv">
            {item?.product?.isSold && (
              <Text
                color="green"
                fontWeight="light"
                classes="accountproductitem__buttondiv--text"
                size="h4"
              >
                {accountpageText.bought}
              </Text>
            )}
            {!item?.product?.isSold && item?.isStatus && (
              <Button
                classes="accountproductitem__buttondiv--button"
                color="primary"
                size="xsmall"
                clickFunc={() => setDialog(true)}
              >
                <Text fontWeight="light" size="h5">
                  {accountpageText.buy}
                </Text>
              </Button>
            )}
            {!item?.product?.isSold && item?.isStatus && (
              <Text color="blue" fontWeight="light" size="h4">
                {accountpageText.approved}
              </Text>
            )}
            {!item?.product?.isSold && item?.isStatus === false && (
              <Text color="red" fontWeight="light" size="h4">
                {accountpageText.refused}
              </Text>
            )}
          </div>
        </div>
      )}
    </>
  );
};

AccountOfferItem.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountOfferItem);
