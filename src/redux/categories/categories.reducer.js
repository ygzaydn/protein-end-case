/* eslint-disable indent */
import { CategoriesActionTypes } from "./categories.types";

const INITIAL_STATE = [];

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CategoriesActionTypes.GET_CATEGORIES:
            return [...action.payload];
        case CategoriesActionTypes.RESET_CATEGORIES:
            return [];
        default:
            return state;
    }
};

export default categoryReducer;
