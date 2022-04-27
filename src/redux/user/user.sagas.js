import { all, put, takeLatest, call } from "redux-saga/effects";
import { register, user, login } from "../../utils/axios";

import Cookies from "universal-cookie";

function* fetchRegister({ payload }) {
    try {
        const res = yield call(register, { ...payload });
        const cookies = new Cookies();
        cookies.set("jwt", res.data.jwt, { path: "/" });

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
        const res = yield call(user);
        yield put({
            type: "CHECK_SUCCESS",
            payload: {
                user: res.data.user,
                jwt: res.data.jwt,
            },
        });
    } catch (err) {
        yield put({
            type: "RESET_USER",
        });
    }
}

function* fetchLogin({ payload }) {
    try {
        const res = yield call(login, { ...payload });
        const cookies = new Cookies();
        cookies.set("jwt", res.data.jwt, { path: "/" });
        yield put({
            type: "SIGN_IN_SUCCESS",
            payload: {
                user: res.data.user,
                jwt: res.data.jwt,
            },
        });
    } catch (error) {
        yield put({
            type: "SIGN_IN_FAILURE",
            payload: error.message,
        });
    }
}

export function* startRegister() {
    yield takeLatest("SIGN_UP_START", fetchRegister);
}

export function* startLogin() {
    yield takeLatest("SIGN_IN_START", fetchLogin);
}

export function* checkUser() {
    yield takeLatest("CHECK_USER", fetchUser);
}

export default function* userSagas() {
    yield all([startRegister(), checkUser(), startLogin()]);
}
