import React from "react";
import { Header, Text, AddItemForm } from "../../components";

const AddProduct = ({}) => {
  return (
    <section className="addproductpage">
      <Header />

      <div className="addproductpage__contentdiv">
        <div className="addproductpage__content">
          <AddItemForm />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
