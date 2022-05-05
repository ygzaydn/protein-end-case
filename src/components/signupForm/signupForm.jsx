import React from "react";
import { Formik, Form } from "formik";
import { FormTextInput, Button } from "../";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUpSchema } from "../../constants/schemas";
import { signpageText } from "../../constants/texts";

const SignupForm = ({ fetch }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        fetch(values.email, values.password, values.email);
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
            labelText={signpageText.signupForm.email.label}
            placeholder={signpageText.signupForm.email.placeholder}
            error={Boolean(touched.email && errors.email)}
          />

          <FormTextInput
            id="password"
            name="password"
            type="password"
            onChangeFunc={handleChange}
            value={values.password}
            onBlur={handleBlur}
            labelText={signpageText.signupForm.password.label}
            additionalText=" &nbsp;"
            placeholder={signpageText.signupForm.password.label}
            error={Boolean(touched.password && errors.password)}
          />

          <Button type="submit" color="primary" size="xsmall">
            <h5 style={{ textAlign: "center", width: "100%" }}>
              {signpageText.signupForm.button}
            </h5>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetch: (email, password, username) =>
    dispatch({
      type: "SIGN_UP_START",
      payload: { email, password, username },
    }),
});

SignupForm.propTypes = {
  fetch: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SignupForm);
