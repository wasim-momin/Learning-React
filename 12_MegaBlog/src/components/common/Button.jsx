import { forwardRef, useId } from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverBtn = "hover:bg-blue-700",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      // className={`${className} `}
      className={`cursor-pointer w-full py-2 ${bgColor} ${textColor} ${hoverBtn} rounded-lg font-medium  transition`}
      {...props}
    >
      {children}
    </button>
  );
}
