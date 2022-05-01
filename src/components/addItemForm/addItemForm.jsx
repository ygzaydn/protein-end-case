import React from "react";
import { Formik, Form } from "formik";
import { FormTextInput, Button, FormSelectInput, FormCheckboxInput } from "..";

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
          <div className="grid-2">
            <FormSelectInput
              id="category"
              name="category"
              labelText="Kategori"
              placeholder="Kategori Seç"
              options={[1, 2, 3, 4, 5]}
            />

            <FormSelectInput
              id="color"
              name="color"
              labelText="Marka"
              placeholder="Marka seç"
              options={[1, 2, 3, 4, 5]}
            />

            <FormSelectInput
              id="color"
              name="color"
              labelText="Renk"
              placeholder="Renk Seç"
              options={[1, 2, 3, 4, 5]}
            />

            <FormSelectInput
              id="usage"
              name="usage"
              labelText="Kullanım Durumu"
              placeholder="Kullanım Durumu Seç"
              options={[1, 2, 3, 4, 5]}
            />
          </div>
          <FormTextInput
            id="price"
            name="price"
            type="price"
            onChangeFunc={handleChange}
            onBlur={handleBlur}
            value={values.price}
            labelText="Fiyat"
            placeholder="Bir Fiyat Girin"
            priceLabel
          />
          <FormCheckboxInput
            id="option"
            name="option"
            type="price"
            uncheckedText="Teklif Opsiyonu"
            checkedText="Fiyat ve Teklif Opsiyonu"
            onChangeFunc={handleChange}
            onBlur={handleBlur}
            errors={errors.option && touched.option}
            value={values.option}
          />
        </Form>
      )}
    </Formik>
  );
};

AddItemForm.propTypes = {};

export default AddItemForm;
