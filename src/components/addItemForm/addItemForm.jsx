import React from "react";
import { Formik, Form } from "formik";
import {
  FormTextInput,
  Button,
  FormSelectInput,
  FormCheckboxInput,
  Text,
  FormUploadInput,
} from "..";

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
        file: "",
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
          <div className="additemform__grid">
            <div className="additemform__grid--title">
              <Text
                fontWeight="bold"
                color="dark"
                classes="addproductpage__content--detailsdiv--title"
              >
                <h2>Ürün Detayları</h2>
              </Text>
            </div>

            <div className="additemform__grid--name">
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
            </div>
            <div className="additemform__grid--details">
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
            </div>
            <div className="additemform__grid--category">
              <FormSelectInput
                id="category"
                name="category"
                labelText="Kategori"
                placeholder="Kategori Seç"
                options={[1, 2, 3, 4, 5]}
              />
            </div>
            <div className="additemform__grid--brand">
              <FormSelectInput
                id="brand"
                name="brand"
                labelText="Marka"
                placeholder="Marka seç"
                options={[1, 2, 3, 4, 5]}
              />
            </div>
            <div className="additemform__grid--color">
              <FormSelectInput
                id="color"
                name="color"
                labelText="Renk"
                placeholder="Renk Seç"
                options={[1, 2, 3, 4, 5]}
              />
            </div>
            <div className="additemform__grid--usage">
              <FormSelectInput
                id="usage"
                name="usage"
                labelText="Kullanım Durumu"
                placeholder="Kullanım Durumu Seç"
                options={[1, 2, 3, 4, 5]}
              />
            </div>
            <div className="additemform__grid--price">
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
            </div>
            <div className="additemform__grid--option">
              <FormCheckboxInput
                id="option"
                name="option"
                type="option"
                uncheckedText="Teklif Opsiyonu"
                checkedText="Fiyat ve Teklif Opsiyonu"
                onChangeFunc={handleChange}
                onBlur={handleBlur}
                errors={errors.option && touched.option}
                value={values.option}
              />
            </div>
          </div>
          <div className="additemform__upload">
            <div className="additemform__upload--title">
              <Text
                fontWeight="bold"
                color="dark"
                classes="addproductpage__content--detailsdiv--title"
              >
                <h2>Ürün Görseli</h2>
              </Text>
            </div>
            <FormUploadInput value={values.file} onChangeFunc={handleChange} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddItemForm.propTypes = {};

export default AddItemForm;
