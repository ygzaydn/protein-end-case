import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
