import React, { useState, useEffect } from "react";
import { Header, CategoryText, ItemCard } from "../../components";
import { BannerImage } from "../../assets/images/";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Index = ({
    checkUser,
    getProducts,
    getCategories,
    products,
    categories,
}) => {
    const [pageCategory, setPageCategory] = useState("");
    useEffect(() => {
        checkUser();
        getProducts();
        getCategories();
    }, []);

    return (
        <section className="indexpage">
            <div className="indexpage__header">
                <Header />
            </div>

            <div className="indexpage__content">
                <div className="indexpage__bannerdiv">
                    <img
                        src={BannerImage}
                        alt="indexpage-banner-image"
                        className="indexpage__bannerdiv__image"
                    />
                </div>
                <div className="indexpage__categorydiv">
                    <CategoryText
                        clickFunc={() => setPageCategory("")}
                        active={pageCategory === ""}
                        name="Hepsi"
                    />
                    {categories.map((el) => (
                        <CategoryText
                            active={el === pageCategory}
                            key={el}
                            name={el}
                            clickFunc={() => setPageCategory(el)}
                        />
                    ))}
                </div>
                <div className="indexpage__itemdiv">
                    {products.map((el) => (
                        <ItemCard
                            key={el.id + el.brand}
                            brand={el.brand}
                            color={el.color}
                            price={el.price}
                            imageURL={el.image.formats.small.url}
                        />
                    ))}
                    <ItemCard
                        key={"el.id + el.brand"}
                        brand={""}
                        color={""}
                        price={""}
                        imageURL={""}
                    />
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.categories.map((el) => el.name),
});

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch({ type: "CHECK_USER" }),
    getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
    getCategories: () => dispatch({ type: "GET_CATEGORIES_START" }),
});

Index.propTypes = {
    checkUser: PropTypes.func,
    getProducts: PropTypes.func,
    getCategories: PropTypes.func,
    products: PropTypes.array,
    categories: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
