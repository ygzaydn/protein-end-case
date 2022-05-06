import * as Yup from "yup";

export const addItemSchema = Yup.object().shape({
  name: Yup.string().required().max(100),
  details: Yup.string().required().max(500),
  category: Yup.string().required(),
  brand: Yup.string(),
  color: Yup.string(),
  usage: Yup.string().required(),
  price: Yup.number().required(),
  option: Yup.boolean().required(),
  file: Yup.mixed()
    .required()
    .test("fileSize", "Dosya boyutu çok büyük", (value) => {
      return value?.size <= 400000;
    })
    .test(
      "fileFormat",
      "Dosya formatı uygun değil, lütfen JPEG, PNG ve JPG formatı kullanın.",
      (value) => {
        return (
          value?.type?.includes("jpeg") ||
          value?.type?.includes("png") ||
          value?.type?.includes("jpg")
        );
      }
    ),
});
