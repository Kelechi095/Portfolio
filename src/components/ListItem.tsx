import { IconType } from "react-icons"

interface ListItemProps {
    text: string
    icon: IconType
  }


const ListItem = ({text, icon: Icon}: ListItemProps) => {
    
  return (
    <li className="flex items-center gap-2 text-base mt-1">
        <Icon className="text-emerald-600" size={20}/>
        <span className="text-emerald-950 dark:text-white font-normal">{text}</span>
    </li>
  )
}

export default ListItem