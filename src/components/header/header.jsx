import React from "react";
import { Plus, UserLogo } from "../../icons";
import { Button } from "../../components";
import Logo from "../../assets/images/logo.png";

const Header = () => {
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
                <Button color="secondary" size="xsmall">
                    <>
                        <UserLogo />
                        <h6>Giriş Yap</h6>
                    </>
                </Button>
            </div>
        </header>
    );
};

export default Header;
