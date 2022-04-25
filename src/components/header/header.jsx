import React from "react";
import { Plus, UserLogo } from "../../icons";
import { Button } from "../../components";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ auth }) => {
    const navigate = useNavigate();
    const navigateToPage = () => {
        if (auth) {
            navigate("/user");
        } else {
            navigate("/signup");
        }
    };

    return (
        <header className="header">
            <div className="header__logodiv">
                <img src={Logo} alt="ikinciel-logo" />
            </div>
            <div className="header__buttondiv">
                <Button color="secondary" size="xsmall" hideTextonMobile>
                    <>
                        <Plus />
                        <h6>Ürün Ekle</h6>
                    </>
                </Button>
                <Button
                    color="secondary"
                    size="xsmall"
                    clickFunc={() => navigateToPage()}
                >
                    <>
                        <UserLogo />
                        <h6>{auth ? "Hesabım" : "Giriş Yap"}</h6>
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
