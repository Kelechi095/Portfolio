import { projects } from "../../data.ts";
import { ProjectType } from "../../data.ts";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Nav />
      <section className="mt-14">
        {/* <h2 className="hero-label">I'm open for hire! Please reach out</h2> */}
        
        <h1 className="hero-main-text">
          I am Kelechi
        </h1>
        <h1 className="text-3xl mt-2 md:text-2xl lg:text-5xl text-cyan-800 tracking-wide dark:text-white">
          Fullstack Web Developer
        </h1>
        

        {/* <div className="flex justify-center">
          <h2 className="services-header">
            <span>Services I Render</span>
            <BiChevronsDown size={22} />
          </h2>
        </div> */}
      </section>

      
        <h2 className="services-header">My Services</h2>
      <section className="cards-container">
        {projects.map((project: ProjectType) => {
          const Icon = project.icon;
          return (
            <div key={project.id} className="card">
              <Icon size={40} className="text-cyan-600 " />

              <h2 className="text-xl font-semibold mt-6 text-cyan-600">{project.text1}</h2>
              <p className="text-base mt-2 text-cyan-950 dark:text-white">{project.text2}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}
