import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Header, Text, PageOptions, AccountItemGrid } from "../../components";
import { Profile } from "../../icons";
import { useNavigate } from "react-router";

import PropTypes from "prop-types";

const Account = ({ checkUser, userInfo, auth }) => {
  const [option, setOption] = useState("offers");
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <section className="accountpage">
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
              active={option === "offers"}
              clickFunc={() => setOption("offers")}
              text="Teklif Aldıklarım"
            />
            <PageOptions
              active={option === "products"}
              clickFunc={() => setOption("products")}
              text="Teklif Verdiklerim"
            />
          </div>
          <div className="accountpage__detailsdiv">
            <AccountItemGrid
              option={option}
              nullText={
                option === "offers"
                  ? "Listelenmiş bir ürününüz bulunmuyor."
                  : "Teklif verdiğiniz bir ürün bulunmuyor."
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
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
  auth: state.user.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch({ type: "CHECK_USER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
