import * as yup from "yup";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const registerSchema = yup.object().shape({
    name: yup
        .string("Fullname should be a string")
        .required("Please enter your full name"),
    username: yup
        .string("Username should be a string")
        .required("User name should be unique"),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(11, "Too short")
        .max(11, "Too long"),
    email: yup
        .string("Email should be a string")
        .email("Please provide a valid email address")
        .required("Email address is required"),
    date: yup
        .string()
        
        .required("Date of birth address is required"),
    password: yup
        .string("Password should be a string")
        .min(6, "Password should have a minimum length of 6")
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .max(25, "Password should have a maximum length of 25")
        .required("Password is required"),
    checkboxOne: yup
        .boolean()
        .oneOf([true], "Please tick checkbox"),
    checkboxTwo: yup
        .boolean()
        .oneOf([true], "Please tick checkbox"),
});