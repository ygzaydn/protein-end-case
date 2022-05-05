import React from "react";
import { Plus, UserLogo } from "../../icons";
import { Button } from "../../components";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { headerText } from "../../constants/texts";

const Header = ({ auth }) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    if (auth) {
      navigate("/account");
    } else {
      navigate("/sign");
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={Logo}
          alt="ikinciel-logo"
          onClick={() => navigate("/")}
          className="header__logo--image"
        />
      </div>
      <div className="header__buttons">
        {auth && (
          <Button
            color="secondary"
            size="xsmall"
            hideTextonMobile
            clickFunc={() => navigate("/addproduct")}
          >
            <>
              <Plus />
              <h5>{headerText.addProduct}</h5>
            </>
          </Button>
        )}

        <Button
          color="secondary"
          size="xsmall"
          clickFunc={() => navigateToPage()}
          classes="header__buttons--button"
        >
          <>
            <UserLogo />
            <h5>{auth ? headerText.account : headerText.login}</h5>
          </>
        </Button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.authenticated,
});

Header.propTypes = {
  auth: PropTypes.bool,
};

export default connect(mapStateToProps, null)(Header);
