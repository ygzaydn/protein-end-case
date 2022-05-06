import React, { useEffect } from "react";
import { Header, AddItemForm, Loader } from "../../components";

import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const AddProduct = ({ loading, auth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);
  return (
    <section className="addproductpage">
      {auth && (
        <>
          <ToastContainer theme="colored" />
          <Loader open={loading} />
          <Header />
          <div className="addproductpage__contentcontainer">
            <div className="addproductpage__content">
              <AddItemForm />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

AddProduct.propTypes = {
  loading: PropTypes.bool,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  auth: state.user.authenticated,
});

export default connect(mapStateToProps, null)(AddProduct);
