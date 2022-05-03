import React, { useState, useEffect } from "react";
import { Signin, Logo2 } from "../../assets/images";
import { Text, SignupForm, SignInForm } from "../../components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import { ToastContainer } from "react-toastify";

const Signup = ({ auth }) => {
  const [page, setPage] = useState("signup");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <section className="signup">
      <ToastContainer theme="colored" />
      <div className="signup__imagediv">
        <img src={Signin} alt="sign-in" className="signup__imagediv--image" />
      </div>
      <div className="signup__contentdiv">
        <div className="signup__logodiv">
          <img
            src={Logo2}
            alt="ikinciel-logo"
            className="signup__logodiv--logo"
          />
        </div>
        <div className="signup__formdiv">
          <div className="signup__formdiv--text">
            <Text color="dark" fontWeight="bold">
              <h1>{page === "signup" ? "Üye ol" : "Giriş yap"}</h1>
            </Text>
            <Text color="dark" fontWeight="medium">
              <h5>
                {page === "signup"
                  ? "Fırsatlardan yararlanmak için üye ol!"
                  : "Fırsatlardan yararlanmak için giriş yap!"}
              </h5>
            </Text>
          </div>
          {page === "signup" ? <SignupForm /> : <SignInForm />}
        </div>
        <div className="signup__lowerdiv">
          <Text color="dark" display="inline" fontWeight="medium">
            <h6>
              {page === "signup" ? " Hesabın var mı? " : " Hesabın yok mu? "}
            </h6>
          </Text>
          <Text color="blue" display="inline" fontWeight="medium">
            {page === "signup" ? (
              <h6
                style={{ cursor: "pointer" }}
                onClick={() => setPage("signin")}
              >
                Giriş yap
              </h6>
            ) : (
              <h6
                style={{ cursor: "pointer" }}
                onClick={() => setPage("signup")}
              >
                Üye ol
              </h6>
            )}
          </Text>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.authenticated,
});

Signup.propTypes = {
  auth: PropTypes.bool,
};

export default connect(mapStateToProps, null)(Signup);
