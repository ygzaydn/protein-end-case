import React, { useState, useEffect } from "react";
import { Signin, Logo2 } from "../../assets/images";
import { Text, SignupForm, SignInForm, Loader } from "../../components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import { ToastContainer } from "react-toastify";
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
      <ToastContainer theme="colored" />
      <Loader open={loading} />
      <div className="sign__imagecontainer">
        <img src={Signin} alt="sign" className="sign__imagecontainer--image" />
      </div>

      <div className="sign__content">
        <div className="sign__logocontainer">
          <img
            src={Logo2}
            alt="ikinciel-logo"
            className="sign__logocontainer--logo"
          />
        </div>

        <div className="sign__form">
          <div className="sign__form--text">
            <Text color="dark" fontWeight="bold">
              <h1>
                {page === "signup" ? signpageText.signup : signpageText.signin}
              </h1>
            </Text>
            <Text
              color="dark"
              fontWeight="light"
              classes="sign__form--lowertext"
            >
              <h5>
                {page === "signup"
                  ? signpageText.signupHeader
                  : signpageText.signinHeader}
              </h5>
            </Text>
          </div>

          {page === "signup" ? <SignupForm /> : <SignInForm />}

          <div className="sign__lowercontainer">
            <Text color="dark" display="inline" fontWeight="medium">
              <h6>
                {page === "signup"
                  ? signpageText.accountText1
                  : signpageText.accountText2}
              </h6>
            </Text>
            <Text color="blue" display="inline" fontWeight="medium">
              {page === "signup" ? (
                <h6
                  style={{ cursor: "pointer" }}
                  onClick={() => setPage("signin")}
                >
                  &nbsp;{signpageText.signin}
                </h6>
              ) : (
                <h6
                  style={{ cursor: "pointer" }}
                  onClick={() => setPage("signup")}
                >
                  &nbsp;{signpageText.signup}
                </h6>
              )}
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
