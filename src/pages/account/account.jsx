import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  Header,
  Text,
  PageOptions,
  AccountItemGrid,
  ProductDetailPurchaseDialog,
} from "../../components";
import { Profile } from "../../icons";
import { useNavigate } from "react-router";

import PropTypes from "prop-types";

const Account = ({ updateUser, checkUser, userInfo, auth }) => {
  const [dialogBox, setDialogBox] = useState({ open: false, item: null });
  const [option, setOption] = useState("products");
  const navigate = useNavigate();

  const closeDialogBox = () =>
    setDialogBox((prev) => ({ ...prev, open: false }));

  useEffect(() => {
    updateUser(userInfo.id);

    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <section className="accountpage">
      {dialogBox.open && (
        <ProductDetailPurchaseDialog
          closeFunc={closeDialogBox}
          item={dialogBox.item}
        />
      )}
      <div className="accountpage__headerdiv">
        <Header />
      </div>
      <div className="accountpage__contentdiv">
        <div className="accountpage__infodiv">
          <Profile />
          <Text color="dark">
            <h5>{userInfo?.email}</h5>
          </Text>
        </div>
        <div className="accountpage__productsdiv">
          <div className="accountpage__productsdiv--options">
            <PageOptions
              active={option === "products"}
              clickFunc={() => setOption("products")}
              text="Teklif Aldıklarım"
            />
            <PageOptions
              active={option === "offers"}
              clickFunc={() => setOption("offers")}
              text="Teklif Verdiklerim"
            />
          </div>
          <div className="accountpage__detailsdiv">
            <AccountItemGrid
              data={option === "offers" ? userInfo.offers : userInfo.products}
              option={option}
              nullText={
                option === "offers"
                  ? "Mevcut bir teklifiniz bulunmuyor."
                  : "Listelenmiş bir ürününüz bulunmuyor."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  checkUser: PropTypes.func,
  userInfo: PropTypes.object,
  auth: PropTypes.bool,
  updateUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
  auth: state.user.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch({ type: "CHECK_USER" }),
  updateUser: (id) => dispatch({ type: "UPDATE_USER", payload: { id } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
