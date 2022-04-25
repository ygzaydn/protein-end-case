import React from "react";
import { useFormik } from "formik";
import { FormTextInput, Button } from "../";

const SignupForm = () => {
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
            />

            <Button type="submit" color="primary" size="xsmall">
                <h5 style={{ textAlign: "center", width: "100%" }}>Üye ol</h5>
            </Button>
        </form>
    );
};

export default SignupForm;
