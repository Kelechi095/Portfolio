import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors
}

const EmailInput = ({
  id,
  label,
  type,
  disabled,
  register,
  errors,
}: InputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`cursor-text text-md mt-2
          ${errors[id] ? "text-rose-400" : "text-slate-400"}
          
          `}
      >
        {label}
      </label>

      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
        placeholder=""
        type={type}
        className={`w-full px-2 py-4 outline-none border-2 text-white bg-transparent disabled:opacity-70 disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-slate-600"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-600"}
        `}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => <p className="text-xs mt-1 text-rose-400">{message}</p>}
      />
    </div>
  );
};

export default EmailInput;
