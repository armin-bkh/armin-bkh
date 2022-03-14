import { useRef } from "react";
import { useFormik } from "formik";
import Input from "./Input/Input";
import * as Yup from "yup";

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

const EmailForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    validateOnMount: true,
    validationSchema,
  });

  return (
    <section>
      <h1 className="text-center text-3xl md:text-5xl mb-5">Send email</h1>
      <form onSubmit={formik.handleSubmit}>
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
