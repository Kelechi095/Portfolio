import { NavLink } from "react-router-dom";
//import { FaDownload } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  const activeStyles = "text-blue-300";
  const inactiveStyles =
    "text-slate-800 hover:text-cyan-600 text-zinc-100 hover:text-neutral-400";

  return (
    <nav className="fixed top-0 left-0 bg-transparent h-screen py-6 w-[50px] hidden md:block">
      <ul className="flex flex-col py-8 mt-4 justify-around rounded-r-3xl text-base gap-16 text-slate-800 w-full h-[95%] items-center bg-slate-800 relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative group">
            <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">
              Home
            </p>
            <AiOutlineHome size={36} />
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative group">
            <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80 whitespace-nowrap ">
              About me
            </p>
            <BsPerson size={36} />
          </li>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative group">
            <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">
              Skills
            </p>
            <LiaToolsSolid size={36} />
          </li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative group">
            <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block opacity-80">
              Projects
            </p>
            <IoBriefcaseOutline size={36} />
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold relative group">
            <p className="text-white absolute left-14 bg-slate-800 rounded p-2 hidden group-hover:block transition-all duration-500 opacity-80 whitespace-nowrap">
              Contact me
            </p>
            <MdOutlineEmail size={36} />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
