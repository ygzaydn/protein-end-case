import React, { useState, useEffect } from "react";
import { Header, CategoryText, ItemCard } from "../../components";
import { BannerImage } from "../../assets/images/";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useWindowContext } from "../../contexts/windowContext";

import { resetStore } from "../../redux/store";

const Index = ({
  checkUser,
  getProducts,
  getCategories,
  products,
  categories,
  category,
  setCategory,
}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const { mode } = useWindowContext();

  useEffect(() => {
    //resetStore();
    getProducts();
    getCategories();
    checkUser();
  }, []);

  const filterProducts = () => {
    if (category !== "") {
      return products.filter((el) => el?.category?.name === category);
    } else {
      return products;
    }
  };

  useEffect(() => {
    setFilteredProducts(filterProducts());
  }, [category, products]);

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
            clickFunc={() => setCategory("")}
            active={category === ""}
            name="Hepsi"
          />
          {categories?.map((el) => (
            <CategoryText
              active={el === category}
              key={el}
              name={el}
              clickFunc={() => setCategory(el)}
            />
          ))}
        </div>
        <div className="indexpage__itemdiv">
          {filteredProducts?.map((el) => (
            <ItemCard
              key={el.id + el.brand}
              brand={el.brand}
              color={el.color}
              price={el.price}
              imageURL={el.image?.url}
              clickFunc={() =>
                navigate("/productdetail:" + el.id, {
                  state: { item: el },
                })
              }
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
  products: state?.products,
  categories: state?.categories?.items?.map((el) => el.name),
  category: state?.categories?.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch({ type: "CHECK_USER" }),
  getProducts: () => dispatch({ type: "GET_PRODUCT_START" }),
  getCategories: () => dispatch({ type: "GET_CATEGORIES_START" }),
  setCategory: (category) =>
    dispatch({ type: "SELECT_CATEGORY", payload: category }),
});

Index.propTypes = {
  checkUser: PropTypes.func,
  getProducts: PropTypes.func,
  getCategories: PropTypes.func,
  products: PropTypes.array,
  categories: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
