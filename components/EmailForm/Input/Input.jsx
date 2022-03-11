const Input = ({ type, name, lbl, formik }) => {
  return (
    <fieldset>
      <label htmlFor={name}>{lbl}</label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </fieldset>
  );
};

export default Input;
