import { NavLink } from "react-router-dom";

const HiddenNav = ({ isOpen, setIsOpen }: any) => {
  const activeStyles = "text-blue-300";
  const inactiveStyles =
    "text-slate-800 hover:text-cyan-600 text-zinc-100 hover:text-neutral-400";

  return (
    <div
      className={`
    ${
      isOpen
        ? "absolute left-0 top-0 h-[100%] flex flex-col py-8 px-4 justify-around rounded-r-3xl text-base gap-16 text-slate-800 w-[150px] items-end bg-slate-800 -z-50 transition-all duration-1000"
        : "absolute -left-40 top-0 h-[100%] flex flex-col py-8 px-4 justify-around rounded-r-3xl text-base gap-16 text-slate-800 w-[150px] items-end bg-slate-800 -z-50 transition-all duration-1000 "
    }
    `}
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        onClick={() => setIsOpen(false)}
      >
        <li className="cursor-pointer items-center font-semibold">
          {/* <p className="text-white absolute">Home</p> */}
          Home
        </li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        onClick={() => setIsOpen(false)}
      >
        <li className="cursor-pointer items-center font-semibold">About</li>
      </NavLink>

      <NavLink
        to="/skills"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        onClick={() => setIsOpen(false)}
      >
        <li className="cursor-pointer items-center font-semibold">Skills</li>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        onClick={() => setIsOpen(false)}
      >
        <li className="cursor-pointer items-center font-semibold">Projects</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        onClick={() => setIsOpen(false)}
      >
        <li className="cursor-pointer items-center font-semibold">Contact</li>
      </NavLink>
    </div>
  );
};

export default HiddenNav;
