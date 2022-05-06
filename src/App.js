import React from "react";
import Router from "./router/router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" />
      <Router />
    </div>
  );
};

export default App;
