/* eslint-disable indent */
import { ProductActionTypes } from "./products.types";

const INITIAL_STATE = [];

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.GET_PRODUCT:
            return [...action.payload];
        case ProductActionTypes.ADD_PRODUCT:
            return;
        case ProductActionTypes.RESET_PRODUCTS:
            return [];
        default:
            return state;
    }
};

export default productReducer;
