import React from "react";
import { Signin } from "../../assets/images";

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
        </section>
    );
};

export default SignIn;
