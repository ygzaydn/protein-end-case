/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Account from "./account";

test("Account page renders", () => {
    render(<Account />);
    const text = screen.getByText(/Account/i);
    expect(text).toBeInTheDocument();
});
