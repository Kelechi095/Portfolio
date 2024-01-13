import { NavLink } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  changeTheme: () => void;
  toggleSidebar: () => void;
  theme: string;
  isOpen: boolean;
}

const MobileNav = ({
  changeTheme,
  toggleSidebar,
  theme,
  isOpen,
}: NavbarProps) => {

  const activeStyles = "text-emerald-600 dark:text-emerald-600"
  const inactiveStyles ="text-slate-800 hover:text-emerald-600 dark:text-zinc-100 dark:hover:text-emerald-600"
  
  return (
    <nav
      className={isOpen ? "nav-open" : "flex items-center justify-between"}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="flex items-center gap-4 lg:gap-8 text-slate-800 tracking-tighter">
        {isOpen ? (
          <LiaTimesSolid
            size={30}
            className="cursor-pointer lg:hidden dark:text-white"
            onClick={toggleSidebar}
          />
        ) : (
          <HiOutlineMenuAlt2
            size={30}
            className="cursor-pointer lg:hidden dark:text-slate-100"
            onClick={toggleSidebar}
          />
        )}
        <h2 className="logo-title">Portfolio</h2>
        <div className="hidden md:flex justify-between gap-8 text-sm items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyles : inactiveStyles
            }
          >
            <li className="cursor-pointer items-center font-semibold text-base">
              Home
            </li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
            }
          >
            <li className="cursor-pointer items-center font-semibold text-base">
              About me
            </li>
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
            }
          >
            <li className="cursor-pointer items-center font-semibold text-base">
              Skills
            </li>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
            }
          >
            <li className="cursor-pointer items-center font-semibold text-base">
              Projects
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
            }
          >
            <li className="cursor-pointer items-center font-semibold text-base">
              Contact me
            </li>
          </NavLink>
        </div>
      </ul>
      <ul className="flex justify-between items-center gap-4">
        {theme === "light" ? (
          <BsFillMoonFill
            className="hidden lg:block cursor-pointer hover:text-emerald-600"
            onClick={changeTheme}
          />
        ) : (
          <BsFillSunFill
            className="text-white hidden lg:block cursor-pointer hover:text-emerald-600"
            onClick={changeTheme}
          />
        )}

        <button className="nav-button">Download resume</button>
      </ul>
    </nav>
  );
};

export default MobileNav;
