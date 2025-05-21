import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import validationRules from "../../validation/validationRules.js";

const Form = ({ fieldTypes, buttonLabel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldTypes.map((fieldType, index) => (
        <div key={fieldType.key || index}>
          <Input
            label={fieldType.label}
            type={fieldType.type}
            {...register(fieldType.key, validationRules[fieldType.key])}
          />
          {errors[fieldType.type] && (
            <p className="error">{errors[fieldType.type].message}</p>
          )}
        </div>
      ))}
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
};

export default Form;
