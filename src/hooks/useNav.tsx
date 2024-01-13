import { useContext } from "react";
import { NavContext } from "../components/context/NavContext";

export const useNav = () => {
  const context = useContext(NavContext);

  if (context === null) {
    throw new Error("useNav must be used within a NavContextProvider");
  }

  return context;
};
