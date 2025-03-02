import * as yup from "yup";

const profileValidationSchema = yup.object().shape({
    name: yup.string().required("Name required").min(3, "Name must be at least 3 characters"),
    email: yup.string().email("Invalid email").required("Email required"),
    password: yup.string().required("Password required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().required("Confirm Password required").oneOf([yup.ref("password")], "Password mismatch")
})

export default profileValidationSchema;