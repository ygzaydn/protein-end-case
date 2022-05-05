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
  file: Yup.mixed()
    .required()
    .test("fileSize", "Dosya boyutu çok büyük", (value) => {
      return value?.size <= 100000;
    })
    .test(
      "fileFormat",
      "Dosya formatı uygun değil, lütfen JPEG veya PNG formatı kullanın.",
      (value) => {
        return value?.type?.includes("jpeg") || value?.type?.includes("png");
      }
    ),
});
