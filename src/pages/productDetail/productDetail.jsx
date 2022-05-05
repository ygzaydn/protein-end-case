import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import _ from "lodash";

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
import { makeOffer, widthdrawOffer } from "../../utils/axios";

const initialState = {
  name: null,
  brand: null,
  color: null,
  description: null,
  isOfferable: null,
  price: null,
  image: null,
};

const ProductDetail = ({ products, auth, getProducts, loading, userId }) => {
  const [productDetail, setProductDetail] = useState({ ...initialState });
  const [dialogBoxes, setDialogBoxes] = useState({
    offer: false,
    purchase: false,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const openOfferDialogBox = (mode) => {
    setDialogBoxes((prev) => ({ ...prev, offer: mode }));
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

  const offered = _.some(
    productDetail.offers,
    (el) => el.users_permissions_user === userId
  );

  const { name, brand, color, description, isSold, price, image, status } =
    productDetail;

  return (
    <section className="productdetailpage">
      <ToastContainer theme="colored" />
      <ProductDetailOfferDialog
        item={productDetail}
        open={Boolean(dialogBoxes.offer)}
        approveFunc={dialogBoxes.offer === "make" ? makeOffer : widthdrawOffer}
        closeFunc={() => closeOfferDialogBox()}
        mode={Boolean(dialogBoxes.offer) ? dialogBoxes.offer : "make"}
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

              {auth && !isSold && !offered && (
                <Button
                  size="medium"
                  color="secondary"
                  classes="productdetailpage__product--buttonsdiv--button"
                  clickFunc={() => openOfferDialogBox("make")}
                >
                  <Text fontWeight="medium" color="blue">
                    <h5>{productdetailpageText.offer}</h5>
                  </Text>
                </Button>
              )}

              {auth && !isSold && offered && (
                <Button
                  size="medium"
                  color="red"
                  classes="productdetailpage__product--buttonsdiv--button"
                  clickFunc={() => openOfferDialogBox("withdraw")}
                >
                  <Text fontWeight="medium" color="white">
                    <h5>{productdetailpageText.cancelOffer}</h5>
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
  userId: state?.user?.currentUser?.id,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
});

ProductDetail.propTypes = {
  products: PropTypes.array,
  auth: PropTypes.bool,
  getProducts: PropTypes.func,
  loading: PropTypes.bool,
  userId: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
