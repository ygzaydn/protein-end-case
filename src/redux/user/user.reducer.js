/* eslint-disable indent */
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    authenticated: false,
    token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: { ...action.payload.user },
                token: action.payload.jwt,
                error: null,
                authenticated: true,
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                authenticated: false,
                token: null,
            };
        case UserActionTypes.RESET_USER:
            return {
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
};

export default userReducer;
