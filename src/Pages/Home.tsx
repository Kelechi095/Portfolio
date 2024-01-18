import { projects } from "../../data.ts";
import { ProjectType } from "../../data.ts";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-1">
        <div className="h-screen">
          <Nav />
          <section className="mt-24">
            <p className="text-lg md:text-xl font-semibold lg:text-3xl text-[#fff]">
              Hi there!
            </p>
            <h1 className="max-w-[50%] text-5xl font-semibold md:text-6xl md:font-bold lg:text-7xl text-[#fff]">
              I am <span className="text-blue-400">Kelechi.</span>
            </h1>

            <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2">
              I am a{" "}
              <span className="text-blue-200 font-semibold">
                Fullstack Web developer
              </span>{" "}
              from Nigeria. I am goal-driven, ambitious, and seasoned developer
              with experience in shipping features for large-scale and real-time
              applications, as well as building consumer-facing products. I am
              actively seeking a frontend or backend role in a growing company
              where I can apply my creativity and keen ability to work on
              diverse projects.
            </p>
            <button className="p-4 bg-slate-800 text-white my-2 text-xl md:text-xl w-[70%] md:w-[50%] rounded hover:bg-slate-700 transition duration-300">
              Download Resume
            </button>
          </section>
        </div>
        <div>
          <h2 className="text-lg text-neutral-500 md:text-end font-medium">
            My Services
          </h2>
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
