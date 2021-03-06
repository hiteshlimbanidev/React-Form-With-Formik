import React from "react";
import { Formik, Form } from "formik";
import { Texfield } from "./Texfield";
import * as yup from "yup";

export const Signup = () => {
  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: yup
      .string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conformpassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-wight-bold-display-4">Sign up</h1>
          <Form>
            <Texfield label="First Name" name="firstName" type="text" />
            <Texfield label="last Name" name="lastName" type="text" />
            <Texfield label="Email" name="email" type="email" />
            <Texfield label="password" name="password" type="password" />
            <Texfield
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
