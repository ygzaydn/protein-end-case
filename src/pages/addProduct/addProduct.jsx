import React from "react";
import { Header, AddItemForm, Loader } from "../../components";

import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AddProduct = ({ loading }) => {
  return (
    <section className="addproductpage">
      <ToastContainer theme="colored" />
      <Loader open={loading} />
      <Header />
      <div className="addproductpage__contentcontainer">
        <div className="addproductpage__content">
          <AddItemForm />
        </div>
      </div>
    </section>
  );
};

AddProduct.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
});

export default connect(mapStateToProps, null)(AddProduct);
