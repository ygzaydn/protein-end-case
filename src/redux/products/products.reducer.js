/* eslint-disable indent */
import { ProductActionTypes } from "./products.types";

const INITIAL_STATE = { loading: false, items: [] };

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_START:
    case ProductActionTypes.START_OFFER:
      return { ...state, loading: true };
    case ProductActionTypes.GET_PRODUCT:
      return { loading: false, items: [...action.payload] };
    case ProductActionTypes.END_OFFER:
      return { ...state, loading: false };
    case ProductActionTypes.RESET_PRODUCTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default productReducer;
