

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  smaller?: boolean;
  custom?: string;
  review?: string
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  disabled,
  outline,
  small,
  smaller,
  custom,
  icon: Icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded hover:bg-slate-700 transition w-full md:w-[50%] border-slate-800 flex items-center justify-center gap-2
      ${outline ? "bg-slate-800" : "bg-slate-800"}
      ${outline ? "text-rose-400" : "text-slate-200"}
      ${small ? 'text-sm font-light': 'text-base font-semibold'}
      ${small ? 'py-1 px-2 border-[1px]': 'py-3 px-4 border-2'}
      ${smaller ? 'py-2 px-1 text-xs border-[1px]': 'py-3 px-4 border-2'}
      ${custom ? custom : ""}
  `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
