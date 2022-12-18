import { useField } from "formik";

const CustomCheckboxtwo = ({deneme,...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          type="checkbox"
          className={meta.touched && meta.error ? "input-error form-check-input input__check mx-1" : "form-check-input input__check mx-1"}
        />
        <span className="checkboxtext">{deneme}</span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckboxtwo;