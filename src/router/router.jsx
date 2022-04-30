import React from "react";

import { Route, Routes } from "react-router";
import {
  Account,
  AddProduct,
  Index,
  Product,
  ProductDetail,
  SignUp,
} from "../pages/";

const Router = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/account" element={<Account />} />
    <Route path="/product" element={<Product />} />
    <Route path="/productdetail:id" element={<ProductDetail />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/addproduct" element={<AddProduct />} />
  </Routes>
);

export default Router;
