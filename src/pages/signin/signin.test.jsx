/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import SignUp from "./signup";

test("Account page renders", () => {
    render(<SignUp />);
    const text = screen.getByText(/SignUp/i);
    expect(text).toBeInTheDocument();
});
