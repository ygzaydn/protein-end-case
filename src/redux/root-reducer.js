import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import productReducer from "./products/products.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import categoryReducer from "./categories/categories.reducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    categories: categoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
