import { NavLink } from "react-router-dom";
//import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const activeStyles = "text-blue-300";
  const inactiveStyles =
    "text-slate-800 hover:text-cyan-600 text-zinc-100 hover:text-neutral-400";

  return (
    <nav className="sticky top-0 left-0 z-10 bg-gray-900 h-20 w-full flex items-center">
      <ul className="flex justify-start text-sm md:text-base gap-6 text-slate-800 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold">
            Home
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold">
            About
          </li>
        </NavLink>
        
        
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold">
            Projects
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold">
            Contact
          </li>
        </NavLink>
        
      </ul>
    </nav>
  );
};

export default Navbar;
