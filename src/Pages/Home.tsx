//import {projects} from '../../data.ts'

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

/* interface Project {
    id: number
    name: string
    img: string

} */

export default function Home() {

  return (
    <Wrapper>
      <Nav />
      <section className="mt-24">
        <h2 className="hero-label">I'm open for hire! Please Reach out</h2>
        <h1 className="hero-main-text">I'm Kelechi. I am a fullstack web developer</h1>
        <h3 className="hero-sub-text">
          I am smart, hardworking, I enjoy working within a team and I'm always willing to do what is required to achieve the goals of my employer.
        </h3>

        <div className="flex justify-center">
          <button className="hero-button">My Projects</button>
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
    </Wrapper>
  );
}
