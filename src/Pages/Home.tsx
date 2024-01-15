import { projects } from "../../data.ts";
import { ProjectType } from "../../data.ts";
import { BiChevronsDown } from "react-icons/bi";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Nav />
      <section className="mt-24">
        <h2 className="hero-label">I'm open for hire! Please reach out</h2>
        <h1 className="hero-main-text">
          Awoms Kelechi
        </h1>
        <h1 className="mt-1 mb-2 mx-auto max-w-md text-3xl md:text-2xl lg:text-5xl md:max-w-lg  lg:max-w-4xl text-center p-2 text-emerald-950 tracking-wide dark:text-white">
          Web Developer
        </h1>
        

        <div className="flex justify-center">
          <h2 className="services-header">
            <span>Services I Render</span>
            <BiChevronsDown size={22} />
          </h2>
        </div>
      </section>

      
      <section className="cards-container">
        {projects.map((project: ProjectType) => {
          const Icon = project.icon;
          return (
            <div key={project.id} className="card">
              <Icon size={40} className="text-emerald-600 " />

              <h2 className="text-xl font-semibold mt-6 text-emerald-600">{project.text1}</h2>
              <p className="text-base mt-2 text-emerald-950 dark:text-white">{project.text2}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}
