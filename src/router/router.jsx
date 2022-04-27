import React from "react";

import { Route, Routes } from "react-router";
import { Account, Index, Product, ProductDetail, SignUp } from "../pages/";

const Router = () => (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail:id" element={<ProductDetail />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
);

export default Router;
