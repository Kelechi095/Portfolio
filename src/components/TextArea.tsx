import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea = ({
  id,
  placeholder,
  disabled,
  required,
  register,
  errors,
}: TextAreaProps) => {
  return (
    <div className="w-full relative">
      
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        className={`peer w-full md:w-[50%] max-h-[150px] min-h-[150px] mb-1 text-white p-4 outline-none bg-inherit border md:border-2 disabled:opacity-70 disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-slate-600"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-600"}
        `}
      />
    </div>
  );
};


export default TextArea;
