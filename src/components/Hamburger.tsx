import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

interface MobileNavProps {
  changeTheme: () => void;
  toggleSidebar: () => void;
  theme: string;
}

export const Hamburger = ({
  toggleSidebar,
}: MobileNavProps) => {

  const activeStyles = "text-lg font-bold text-white border-b-2 border-white opacity-95"
  const inactiveStyles = "text-lg text-white opacity-95"

  return (
    <nav className="hidden-nav" onClick={(e) => e.stopPropagation()}>
      <LiaTimesSolid
        size={30}
        className="cursor-pointer text-white"
        onClick={toggleSidebar}
      />
      <ul className="hidden-nav-ul">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center">
            Home
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center">
            About me
          </li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center ">
            Skills
          </li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center">
            Projects
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center">
            Contact me
          </li>
        </NavLink>

      </ul>
    </nav>
  );
};
