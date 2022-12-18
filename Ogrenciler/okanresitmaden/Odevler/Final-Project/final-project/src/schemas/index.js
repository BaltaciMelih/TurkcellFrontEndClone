import * as yup from 'yup';
import { sub } from 'date-fns/fp'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const advancedSchema = yup.object().shape({
    name:yup.string().matches(/^[A-Za-z ]*$/, 'Please enter your full name').required("Required"),
    username:yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid username').required("Required"),
    email: yup.string().email("please enter a valid email").required("Required"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
    birth: yup.date().required().max(sub({years:13}, new Date()), "User must be over 13 years old").required("Required"),
    password: yup.string().min(6).matches(passwordRules, {message:"- En az 6, en fazla 25 karakter, en az 1 büyük, 1 küçük harf ve 1 rakam içermelidir."})
    .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of use and privacy statement "),
    acceptedTos2: yup
    .boolean()
    .oneOf([true], "Please accept the KVKK and Turkcell General Data Processing Permission"),       
    });