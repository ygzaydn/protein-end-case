import React from "react";
import { Formik, Form } from "formik";
import { FormTextInput, Button } from "..";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signInSchema } from "../../constants/schemas/";

const SignInForm = ({ fetch }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        fetch(values.email, values.password);
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        handleChange,
        values,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit} className="signupform">
          <FormTextInput
            id="email"
            name="email"
            type="email"
            onChangeFunc={handleChange}
            onBlur={handleBlur}
            value={values.email}
            labelText="Email"
            placeholder="Email@example.com"
            error={Boolean(touched.email && errors.email)}
          />

          <FormTextInput
            id="password"
            name="password"
            type="password"
            onChangeFunc={handleChange}
            value={values.password}
            onBlur={handleBlur}
            labelText="Şifre"
            additionalText="Şifremi Unuttum"
            placeholder="Şifre"
            error={Boolean(touched.password && errors.password)}
          />

          <Button
            type="submit"
            color="primary"
            size="xsmall"
            classes={"signupform__button"}
          >
            <h5 style={{ textAlign: "center", width: "100%" }}>Giriş</h5>
          </Button>
        </Form>
      )}
    </Formik>
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
