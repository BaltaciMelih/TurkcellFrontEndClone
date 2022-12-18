import { object, string, number, date, boolean } from 'yup';
const uyarı ="Bu alan zorunludur";
let userSchema = object({
  name: string().required(uyarı),
  userName: string().required(uyarı),
  email: string().email("Lütfen Geçerli Bir Mail Adresi giriniz").required(uyarı),
  number: number().required(uyarı),
  date: date().required(uyarı),
  password:string().required(uyarı),
});
export default userSchema;