/* eslint-disable indent */
import { CategoriesActionTypes } from "./categories.types";

const INITIAL_STATE = { items: null, selectedCategory: "" };

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case CategoriesActionTypes.GET_CATEGORIES:
      return { ...state, items: [...action.payload] };
    case CategoriesActionTypes.RESET_CATEGORIES:
      return { items: null, selectedCategory: "" };
    default:
      return state;
  }
};

export default categoryReducer;
