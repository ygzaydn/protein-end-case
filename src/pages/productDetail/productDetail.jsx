import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";

import {
  Header,
  SkeletonImage,
  SkeletonText,
  Text,
  Button,
  ProductDetailOfferDialog,
  ProductDetailPurchaseDialog,
} from "../../components";

import { useWindowContext } from "../../contexts/windowContext";

import PropTypes from "prop-types";

const initialState = {
  name: null,
  brand: null,
  color: null,
  description: null,
  isOfferable: null,
  price: null,
  image: null,
};

const ProductDetail = ({ product }) => {
  const [productDetail, setProductDetail] = useState({ ...initialState });
  const [dialogBoxes, setDialogBoxes] = useState({
    offer: false,
    purchase: false,
  });
  const { pathname, state } = useLocation();

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
    if (state?.item) {
      setProductDetail(state.item);
    } else {
      const index = pathname.split(":")[1];
      setProductDetail(product(index)[0]);
    }
  }, []);

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
      {dialogBoxes.offer && (
        <ProductDetailOfferDialog
          closeFunc={() => closeOfferDialogBox()}
          item={productDetail}
        />
      )}
      {dialogBoxes.purchase && (
        <ProductDetailPurchaseDialog
          closeFunc={() => closePurchaseDialogBox()}
          item={productDetail}
        />
      )}
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
                  <h5>Marka: </h5>
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
                  <h5>Renk: </h5>
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
                  <h5>Kullanım Durumu: </h5>
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
              {!isSold && (
                <Button
                  size="medium"
                  color="primary"
                  classes="productdetailpage__product--buttonsdiv--button"
                >
                  <Text fontWeight="medium" color="white">
                    <h5>Satın Al </h5>
                  </Text>
                </Button>
              )}

              {!isSold && isOfferable && (
                <Button
                  size="medium"
                  color="secondary"
                  classes="productdetailpage__product--buttonsdiv--button"
                  clickFunc={() => openOfferDialogBox()}
                >
                  <Text fontWeight="medium" color="blue">
                    <h5>Teklif Ver</h5>
                  </Text>
                </Button>
              )}
              {isSold && (
                <Button
                  size="medium"
                  color="orange"
                  classes="productdetailpage__product--buttonsdiv--button--sold"
                >
                  <Text fontWeight="medium" color="orange">
                    <h5>Bu Ürün Satışta Değil</h5>
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
                <h4>Açıklama</h4>
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
  product: (id) => state.products.filter((el) => el.id === id),
});

const mapDispatchToProps = null;

ProductDetail.propTypes = {
  product: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
