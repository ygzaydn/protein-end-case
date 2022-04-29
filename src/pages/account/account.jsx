import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Header, Text, PageOptions } from "../../components";
import { Profile } from "../../icons";

import PropTypes from "prop-types";

const Account = ({ checkUser, userInfo }) => {
  const [option, setOption] = useState(0);

  useEffect(() => {
    checkUser();
  }, []);

  console.log(userInfo);

  return (
    <section className="accountpage">
      <div className="accountpage__headerdiv">
        <Header />
      </div>
      <div className="accountpage__contentdiv">
        <div className="accountpage__infodiv">
          <Profile />
          <Text color="dark">
            <h5>{userInfo.email}</h5>
          </Text>
        </div>
        <div className="accountpage__productsdiv">
          <div className="accountpage__productsdiv--options">
            <PageOptions
              active={option === 0}
              clickFunc={() => setOption(0)}
              text="Teklif Aldıklarım"
            />
            <PageOptions
              active={option === 1}
              clickFunc={() => setOption(1)}
              text="Teklif Verdiklerim"
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
};

const mapStateToProps = (state) => ({
  userInfo: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch({ type: "CHECK_USER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
