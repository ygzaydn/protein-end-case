import userSagas from "./user/user.sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([userSagas()]);
}
