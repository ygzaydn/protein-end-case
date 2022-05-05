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

import { additemformText } from "../../constants/texts";

import PropTypes from "prop-types";

import { addItemSchema } from "../../constants/schemas/";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";

const AddItemForm = ({ categories, userId, startOffer, finishOffer }) => {
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [usageList, setUsageList] = useState([]);

  const navigate = useNavigate();

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
        startOffer();
        try {
          const res = await uploadProduct(formData);
          if (res) {
            finishOffer();
            toast.success(`Ürün başarı ile listelendi.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } catch (err) {
          finishOffer();
          toast.error(`Ürün listelemede hata oldu.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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
                <h2>{additemformText.title}</h2>
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
                labelText={additemformText.name.label}
                placeholder={additemformText.name.placeholder}
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
                labelText={additemformText.details.label}
                placeholder={additemformText.details.placeholder}
                multiline
                error={errors.details && touched.details}
              />
            </div>
            <div className="additemform__grid--category">
              <FormSelectInput
                id="category"
                name="category"
                labelText={additemformText.category.label}
                placeholder={additemformText.category.placeholder}
                options={categories.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.category && touched.category}
              />
            </div>
            <div className="additemform__grid--brand">
              <FormSelectInput
                id="brand"
                name="brand"
                labelText={additemformText.brand.label}
                placeholder={additemformText.brand.placeholder}
                options={brandList.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.brand && touched.brand}
              />
            </div>
            <div className="additemform__grid--color">
              <FormSelectInput
                id="color"
                name="color"
                labelText={additemformText.color.label}
                placeholder={additemformText.color.placeholder}
                options={colorList.map((el) => el.name)}
                onChangeFunc={handleChange}
                error={errors.color && touched.color}
              />
            </div>
            <div className="additemform__grid--usage">
              <FormSelectInput
                id="usage"
                name="usage"
                labelText={additemformText.usage.label}
                placeholder={additemformText.usage.placeholder}
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
                labelText={additemformText.price.label}
                placeholder={additemformText.price.placeholder}
                priceLabel
                error={errors.price && touched.price}
              />
            </div>
            <div className="additemform__grid--option">
              <FormCheckboxInput
                id="option"
                name="option"
                type="option"
                uncheckedText={additemformText.option.uncheckedText}
                checkedText={additemformText.option.checkedText}
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
                <h2>{additemformText.image.text}</h2>
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
              <Button type="submit" color="primary" size="large">
                <h5 style={{ textAlign: "center", width: "100%" }}>
                  {additemformText.save}
                </h5>
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
  startOffer: PropTypes.func,
  finishOffer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  categories: state.categories.items,
  userId: state.user.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  startOffer: () => dispatch({ type: "START_OFFER" }),
  finishOffer: () => dispatch({ type: "END_OFFER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
