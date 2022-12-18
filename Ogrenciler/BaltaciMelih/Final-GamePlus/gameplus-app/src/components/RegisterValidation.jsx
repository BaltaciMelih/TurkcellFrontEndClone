import { object, string, number, date, bool } from "yup";

const userSchema = object({
  name: string().required("Ad-Soyad zorunlu alandır."),
  userName: string().required("Geçerli bir kullanıcı adı giriniz."),
  phone: number()
    .required("Geçerli bir telefon numarası giriniz.")
    .positive()
    .integer(),
  email: string().email().required("Geçerli bir e-posta giriniz."),
  date: date()
    .required("Geçerli bir tarih giriniz.")
    .default(() => new Date()),
  password: string().min(6).required("Geçerli bir şifre giriniz."),
  acceptTerms: bool().isTrue(true),
  acceptKVKK: bool().isTrue(true),
});

export default userSchema;
