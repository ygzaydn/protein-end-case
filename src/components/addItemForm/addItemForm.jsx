import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  FormTextInput,
  Button,
  FormSelectInput,
  FormCheckboxInput,
  Text,
  FormUploadInput,
} from "..";

import { connect } from "react-redux";

import {
  uploadProduct,
  brands,
  colors,
  usages,
  addBrand,
} from "../../utils/axios";
import PropTypes from "prop-types";

import { addItemSchema } from "../../constants/schemas/";

const AddItemForm = ({ categories, userId }) => {
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [usageList, setUsageList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const brand = await brands();
      const color = await colors();
      const usage = await usages();
      return { brand, color, usage };
    };
    getData().then((res) => {
      setBrandList(res.brand.data);
      setColorList(res.color.data);
      setUsageList(res.usage.data);
    });
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        details: "",
        category: "",
        brand: "",
        color: "",
        usage: "",
        price: 0,
        option: false,
        file: {},
      }}
      validationSchema={addItemSchema}
      onSubmit={async (values) => {
        const {
          name,
          details,
          category,
          brand,
          color,
          usage,
          price,
          option,
          file,
        } = values;

        if (!brandList.find((el) => el.name === brand)) {
        }
        if (!categories.find((el) => el.name === category)) {
        }
        if (!colorList.find((el) => el.name === color)) {
        }
        if (!usageList.find((el) => el.name === usage)) {
        }

        const data = {
          name,
          description: details,
          category: categories.find((el) => el.name === category).id,
          brand,
          color,
          status: usage,
          price: parseInt(price),
          isOfferable: option,
          isSold: false,
          users_permissions_user: userId,
        };

        const stringifiedData = JSON.stringify(data);
        let formData = new FormData();
        formData.append("files.image", file);
        formData.append("data", stringifiedData);

        uploadProduct(formData);
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        handleChange,
        values,
        handleBlur,
        setFieldValue,
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
                labelText="Ürün Adı*"
                placeholder="Örnek: Iphone 12 Pro Max"
                error={errors.name && touched.name}
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
                labelText="Açıklama*"
                placeholder="Ürün açıklaması girin"
                multiline
                error={errors.details && touched.details}
              />
            </div>
            <div className="additemform__grid--category">
              <FormSelectInput
                id="category"
                name="category"
                labelText="Kategori*"
                placeholder="Kategori Seç"
                options={categories.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.category && touched.category}
              />
            </div>
            <div className="additemform__grid--brand">
              <FormSelectInput
                id="brand"
                name="brand"
                labelText="Marka*"
                placeholder="Marka seç"
                options={brandList.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.brand && touched.brand}
              />
            </div>
            <div className="additemform__grid--color">
              <FormSelectInput
                id="color"
                name="color"
                labelText="Renk*"
                placeholder="Renk Seç"
                options={colorList.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.color && touched.color}
              />
            </div>
            <div className="additemform__grid--usage">
              <FormSelectInput
                id="usage"
                name="usage"
                labelText="Kullanım Durumu*"
                placeholder="Kullanım Durumu Seç"
                options={usageList.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.usage && touched.usage}
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
                labelText="Fiyat*"
                placeholder="Bir Fiyat Girin"
                priceLabel
                error={errors.price && touched.price}
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
                error={errors.option && touched.option}
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
            <FormUploadInput
              id="file"
              name="file"
              value={values.file}
              onChangeFunc={setFieldValue}
              error={errors.file}
            />
            <div className="additemform__upload--button">
              <Button
                type="submit"
                color="primary"
                size="large"
                //clickFunc={() => upload(values.file)}
              >
                <h5 style={{ textAlign: "center", width: "100%" }}>Kaydet</h5>
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddItemForm.propTypes = {
  categories: PropTypes.array,
  userId: PropTypes.number,
};

const mapStateToProps = (state) => ({
  categories: state.categories.items,
  userId: state.user.currentUser.id,
});

export default connect(mapStateToProps, null)(AddItemForm);
