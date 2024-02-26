import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Booktekka from "../public/images/booktekka.png";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  return (
    <Wrapper>
      <Title label="Projects" />

      <div>
        <Subtitle label="Booktekka" />
        <img src={Booktekka} />
      </div>
      <div className="flex justify-between gap-4 items-center">
        <a
          href="http://booktekka.vercel.app"
          className="p-3 bg-slate-800 text-white mt-4 text-lg w-[50%] rounded hover:bg-slate-700 transition duration-300 whitespace-nowrap flex justify-center items-center gap-2"
        >
          <p>Live Site</p>
          <GoLinkExternal />
        </a>
        <a
          href="http://booktekka.vercel.app"
          className="p-3 bg-slate-800 text-white mt-4 text-lg w-[50%] rounded hover:bg-slate-700 transition duration-300 whitespace-nowrap flex justify-center items-center gap-2"
        >
          <FaGithub className="text-lg" />

          <p>Github code</p>
          <GoLinkExternal className="text-lg" />
        </a>
      </div>

      <section className="text-white mt-6">
        <h4 className="text-blue-400 font-semibold text-lg">Project Description:</h4>
        <p>
          Booktekka is a web application created to allow users recommend books
          to one another. Users can create profiles and blah blha. I created
          this app out of a necessity because as someone that liked books, it
          was deifficault getting recommendations based on the kind of books I
          liked blah blah
        </p>
      </section>

      <section className="text-white mt-2">
        <h4 className="text-blue-400 font-semibold text-lg">Languages, frameworks and libraries used:</h4>
        <p>- The project was coded in TypeScript</p>
        <p>- The project was built with Nextjs and deployed on Vercel</p>
        <p>- TailwindCSS was used for styling</p>
        <p> - MongoDb served as the database</p>
        <p> - Prisma served as the ORM</p>
        <p>- Authentication and authorization was handled using NextAuth and Bcryptjs</p>
        <p>- React hook form was used to handle form validation, including email field validation and error messages</p>
        <p>- Client state management was handled using Zustand</p>
        <p>- Server side rendering was incorporated</p>
        <p>- Apis were created using Nextjs 13 api routes</p>
        <p>- </p>
      </section>
      <section className="text-white mt-2">
        <h4 className="text-blue-400 font-semibold text-lg">Website functionality:</h4>
        <p>- Search functionality including the use of debounce. I used a special custom hook for the debounce</p>
      </section>
    </Wrapper>
  );
};

export default Projects;
