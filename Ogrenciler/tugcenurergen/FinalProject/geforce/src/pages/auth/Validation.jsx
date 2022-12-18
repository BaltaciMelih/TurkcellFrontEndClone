import * as yup from "yup";

export const Validation = yup.object({
    name: yup.string().required(),
    userName: yup.string().required(),
    number: yup.string().min(10).max(11),
    email: yup.string().email("geçerli bir eposta adresi giriniz.").required("email giriniz"),
    date: yup.date(),
    password: yup.string().min(6).max(18).required()
})
