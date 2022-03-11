import { useFormik } from "formik";
import Input from "./Input/Input";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  text: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("your name is required"),
  email: Yup.string()
    .email("you have entered an invalid email address. please try again")
    .required("email address is required"),
  text: Yup.string()
    .min(10, "your message must be longer than nine characters")
    .required("message is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const EmailForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
    validationSchema,
  });

  return (
    <section>
      <h1>send email</h1>
      <form>
        <Input name="name" lbl="name" formik={formik} />
        <button type="submit">send</button>
      </form>
    </section>
  );
};

export default EmailForm;
