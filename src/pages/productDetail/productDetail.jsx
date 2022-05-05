import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import {
  Header,
  SkeletonImage,
  SkeletonText,
  Text,
  Button,
  ProductDetailOfferDialog,
  ProductDetailPurchaseDialog,
  Loader,
} from "../../components";

import { ToastContainer } from "react-toastify";
import { useWindowContext } from "../../contexts/windowContext";

import PropTypes from "prop-types";
import { productdetailpageText } from "../../constants/texts";

const initialState = {
  name: null,
  brand: null,
  color: null,
  description: null,
  isOfferable: null,
  price: null,
  image: null,
};

const ProductDetail = ({ products, auth, getProducts, loading }) => {
  const [productDetail, setProductDetail] = useState({ ...initialState });
  const [dialogBoxes, setDialogBoxes] = useState({
    offer: false,
    purchase: false,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const openOfferDialogBox = () => {
    setDialogBoxes((prev) => ({ ...prev, offer: true }));
  };

  const openPurchaseDialogBox = () => {
    setDialogBoxes((prev) => ({ ...prev, purchase: true }));
  };

  const closeOfferDialogBox = () => {
    setDialogBoxes((prev) => ({ ...prev, offer: false }));
  };

  const closePurchaseDialogBox = () => {
    setDialogBoxes((prev) => ({ ...prev, purchase: false }));
  };

  const mode = useWindowContext();

  useEffect(() => {
    getProducts();
    const index = pathname.split(":")[1];
    const res = products.filter((el) => el.id == index)[0];
    if (res?.id) {
      setProductDetail(products.filter((el) => el.id == index)[0]);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const index = pathname.split(":")[1];
    setProductDetail(products.filter((el) => el.id == index)[0]);
  }, [products]);

  const {
    name,
    brand,
    color,
    description,
    isSold,
    isOfferable,
    price,
    image,
    status,
  } = productDetail;

  return (
    <section className="productdetailpage">
      <ToastContainer theme="colored" />
      <ProductDetailOfferDialog
        closeFunc={() => closeOfferDialogBox()}
        item={productDetail}
        open={dialogBoxes.offer}
      />

      <ProductDetailPurchaseDialog
        closeFunc={() => closePurchaseDialogBox()}
        item={productDetail}
        open={dialogBoxes.purchase}
      />
      <Loader open={loading} />

      <div className="productdetailpage__header">
        <Header />
      </div>
      <div className="productdetailpage__content">
        <div className="productdetailpage__product">
          <SkeletonImage
            loading={Boolean(image)}
            url={image?.url}
            description={name}
            containerClass="productdetailpage__product--imagediv"
            imageClass="productdetailpage__product--image"
          />
          <div className="productdetailpage__product--infodiv">
            <SkeletonText
              loading={Boolean(name)}
              containerClass="productdetailpage__product--titlediv"
              textClass="productdetailpage__product--titlediv--title"
              fontWeight="light"
              text={name}
              size="h1"
              color="dark"
            />
            {mode === "mobile" && (
              <SkeletonText
                loading={Boolean(price)}
                containerClass="productdetailpage__product--pricediv"
                textClass="productdetailpage__product--pricediv--price"
                fontWeight="bold"
                text={`${price} TL`}
                size="h2"
                color="dark"
              />
            )}

            <div className="productdetailpage__product--detailsgrid">
              <div className="productdetailpage__product--detailsgrid--row">
                <Text fontWeight="bold" color="dark">
                  <h5>{productdetailpageText.brand}</h5>
                </Text>
                <SkeletonText
                  loading={Boolean(brand)}
                  containerClass="productdetailpage__product--detailsdiv"
                  textClass="productdetailpage__product--detailsdiv--details"
                  fontWeight="light"
                  text={brand}
                  size="h5"
                  color="dark"
                />
              </div>
              <div className="productdetailpage__product--detailsgrid--row">
                <Text fontWeight="bold" color="dark">
                  <h5>{productdetailpageText.color}</h5>
                </Text>
                <SkeletonText
                  loading={Boolean(color)}
                  containerClass="productdetailpage__product--detailsdiv"
                  textClass="productdetailpage__product--detailsdiv--details"
                  fontWeight="light"
                  text={color}
                  size="h5"
                  color="dark"
                />
              </div>
              <div className="productdetailpage__product--detailsgrid--row">
                <Text fontWeight="bold" color="dark">
                  <h5>{productdetailpageText.usage}</h5>
                </Text>
                <SkeletonText
                  loading={Boolean(status)}
                  containerClass="productdetailpage__product--detailsdiv"
                  textClass="productdetailpage__product--detailsdiv--details"
                  fontWeight="light"
                  text={status}
                  size="h5"
                  color="dark"
                />
              </div>
            </div>

            {mode === "desktop" && (
              <SkeletonText
                loading={Boolean(price)}
                containerClass="productdetailpage__product--pricediv"
                textClass="productdetailpage__product--pricediv--price"
                fontWeight="bold"
                text={`${price} TL`}
                size="h2"
                color="dark"
              />
            )}
            <div className="productdetailpage__product--buttonsdiv">
              {auth && !isSold && (
                <Button
                  size="medium"
                  color="primary"
                  classes="productdetailpage__product--buttonsdiv--button"
                  clickFunc={() => openPurchaseDialogBox()}
                >
                  <Text fontWeight="medium" color="white">
                    <h5>{productdetailpageText.buy}</h5>
                  </Text>
                </Button>
              )}

              {auth && !isSold && isOfferable && (
                <Button
                  size="medium"
                  color="secondary"
                  classes="productdetailpage__product--buttonsdiv--button"
                  clickFunc={() => openOfferDialogBox()}
                >
                  <Text fontWeight="medium" color="blue">
                    <h5>{productdetailpageText.offer}</h5>
                  </Text>
                </Button>
              )}
              {!auth && !isSold && (
                <Text
                  fontWeight="light"
                  color="red"
                  classes="productdetailpage__product--detailsdiv--detail"
                >
                  <h3>{productdetailpageText.error}</h3>
                </Text>
              )}
              {isSold && (
                <Button
                  size="medium"
                  color="orange"
                  classes="productdetailpage__product--buttonsdiv--button--sold"
                >
                  <Text fontWeight="medium" color="orange">
                    <h5>{productdetailpageText.sold}</h5>
                  </Text>
                </Button>
              )}
            </div>
            <div className="productdetailpage__product--detailsdiv">
              <Text
                fontWeight="bold"
                color="dark"
                classes="productdetailpage__product--detailsdiv--detail"
              >
                <h4>{productdetailpageText.explain}</h4>
              </Text>
              <SkeletonText
                loading={Boolean(description)}
                containerClass="productdetailpage__product--detailsdiv"
                textClass="productdetailpage__product--detailsdiv--detail"
                fontWeight="medium"
                text={description}
                size="h5"
                color="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  auth: state.user.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
});

ProductDetail.propTypes = {
  products: PropTypes.array,
  auth: PropTypes.bool,
  getProducts: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
