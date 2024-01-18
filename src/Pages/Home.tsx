import { projects } from "../../data.ts";
import { ProjectType } from "../../data.ts";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-1">
        <div>
      <Nav />
          <section className="mt-24">
            <p className="text-base md:text-xl font-semibold lg:text-3xl text-[#fff]">
              Hi there!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold lg:text-7xl text-[#fff]">
              I am <span className="text-blue-400">Kelechi.</span>
            </h1>

            <p className="max-w-md text-[#fff] text-[17px] mt-2">
              I am a <span className="text-blue-200 font-semibold">Fullstack Web developer</span> who is passionate about
              my work. With usability, accessibility and functionality in
              mind, I build simple, flexible, mobile responsive & custom
              websites for individuals & small/medium sized company
            </p>
            <button className="p-4 bg-slate-800 text-white my-2 text-base md:text-xl w-[70%] md:w-[50%] rounded">Download Resume</button>
          </section>
        </div>
        <div>
          <h2 className="text-lg font-bold text-neutral-500 md:text-end">SERVICES</h2>
          <section className="cards-container">
            {projects.map((project: ProjectType) => {
              /* const Icon = project.icon; */
              return (
                <div key={project.id} className="card">
                  {/* <Icon size={40} className="text-blue-200 " /> */}

                  <h2 className="text-lg font-semibold text-white">
                    {project.text1}
                  </h2>
                  <p className="text-base text-[#fff] ">{project.text2}</p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
