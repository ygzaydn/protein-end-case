/* eslint-disable indent */
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  authenticated: false,
  token: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: { ...action.payload.user },
        token: action.payload.jwt,
        error: null,
        authenticated: true,
        loading: false,
      };
    case UserActionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: {
          ...state.currentUser,
          offers: [...action.payload.offers],
          products: [...action.payload.products],
        },
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        authenticated: false,
        token: null,
        loading: false,
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
