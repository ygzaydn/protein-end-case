/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect, useContext } from "react";

const WindowContext = React.createContext(null);

const limit = 960;

const getDimensions = () => {
  const w = window;
  const d = document;
  const { documentElement } = d;
  const body = d.getElementsByTagName("root");
  const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
  const height =
    documentElement.clientHeight || w.innerHeight || body.clientHeight;
  return { width, height, limit };
};

export const WindowWrapper = ({ children }) => {
  const [mode, setMode] = useState("desktop");
  const updateDimensions = () => {
    const width = getDimensions().width;

    if (width > limit) {
      setMode("desktop");
    } else {
      setMode("mobile");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return (
    <WindowContext.Provider value={mode}>{children}</WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);
