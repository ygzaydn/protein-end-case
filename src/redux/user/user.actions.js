import { UserActionTypes } from "./user.types";

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: emailAndPassword,
});
