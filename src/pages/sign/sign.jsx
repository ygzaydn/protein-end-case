import React, { useState, useEffect } from "react";
import { Signin, Logo2 } from "../../assets/images";
import { Text, SignupForm, SignInForm, Loader } from "../../components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import { signpageText } from "../../constants/texts";

const Sign = ({ auth, loading }) => {
  const [page, setPage] = useState("signup");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <section className="sign">
      <Loader open={loading} />
      <div className="sign__imagecontainer" role="img">
        <img src={Signin} alt="sign" className="sign__imagecontainer--image" />
      </div>

      <div className="sign__content">
        <div className="sign__logocontainer" role="img">
          <img
            src={Logo2}
            alt="ikinciel-logo"
            className="sign__logocontainer--logo"
          />
        </div>

        <div className="sign__form">
          <div className="sign__form--text">
            <Text color="dark" fontWeight="bold" size="h1">
              {page === "signup" ? signpageText.signup : signpageText.signin}
            </Text>
            <Text
              color="dark"
              fontWeight="light"
              classes="sign__form--lowertext"
              size="h5"
            >
              {page === "signup"
                ? signpageText.signupHeader
                : signpageText.signinHeader}
            </Text>
          </div>

          {page === "signup" ? <SignupForm /> : <SignInForm />}

          <div className="sign__lowercontainer">
            <Text color="dark" display="inline" fontWeight="medium" size="h6">
              {page === "signup"
                ? signpageText.accountText1
                : signpageText.accountText2}
            </Text>
            <Text
              color="blue"
              display="inline"
              fontWeight="medium"
              size="h6"
              clickFunc={
                page === "signup"
                  ? () => setPage("signin")
                  : () => setPage("signup")
              }
              classes="pointer__cursor margin__left"
            >
              {page === "signup"
                ? " " + signpageText.signin
                : " " + signpageText.signup}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.authenticated,
  loading: state.user.loading,
});

Sign.propTypes = {
  auth: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, null)(Sign);
