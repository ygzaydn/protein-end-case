import { all, put, takeLatest, call } from "redux-saga/effects";
import { products } from "../../utils/axios";

function* fetchProducts() {
    try {
        const res = yield call(products);

        yield put({ type: "GET_PRODUCT", payload: [...res.data] });
    } catch (err) {
        yield put({ type: "RESET_PRODUCTS" });
    }
}

export function* getProducts() {
    yield takeLatest("GET_PRODUCT_START", fetchProducts);
}

export default function* productSagas() {
    yield all([getProducts()]);
}
