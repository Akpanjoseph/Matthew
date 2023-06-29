//@ts-ignore
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

export const userLoginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email can not be empty!"),
    password: yup.string()
    .min(6).
    matches(passwordRules,{message:"Password must be a min of 6 characters with 1 uppercase and 1 number"})
    .required("Password can not be empty!")
})


export const userSignInSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email can not be empty!"),

    password: yup.string()
    .min(6).
    matches(passwordRules,{message:"Password must be a min of 6 characters with 1 uppercase and 1 number"})
    .required("Password can not be empty!"),

    comfirmPassword: yup.string
    .oneOf([yup.ref('password'),null],"Passwords must match")
    .required("comfirm password can not be empty!")
})