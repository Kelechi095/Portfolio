import { NavLink } from "react-router-dom";
//import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const activeStyles = "text-blue-300 text-xs";
  const inactiveStyles =
    "text-slate-800 hover:text-cyan-600 dark:text-zinc-100 dark:hover:text-neutral-400";

  return (
    <nav>
      <ul className="flex justify-start text-sm md:text-base gap-8 text-slate-800 items-center">
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
            About me
          </li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          <li className="cursor-pointer items-center font-semibold">
            Skills
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
            Contact me
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
