import { all, put, takeLatest, call } from "redux-saga/effects";
import { register } from "../../utils/axios";

export function* incrementAsync() {
    yield put({ type: "INCREMENT" });
}

export function* fetchRegister({ payload }) {
    try {
        const res = yield call(register, { ...payload });
        yield put({
            type: "SIGN_UP_SUCCESS",
            payload: {
                user: res.data.user,
                jwt: res.data.jwt,
            },
        });
    } catch (error) {
        console.log("asd");
        yield put({
            type: "SIGN_UP_FAILURE",
            payload: error.message,
        });
    }
}

export function* startRegister() {
    yield takeLatest("SIGN_UP_START", fetchRegister);
}

export default function* userSagas() {
    yield all([startRegister()]);
}
