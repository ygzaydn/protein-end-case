import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Signin, Logo2 } from "../../assets/images";
import { Text, SignupForm } from "../../components";

const Signup = () => {
    const notify = () =>
        toast.error("Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            progress: undefined,
        });
    return (
        <section className="signup">
            <ToastContainer />
            <div className="signup__imagediv">
                <img
                    src={Signin}
                    alt="sign-in-image"
                    className="signup__imagediv--image"
                />
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
                            <h1>Üye ol</h1>
                        </Text>
                        <Text color="dark" fontWeight="medium">
                            <h5>Fırsatlardan yararlanmak için üye ol!</h5>
                        </Text>
                    </div>

                    <SignupForm />
                </div>
                <div className="signup__lowerdiv">
                    <Text color="dark" display="inline" fontWeight="medium">
                        <h6>Hesabın var mı?</h6>
                    </Text>
                    <Text color="blue" display="inline" fontWeight="medium">
                        <h6 style={{ cursor: "pointer" }} onClick={notify}>
                            Giriş yap
                        </h6>
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default Signup;
