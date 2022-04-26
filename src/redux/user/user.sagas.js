import { all, put, takeLatest, call } from "redux-saga/effects";
import { register, user } from "../../utils/axios";

import Cookies from "universal-cookie";

function* fetchRegister({ payload }) {
    try {
        const cookies = new Cookies();
        cookies.set("jwt", res.data.jwt, { path: "/" });

        const res = yield call(register, { ...payload });
        yield put({
            type: "SIGN_UP_SUCCESS",
            payload: {
                user: res.data.user,
                jwt: res.data.jwt,
            },
        });
    } catch (error) {
        yield put({
            type: "SIGN_UP_FAILURE",
            payload: error.message,
        });
    }
}

function* fetchUser() {
    try {
        yield call(user);
    } catch (err) {
        yield put({
            type: "RESET USER",
        });
    }
}

export function* startRegister() {
    yield takeLatest("SIGN_UP_START", fetchRegister);
}

export function* checkUser() {
    yield takeLatest("CHECK_USER", fetchUser);
}

export default function* userSagas() {
    yield all([startRegister(), checkUser()]);
}
