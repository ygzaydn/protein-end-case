import React, { useContext, useState } from "react";

const CategoryContext = React.createContext(" ");

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
