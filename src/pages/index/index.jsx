import React, { useState, useEffect } from "react";
import { Header, CategoryText, ItemCard, ScrollToTop } from "../../components";
import { BannerImage } from "../../assets/images/";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import { resetStore } from "../../redux/store";

import { indexpageText } from "../../constants/texts";

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
  const [pos, setPos] = useState(0);
  const navigate = useNavigate();

  const position = () => {
    const height = window.innerHeight / 2;
    const posY = window.pageYOffset;
    const temp = parseInt(posY / height);
    if (temp > 0 && pos !== temp) {
      setPos(temp);
    } else if (temp === 0) {
      setPos(0);
    }
  };

  useEffect(() => {
    //resetStore();
    getProducts();
    getCategories();
    checkUser();
    window.addEventListener("scroll", () => position());

    return () => window.removeEventListener("scroll", () => position());
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
      <Header />
      <ScrollToTop visible={Boolean(pos)} />
      <div className="indexpage__content">
        <div className="indexpage__banner" role="img">
          <img
            src={BannerImage}
            alt="indexpage-banner"
            className="indexpage__banner__image"
          />
        </div>
        <div className="indexpage__categories">
          <CategoryText
            clickFunc={() => setCategory("")}
            active={category === ""}
            name={indexpageText.allProducts}
          />
          {categories.map((el) => (
            <CategoryText
              active={el === category}
              key={el}
              name={el}
              clickFunc={() => setCategory(el)}
            />
          ))}
        </div>
        <div className="indexpage__items">
          {filteredProducts?.slice(0, (pos + 1) * 10).map((el) => (
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
  products: state?.products.items,
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
