import { IconType } from "react-icons"


interface ListItemProps {
    text: string
    src?: string
    icon?: IconType
    black?: boolean
    mongo?: boolean
    blue?: boolean
  }


const ListItem = ({text, src, icon: Icon, black, mongo, blue }: ListItemProps) => {
    
  return (
    <li className="flex  flex-col justify-around items-center h-20 md:h-28 rounded px-8 py-2 bg-slate-800">
      {Icon && <Icon className={`
        ${black && " text-black dark:text-white "}
        ${mongo && "text-lime-500"}
        ${blue && "text-cyan-700"}
        `}/>}
        {src && <img src={src ? src : '/images/javascript.png'} alt="logo"  className="w-[20px] md:w-[30px]" />}
        <span className="text-white font-normal text-xs md:text-lg">{text}</span>
    </li>
  )
}

/*  */

export default ListItem