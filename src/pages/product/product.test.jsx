/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./product";

test("Account page renders", () => {
    render(<Product />);
    const text = screen.getByText(/Product/i);
    expect(text).toBeInTheDocument();
});
