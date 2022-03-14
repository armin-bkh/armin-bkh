import { useRef } from "react";
import { useFormik } from "formik";
import Input from "./Input/Input";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("0rRNrw_P-NTtS9z-f");

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("your name is required"),
  email: Yup.string()
    .email("you have entered an invalid email address. please try again")
    .required("email address is required"),
  message: Yup.string()
    .min(10, "your message must be longer than nine characters")
    .required("message is required"),
});

const SERVICEID = "service_u5q6wmc";
const TEMPLATEID = "template_8u2j79e";
const USERID = "0rRNrw_P-NTtS9z-f";

const EmailForm = () => {
  const formRef = useRef();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    validateOnMount: true,
    validationSchema,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICEID, TEMPLATEID, formRef.current, USERID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section>
      <h1 className="text-center text-3xl md:text-5xl mb-5">Send email</h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <Input
            name="name"
            lbl="name"
            formik={formik}
            placeholder="your name"
          />
          <Input
            type="email"
            name="email"
            lbl="email"
            formik={formik}
            placeholder="your email"
          />
        </div>
        <Input
          type="textarea"
          name="message"
          lbl="message"
          formik={formik}
          placeholder="please enter your message for me"
        />

        <button
          disabled={!formik.isValid}
          className="mt-5 w-full py-1 bg-emerald-500 disabled:shadow-none disabled:opacity-70
           shadow-md shadow-emerald-500/50 text-gray-700 transition"
          type="submit"
        >
          send
        </button>
      </form>
    </section>
  );
};

export default EmailForm;
