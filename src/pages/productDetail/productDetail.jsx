import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Header, Text, SkeletonImage, SkeletonText } from "../../components";

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
    const { pathname, state } = useLocation();

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
        isOfferable,
        price,
        image,
        status,
    } = productDetail;
    console.log(productDetail);
    return (
        <section className="productdetailpage">
            <div className="productdetailpage__header">
                <Header />
            </div>
            <div className="productdetailpage__content">
                <div className="productdetailpage__product">
                    <SkeletonImage
                        loading={Boolean(image)}
                        url={image?.url}
                        description={description}
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
                        />
                        <div className="productdetailpage__product--detailsgrid">
                            <SkeletonText
                                loading={Boolean(brand)}
                                containerClass="productdetailpage__product--detailsdiv"
                                textClass="productdetailpage__product--detailsdiv--details"
                                fontWeight="light"
                                text={
                                    <>
                                        <strong>Marka: </strong>

                                        {brand}
                                    </>
                                }
                                size="h4"
                            />
                            <SkeletonText
                                loading={Boolean(color)}
                                containerClass="productdetailpage__product--detailsdiv"
                                textClass="productdetailpage__product--detailsdiv--details"
                                fontWeight="light"
                                text={
                                    <>
                                        <strong>Renk: </strong>

                                        {color}
                                    </>
                                }
                                size="h4"
                            />
                            <SkeletonText
                                loading={Boolean(status)}
                                containerClass="productdetailpage__product--detailsdiv"
                                textClass="productdetailpage__product--detailsdiv--details"
                                fontWeight="light"
                                text={
                                    <>
                                        <strong>Kullanım Durumu: </strong>

                                        {status}
                                    </>
                                }
                                size="h4"
                            />
                        </div>
                        <div className="productdetailpage__product--price"></div>
                        <div className="productdetailpage__product--buttondiv"></div>
                        <div className="productdetailpage__product--details"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    product: (id) => state.products.filter((el) => el.id == id),
});

const mapDispatchToProps = null;

ProductDetail.propTypes = {
    product: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
