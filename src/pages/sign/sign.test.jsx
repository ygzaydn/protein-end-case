/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./signin";

test("Account page renders", () => {
    render(<SignIn />);
    const text = screen.getByText(/SignIn/i);
    expect(text).toBeInTheDocument();
});
