import React from "react";
import { Header, Text, AddItemForm } from "../../components";

const AddProduct = ({}) => {
  return (
    <section className="addproductpage">
      <div className="addproductpage__headerdiv">
        <Header />
      </div>
      <div className="addproductpage__contentdiv">
        <div className="addproductpage__content">
          <AddItemForm />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
