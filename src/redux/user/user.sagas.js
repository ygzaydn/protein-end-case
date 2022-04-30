import { all, put, takeLatest, call } from "redux-saga/effects";
import { register, user, login } from "../../utils/axios";
import { toast } from "react-toastify";

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
    toast.error(`Emailinizi veya şifrenizi değiştirmelisiniz.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put({
      type: "SIGN_UP_FAILURE",
      payload: error.message,
    });
  }
}

function* fetchUser() {
  try {
    yield call(user);
    yield put({
      type: "CHECK_SUCCESS",
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
    toast.error(`Emailiniz veya şifreniz hatalı.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
