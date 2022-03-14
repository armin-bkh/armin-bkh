import styles from "./Input.module.css";

const Input = ({ type = "text", name, lbl, formik, placeholder }) => {
  return (
    <fieldset className="flex flex-col flex-1 relative">
      <label className="mb-1 capitalize lg:text-lg" htmlFor={name}>
        {lbl}
      </label>
      {type === "textarea" ? (
        <textarea
          className="text-sm px-3 py-2 rounded-sm bg-gray-700 outline-none min-h-[9rem]
           md:min-h-[15rem] resize-none placeholder-gray-500"
          id={name}
          name={name}
          placeholder={placeholder || null}
          {...formik.getFieldProps(name)}
        ></textarea>
      ) : (
        <input
          className="text-sm px-3 py-2 rounded-sm bg-gray-700 outline-none placeholder-gray-500"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder || null}
          {...formik.getFieldProps(name)}
        />
      )}
      {formik.errors[name] && formik.touched[name] && (
        <span
          className={`absolute bg-white rounded-tr-none w-52 h-12 top-12 right-3 rounded-sm shadow-md flex flex-col
           p-2 text-red-600 mt-1 text-xs ${styles.inputMessage}`}
        >
          <span className="w-full h-0.5 bg-red-600 block rounded-md mb-1"></span>
          <span className="flex-1 flex items-center">
            {formik.errors[name]}
          </span>
        </span>
      )}
    </fieldset>
  );
};

export default Input;
