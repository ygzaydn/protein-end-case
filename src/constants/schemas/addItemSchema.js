import * as Yup from "yup";

export const addItemSchema = Yup.object().shape({
  name: Yup.string().required(),
  details: Yup.string().required(),
  category: Yup.string().required(),
  brand: Yup.string().required(),
  color: Yup.string().required(),
  usage: Yup.string().required(),
  price: Yup.number().required(),
  option: Yup.boolean().required(),
});
