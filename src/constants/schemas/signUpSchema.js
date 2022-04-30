import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir email girin.")
    .required("Email girmek zorunludur."),
  password: Yup.string()
    .required("Şifre girmek zorunludur.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .max(20, "Şifre en fazla 20 karakter olmalıdır."),
});
