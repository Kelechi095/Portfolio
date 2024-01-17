import { projects } from "../../data.ts";
import { ProjectType } from "../../data.ts";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Nav />
      <section className="mt-28">
         
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-neutral-100 font-serif text-center">
          I am Kelechi
        </h1>
        <h1 className="mb-12  text-2xl mt-2 md:text-2xl lg:text-5xl text-neutral-100 tracking-wide dark:text-white text-center">
          Fullstack Web Developer
        </h1>
        

        
      </section>

      
      <section className="cards-container">
        {projects.map((project: ProjectType) => {
          /* const Icon = project.icon; */
          return (
            <div key={project.id} className="card">
              {/* <Icon size={40} className="text-blue-200 " /> */}

              <h2 className="text-xl font-semibold mt-6 text-blue-200">{project.text1}</h2>
              <p className="text-base mt-2 text-neutral-100 ">{project.text2}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}
