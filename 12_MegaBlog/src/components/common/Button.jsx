import { forwardRef, useId } from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <Button
      type={type}
      className={`${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </Button>
  );
}
