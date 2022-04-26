import userSagas from "./user/user.sagas";
import productSagas from "./products/products.sagas";
import { all } from "redux-saga/effects";
import categorySagas from "./categories/categories.sagas";

export default function* rootSaga() {
    yield all([userSagas(), productSagas(), categorySagas()]);
}
