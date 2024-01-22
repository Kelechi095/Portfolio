import { NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const getPage = () => {
    if(location.pathname.slice(1) === '') return 'Home'
    const newStr = location.pathname.slice(1)
    return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase()

  }



  return (
    <nav className="py-2 px-6 sticky left-0 top-0 md:hidden bg-slate-800 w-full">
      <h2 className="text-white text-lg font-bold my-2">{getPage()}</h2>

      <ul className="flex py-2 justify-between text-base text-slate-800 w-full items-center bg-slate-800">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative flex flex-col justify-center">
        
              {/* <p className="text-white absolute top-[44px] bg-slate-800 rounded-b p-2 px-6 text-sm">
                {getPage()}
              </p> */}
        
            <AiOutlineHome size={28} />
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative flex flex-col justify-center">
            
            <BsPerson size={28} />
          </li>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative flex flex-col justify-center">
            
            <FaRegLightbulb size={28} />
          </li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative flex flex-col justify-center">
            
            <IoBriefcaseOutline size={28} />
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative flex flex-col justify-center">
            
            <MdOutlineEmail size={28} />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileNav;
