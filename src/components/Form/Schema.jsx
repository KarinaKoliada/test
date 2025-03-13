import * as yup from "yup";

const Schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Email address must be valid"),
  //  .email("Email address must be valid"), .museum / .info
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default Schema;
