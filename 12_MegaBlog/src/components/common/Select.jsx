import { forwardRef, useId } from "react";

function Select({ label, options, className = "", ...props }, ref) {
  const id = useId();
  return (
    <select
      id={id}
      ref={ref}
      className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
      {...props}
    >
      {label && (
        <label className={`${className}`} htmlFor={id}>
          {label}
        </label>
      )}
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default forwardRef(Select);
