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
        <h4 className="font-semibold text-white text-lg mb-1">BookTekka</h4>
        <img src={Booktekka} className="rounded" />
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
          href="https://github.com/Kelechi095/BookTekka-Nextjs"
          className="p-3 bg-slate-800 text-white mt-4 text-base md:text-lg w-[50%] rounded hover:bg-slate-700 transition duration-300 whitespace-nowrap flex justify-center items-center gap-2"
        >
          <FaGithub className="text-lg" />

          <p>Github code</p>
          <GoLinkExternal className="text-lg" />
        </a>
      </div>

      <section className="text-white mt-6 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold text-lg">
          Project Description:
        </h4>
        <p>
          Booktekka is a web application created to allow users recommend books
          to one another. Users can create profiles and blah blha. I created
          this app out of a necessity because as someone that liked books, it
          was deifficault getting recommendations based on the kind of books I
          liked blah blah
        </p>
      </section>

      <section className="text-white mt-2 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold text-lg">
          Languages, frameworks and libraries used:
        </h4>
        <ul className="">
          <li>
            The project was written in{" "}
            <span className="font-semibold">TypeScript</span>
          </li>
          <li>
            The project was built with{" "}
            <span className="font-semibold">NextJs</span> and deployed on{" "}
            <span className="font-semibold ">Vercel</span>
          </li>
          <li>
            <span className="font-semibold">TailwindCSS</span> was used for
            styling
          </li>
          <li>
            {" "}
            <span className="font-semibold ">MongoDB</span> served as the
            database
          </li>
          <li>
            {" "}
            <span className="font-semibold ">Prisma</span> served
            as the ORM
          </li>
          <li>
            Authentication was handled using{" "}
            <span className="font-semibold ">NextAuth</span>
          </li>
          <li>
            <span className="font-semibold">React Hook Form</span>{" "}
            was used to handle form validation, including email field validation
            and error messages
          </li>
          <li>
            Client state management was handled using{" "}
            <span className="font-semibold">Zustand</span>
          </li>
          <li>
            <span className="font-semibold">
              Server side rendering{" "}
            </span>
            was incorporated
          </li>
          <li>
            APIs were created using{" "}
            <span className="font-semibold">
              NextJs API routes
            </span>
          </li>
          <li>
            <span className="font-semibold">Axios</span> was used
            for HTTP requests
          </li>
          <li>
            <span className="font-semibold ">Cloudinary</span> was
            used for image uploads
          </li>
          <li>
            <span className="font-semibold ">React hot toast</span>{" "}
            was used for toast messages
          </li>
        </ul>
      </section>
      <section className="text-white mt-2 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold text-lg">
          Website functionality:
        </h4>
        <p>
          - Search functionality including the use of debounce. I used a special
          custom hook for the debounce
        </p>
      </section>
      <section className="text-white mt-6 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold text-lg">
          Some Background Info:
        </h4>
        <p>
          This is the second version of this project, but the only one currently
          in production. The first version was written in Javascript and built
          using Vanilla React. Client side state was handled using Redux tool
          kit while server side state was handled using React Query. It has a
          seperate nodejs backend deployed on a seperate server. Due to constant
          spinning down of the server and high cost of hosting, I decided to
          recreate the project using Nextjs and deploying on vercel. You can
          find the links to the github codes for the frontend and backend here:
        </p>
        <div className="flex flex-col">
          <a
            href="https://github.com/Kelechi095/BookTekka-Frontend"
            className="underline text-blue-400"
          >
            Frontend
          </a>{" "}
          <a
            href="https://github.com/Kelechi095/BookTekka-api"
            className="underline text-blue-400"
          >
            Backend
          </a>
        </div>
        <p>
          I decided to rebuild the project with Nextjs over React for various
          reasons:
          <p>
            - I prefer the folder based routing of Nextjs to react router dom.
          </p>
          <p>
            - Deploying Fullstack Nextjs projects on Vercel was a breeze
            compared to deploying elsewhere
          </p>
          <p>
            Thirdly since I was using Typescript on the frontend and backend,
            Nextjs api routes and server side rendering just seemed more suited
            to the project I was building.
          </p>
        </p>
      </section>
    </Wrapper>
  );
};

export default Projects;
