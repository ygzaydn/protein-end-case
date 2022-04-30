import React from "react";
import { Formik, Form } from "formik";
import { FormTextInput, Button } from "..";

import PropTypes from "prop-types";

import { addItemSchema } from "../../constants/schemas/";

const AddItemForm = ({}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        details: "",
        category: "",
        brand: "",
        color: "",
        usage: "",
        price: "",
        option: false,
      }}
      validationSchema={addItemSchema}
      onSubmit={(values) => {}}
    >
      {({
        errors,
        touched,
        handleSubmit,
        handleChange,
        values,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit} className="additemform">
          <FormTextInput
            id="name"
            name="name"
            type="name"
            onChangeFunc={handleChange}
            onBlur={handleBlur}
            value={values.name}
            labelText="Ürün Adı"
            placeholder="Örnek: Iphone 12 Pro Max"
          />

          <FormTextInput
            id="details"
            name="details"
            type="details"
            onChangeFunc={handleChange}
            onBlur={handleBlur}
            value={values.details}
            labelText="Açıklama"
            placeholder="Ürün açıklaması girin"
            multiline
          />
        </Form>
      )}
    </Formik>
  );
};

AddItemForm.propTypes = {};

export default AddItemForm;
