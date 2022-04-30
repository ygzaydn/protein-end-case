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
          <div className="addproductpage__content--detailsdiv">
            <Text
              fontWeight="bold"
              color="dark"
              classes="addproductpage__content--detailsdiv--title"
            >
              <h2>Ürün Detayları</h2>
            </Text>
            <AddItemForm />
          </div>
          <div className="addproductpage__content--uploaddiv">
            <Text
              fontWeight="bold"
              color="dark"
              classes="addproductpage__content--uploaddiv--title"
            >
              <h2>Ürün Görseli</h2>
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
