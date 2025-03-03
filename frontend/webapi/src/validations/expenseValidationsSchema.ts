import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
    amount: Yup
        .number()
        .required("Amount is required")
        .positive("Amount must be positive")
        .integer("Amount must be an integer"),
    date: Yup
        .date()
        .required("Date is required"),
    category: Yup
        .string()
        .required("Category is required"),
});

export default validationSchema;