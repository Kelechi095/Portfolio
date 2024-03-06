import { IconType } from "react-icons";

interface ListItemProps {
  text: string;
  src?: string;
  icon?: IconType;
  black?: boolean;
  mongo?: boolean;
  blue?: boolean;
  big?: boolean;
}

const ListItem = ({ text, src, icon: Icon, blue, big }: ListItemProps) => {
  return (
    <li className="flex  flex-col justify-center items-center h-20 md:h-28 rounded px-8 py-2 bg-slate-800">
      {Icon && (
        <Icon
          className={`
      text-white text-2xl md:text-4xl
      ${blue && "text-cyan-700"}
        `}
        />
      )}
      {src && (
        <img
          src={src ? src : "/images/javascript.png"}
          alt="logo"
          className={`
        w-[20px] md:w-[30px]
        ${big && " w-[30px] md:w-[44px]"}
        `}
        />
      )}
      <span className="text-white font-normal text-xs md:text-lg">{text}</span>
    </li>
  );
};

/*  */

export default ListItem;
