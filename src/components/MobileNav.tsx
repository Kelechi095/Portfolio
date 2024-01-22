import { NavLink } from "react-router-dom";
//import { FaDownload } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const MobileNav = () => {
    const activeStyles = "text-blue-300";
  const inactiveStyles =
    "text-slate-800 hover:text-cyan-600 text-zinc-100 hover:text-neutral-400";

  return (
    <nav className='py-2 px-4 sticky left-0 top-0 md:hidden bg-slate-800 w-full'>
        <h2 className="text-white text-lg font-bold mb-2">Portfolio</h2>
        
      
      <ul className="flex py-2 justify-between text-base text-slate-800 w-full items-center bg-slate-800">
       
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          

        >
          <li className="cursor-pointer items-center font-semibold relative group">
          <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">Home</p>
          <AiOutlineHome size={28}/>
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          

        >
          <li className="cursor-pointer items-center font-semibold relative group">
          <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80 whitespace-nowrap ">About me</p>
          <BsPerson size={28}/>
          </li>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          

        >
          <li className="cursor-pointer items-center font-semibold relative group">
          <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">Skills</p>
          <FaRegLightbulb size={28}/>
          </li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          

        >
          <li className="cursor-pointer items-center font-semibold relative group">
          <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">Projects</p>
            <IoBriefcaseOutline size={20}/>

          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          

        >
          <li className="cursor-pointer items-center font-semibold relative group">
          <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block transition-all duration-500 opacity-80 whitespace-nowrap">Contact me</p>
            <MdOutlineEmail size={28}/>
          </li>
        </NavLink>
      </ul>
      
    </nav>
  )
}

export default MobileNav