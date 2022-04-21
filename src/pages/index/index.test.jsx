/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "./index";

test("Account page renders", () => {
    render(<Index />);
    const text = screen.getByText(/Index/i);
    expect(text).toBeInTheDocument();
});
