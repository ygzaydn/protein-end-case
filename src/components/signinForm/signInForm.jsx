import React from "react";
import { useFormik } from "formik";
import { FormTextInput, Button } from "..";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignInForm = ({ fetch }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        //validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="signupform">
            <FormTextInput
                id="email"
                name="email"
                type="email"
                onChangeFunc={formik.handleChange}
                value={formik.values.email}
                labelText="Email"
            />

            <FormTextInput
                id="password"
                name="password"
                type="password"
                onChangeFunc={formik.handleChange}
                value={formik.values.password}
                labelText="Şifre"
                additionalText="Şifremi Unuttum"
            />

            <Button
                type="submit"
                color="primary"
                size="xsmall"
                classes={"signupform__button"}
                clickFunc={() =>
                    fetch(formik.values.email, formik.values.password)
                }
            >
                <h5 style={{ textAlign: "center", width: "100%" }}>Giriş</h5>
            </Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetch: (email, password) =>
        dispatch({
            type: "SIGN_IN_START",
            payload: { email, password },
        }),
});

SignInForm.propTypes = {
    fetch: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SignInForm);
