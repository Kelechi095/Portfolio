import { createContext, useState, useEffect } from "react";
import React from "react";

type CartContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  theme: string;
  toggleSidebar: () => void;
  changeTheme: () => void;
};

export const NavContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const NavContextProvider = (props: Props) => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html: HTMLHtmlElement | null = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  const value = {
    changeTheme,
    toggleSidebar,
    theme,
    isOpen,
    setIsOpen
  };

  return <NavContext.Provider value={value} {...props} />;
};