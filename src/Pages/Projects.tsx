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
        <img
          src={Booktekka}
          className="rounded hover:opacity-90 transition-all duration-500"
        />
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
        <h4 className="text-blue-400 font-semibold md:text-lg">
          Project Description:
        </h4>
        <p>
          Booktekka is a web application I created to allow book readers to
          recommend books to one another, create a library of books they want to read, have read, and are currently reading. I created this website out of a
          personal need. As someone that enjoyed reading books, it was difficult
          to find websites where I could get book recommendations based on the
          genre I wanted to read and sort those recommendations based on user
          ratings/likes and reviews. The closest thing I could find was reddit's
          bookrecommendation subreddit but this wasn't satisfactory. I also wanted an option to store my favorite book recommendations in some place where I could keep track of them, and probably also keep track of my reading progress. So I decided to solve the problem myself. It took me over a month to build
          this website and although it's currently in production, I still intend
          on adding more features in the future.
        </p>
      </section>

      <section className="text-white mt-2 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold md:text-lg">
          Languages and libraries used:
        </h4>
        <ul className="list-disc ml-5">
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
            <span className="font-semibold ">Prisma</span> served as the ORM
          </li>
          <li>
            Authentication was handled using{" "}
            <span className="font-semibold ">NextAuth</span>
          </li>
          <li>
            <span className="font-semibold">React Hook Form</span> was used to
            handle form validation, including email field validation and error
            messages
          </li>
          <li>
            Client-side state management was handled using{" "}
            <span className="font-semibold">Zustand</span>
          </li>
          <li>
            <span className="font-semibold">Server side rendering </span>
            was incorporated
          </li>
          <li>
            APIs were created using{" "}
            <span className="font-semibold">NextJs API routes</span>
          </li>
          <li>
            <span className="font-semibold">Axios</span> was used for HTTP
            requests
          </li>
          <li>
            <span className="font-semibold ">Cloudinary</span> was used for
            image uploads
          </li>
          <li>
            <span className="font-semibold ">React hot toast</span> was used for
            toast messages
          </li>
        </ul>
      </section>

      <section className="text-white mt-2 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold text-lg">
          Website functionality:
        </h4>
        <ul className="list-disc ml-5">
          <li>User authentication and authorization</li>
          <li>Admin dashboard with edit and delete options, as well as user and recommendations statistics</li>
          <li>Server side pagination</li>
          <li>
            Search functionality including the use of debounce. I used a
            special custom hook for the debounce
          </li>
          <li>Filter and sort functionality for both recommendation and library pages</li>
          <li>Registered users can search for books to add to their library using google's books api</li>
          <li>Users and guests can view the public profile of other users by clicking on their profile images on both recommendation pages and reviews</li>
          <li>Users can update their profiles and even add or update profile photos</li>
          <li>Private profile is only accessible to the user that owns that profile</li>
          <li>Users can recommend books from their library and those books will get added to the recommendation page</li>
          <li>Only logged in users can like a recommendation, add books to their libraries, recommend books or leave reviews</li>
          <li>Users can edit and delete books in their libraries</li>
          <li>Users can monitor their reading progress by updating the current page and total number of pages in the book they are currently reading</li>
        </ul>
      </section>

      <section className="text-white mt-6 text-sm md:text-base">
        <h4 className="text-blue-400 font-semibold md:text-lg">
          The first version of this project:
        </h4>
        <p>
          There was an earlier version of this project that is no longer in
          production. It was written in Javascript and built using Vanilla
          React. In this version, server-side state was handled using React
          Query, while client side state was handled using React context API
          because I felt employing Redux tool kit would have been a bit
          superflous as most of the complex functionality was server side. The
          project had a seperate Node.js and Express.js backend deployed on a
          seperate server. But due to constant spinning down of the server and
          high cost of hosting, I decided to recreate the project using Nextjs
          and deployed it on vercel. You can find the github codes for the{" "}
          <a
            href="https://github.com/Kelechi095/BookTekka-Frontend"
            className="underline text-blue-400"
          >
            Frontend
          </a>{" "}
          and
          <a
            href="https://github.com/Kelechi095/BookTekka-api"
            className="underline text-blue-400"
          >
            {" "}
            Backend
          </a>{" "}
          in these links
        </p>
        <div className="flex flex-col"></div>
        <p>
          I decided to rebuild the project using Nextjs instead of React for various
          reasons:
          <p>
            - I prefer the folder based routing of Nextjs to react router dom.
          </p>
          <p>
            - Deploying Fullstack Nextjs projects on Vercel was a breeze
            compared to deploying elsewhere
          </p>
          <p>
            - Since I was using Typescript on the frontend and backend, Nextjs
            api routes and server side rendering just seemed more suited to the
            project I was building.
          </p>
        </p>
      </section>
    </Wrapper>
  );
};

export default Projects;
