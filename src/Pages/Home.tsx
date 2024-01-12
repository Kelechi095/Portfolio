import { HiOutlineMenuAlt2 } from "react-icons/hi";
//import {projects} from '../../data.ts'
import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

/* interface Project {
    id: number
    name: string
    img: string

} */

export default function Home() {
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

  return (
    <main className="main" onClick={() => setIsOpen(false)}>
      {isOpen && (
        <nav className="hidden-nav" onClick={(e) => e.stopPropagation()}>
          <ul className="hidden-nav-ul">
            <li className="cursor-pointer text-sm">Projects</li>
            <li className="cursor-pointer text-sm">Resume</li>
            <li className="cursor-pointer text-sm">About me</li>
            <li className="cursor-pointer text-sm">Contact me</li>

            <li
              className="cursor-pointer text-xs font-semibold uppercase w-fit"
              onClick={changeTheme}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </li>
          </ul>
        </nav>
      )}
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
          <h2 className="logo-title">
            Portfolio
          </h2>
          <li className="nav-li">Home</li>
          <li className="nav-li">Skills</li>
          <li className="nav-li">Projects</li>
          <li className="nav-li">Contact me</li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
          {theme === "light" ? (
            <BsFillMoonFill className="hidden lg:block cursor-pointer" onClick={changeTheme}/>
          ) : (
            <BsFillSunFill className="text-white hidden lg:block cursor-pointer" onClick={changeTheme}/>
          )}
          
          <button className="nav-button">Download resume</button>
        </ul>
      </nav>
      <section className="mt-24">
        <h2 className="hero-label">Hi. My name is Awoms Kelechi</h2>
        <h1 className="hero-main-text">
          I am a fullstack web developer
        </h1>
        <h3 className="hero-sub-text">I have built stable, elegant, secure and reliable websites with functional user experience, responsive design, cross browser compatibility and great web accessibility
        </h3>
        
        <div className="flex justify-center">
          <button className="hero-button">
            View my projects
          </button>
        </div>
      </section>

      {/* <section className="cards-container">
        {projects.map((project: Project) => (
          <div className="image-card" key={project.id}>
            <img
              src={project.img}
              alt={project.name}
              className="image"
            />
            <div className="text-overlay-container">
              <h4 className=" font-medium text-lg tracking-wide text-white drop-shadow-2xl">
                {project.name}
              </h4>
            </div>
          </div>
        ))}
      </section> */}
    </main>
  );
}