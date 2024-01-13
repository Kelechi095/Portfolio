import { useNav } from "../hooks/useNav";
import { Hamburger } from "./Hamburger";
import MobileNav from "./MobileNav";

const Nav = () => {

    const {isOpen, changeTheme, toggleSidebar, theme} = useNav() 
  
  return (
    <>
      {isOpen && (
        <Hamburger
          changeTheme={changeTheme}
          toggleSidebar={toggleSidebar}
          theme={theme}
        />
      )}
      <MobileNav
        changeTheme={changeTheme}
        toggleSidebar={toggleSidebar}
        theme={theme}
        isOpen={isOpen}
      />
    </>
  );
};

export default Nav;
