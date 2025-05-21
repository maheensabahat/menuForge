import React from "react";
import "./Input.css";

const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input ref={ref} className="input-field" {...props} />
    </div>
  );
});

export default Input;
