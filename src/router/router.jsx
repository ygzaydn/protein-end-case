import React from "react";

import { Route, Routes } from "react-router";
import { Account, Index, Product, SignIn, SignUp } from "../pages/";

const Router = () => (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
);

export default Router;
