import React from "react";

import { Route, Routes } from "react-router";
import {
  Account,
  AddProduct,
  Index,
  Product,
  ProductDetail,
  Sign,
} from "../pages/";

const Router = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/account" element={<Account />} />
    <Route path="/product" element={<Product />} />
    <Route path="/productdetail:id" element={<ProductDetail />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/addproduct" element={<AddProduct />} />
  </Routes>
);

export default Router;
