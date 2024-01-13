import { NavLink } from "react-router-dom";

interface MobileNavProps {
  changeTheme: () => void;
  toggleSidebar: () => void;
  theme: string;
}

export const Hamburger = ({
  changeTheme,
  toggleSidebar,
  theme,
}: MobileNavProps) => {
  return (
    <nav className="hidden-nav" onClick={(e) => e.stopPropagation()}>
      <ul className="hidden-nav-ul">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-600" : "text-slate-800"
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center font-semibold text-base">
            Home
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-cyan-600" : "text-slate-800"
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center font-semibold text-base">
            About Me
          </li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-cyan-600" : "text-slate-800"
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center font-semibold text-base">
            Skills
          </li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-cyan-600" : "text-slate-800"
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center font-semibold text-base">
            Projects
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-cyan-600" : "text-slate-800"
          }
          onClick={toggleSidebar}
        >
          <li className="cursor-pointer items-center font-semibold text-base">
            Contact Me
          </li>
        </NavLink>

        <li
          className="cursor-pointer text-xs font-semibold uppercase w-fit"
          onClick={() => {
            changeTheme();
            toggleSidebar();
          }}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </li>
      </ul>
    </nav>
  );
};
