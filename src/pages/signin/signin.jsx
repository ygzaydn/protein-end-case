import React from "react";
import { Signin, Logo2 } from "../../assets/images";
import { Text, SignupForm } from "../../components";

const SignIn = () => {
    return (
        <section className="signin">
            <div className="signin__imagediv">
                <img
                    src={Signin}
                    alt="sign-in-image"
                    className="signin__imagediv--image"
                />
            </div>
            <div className="signin__contentdiv">
                <div className="signin__logodiv">
                    <img
                        src={Logo2}
                        alt="ikinciel-logo"
                        className="signin__logodiv--logo"
                    />
                </div>
                <div className="signin__formdiv">
                    <div className="signin__formdiv--text">
                        <Text color="dark" fontWeight="bold">
                            <h1>Üye ol</h1>
                        </Text>
                        <Text color="dark" fontWeight="medium">
                            <h5>Fırsatlardan yararlanmak için üye ol!</h5>
                        </Text>
                    </div>

                    <SignupForm />
                </div>
                <div className="signin__lowerdiv">
                    <Text color="dark" display="inline" fontWeight="medium">
                        <h6>Hesabın var mı?</h6>
                    </Text>
                    <Text color="blue" display="inline" fontWeight="medium">
                        <h6 style={{ cursor: "pointer" }}>Giriş yap</h6>
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
