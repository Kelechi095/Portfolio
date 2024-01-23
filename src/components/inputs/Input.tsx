

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder: string
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = ({
  id,
  placeholder,
  type,
  disabled,
  required,
  register,
  errors,
}: InputProps) => {
  return (
    <div className="w-full relative">
      
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`w-full md:w-[50%] p-4 mb-4 text-white outline-none bg-inherit border md:border-2 disabled:opacity-70 disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "  border-slate-600"}
        ${errors[id] ? "focus:border-rose-400" : "  focus:border-slate-600"}
        `}
      />
    </div>
  );
};

export default Input;
