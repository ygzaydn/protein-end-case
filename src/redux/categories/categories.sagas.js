import { all, put, takeLatest, call } from "redux-saga/effects";
import { categories } from "../../utils/axios";

function* fetchCategories() {
    try {
        const res = yield call(categories);

        yield put({ type: "GET_CATEGORIES", payload: [...res.data] });
    } catch (err) {
        yield put({ type: "RESET_PRODUCTS" });
    }
}

export function* getCategories() {
    yield takeLatest("GET_CATEGORIES_START", fetchCategories);
}

export default function* categorySagas() {
    yield all([getCategories()]);
}
