import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextAreaInput = ({
  id,
  label,
  disabled,
  register,
  errors,
}: InputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`cursor-text text-md mb-2
        ${errors[id] ? "text-rose-400" : "text-slate-400"}
          
          `}
      >
        {label}
      </label>

      <textarea
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, {
          required: "Input is required",
        })}
        placeholder=""
        className={`w-full py-4 px-2 outline-none border-2 bg-transparent text-white disabled:opacity-70 disabled:cursor-not-allowed
               
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

export default TextAreaInput;
