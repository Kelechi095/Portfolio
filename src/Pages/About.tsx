import Navbar from "../components/Navbar";
import Subtitle from "../components/Subtitle";
//import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="my-8">

      <Subtitle label="Basic Info:"/>
      <p className="dark:text-white text-sm md:text-[17px] text-neutral-100 mb-6">
        I am a fullstack web developer fron Nigeria.  I am goal-driven, ambitious, and seasoned developer with experience in shipping features for large-scale and real-time applications, as well as
        building consumer-facing products. I am actively seeking a frontend or backend role
        in a growing company where I can apply my creative mindset and keen
        ability to work on diverse projects.
      </p>
      
      <Subtitle label="Skills:"/>
      <p className=" text-white text-sm md:text-[17px] mb-6">
      On the frontend I have experience working with <span className="text-blue-400 font-semibold">HTML5, CSS3, Javascript, typescript, React and NextJs.</span>  On the backend I have experience working with <span className="text-blue-400 font-semibold">NodeJs, Express, PostgreSQL, MongoDB and Prisma.</span>  I also have experience working with tools and libraries such as <span className="text-blue-400 font-semibold">React Query, Redux tool kit, TailwindCss, Axios, Git, Jest and NPM</span> 
      </p>
      <Subtitle label="Work Experience:"/>
      <p className=" text-white text-sm md:text-[17px] mb-6">
        I have <span className="text-blue-400 font-semibold">worked for two years as a freelance frontend developer on upwork</span> where I was responsible for architecting and building the frontend of new features, integrating data from various
        backend services and databases into responsive web apps, translating
        design solutions into high-quality, scalable code, optimizing
        applications for maximum performance across different web-capable
        devices and browsers. During this period, I have developed strong
        problem-solving skills, attention to detail, and the ability to work
        independently. I am confident in my ability to tackle complex challenges
        and complete projects to a high standard and within deadlines. My
        goal-driven attitude and passion for delivering high-quality work makes
        me an ideal candidate for any team in need of a dynamic and
        result-oriented individual.
      </p>
      {/* <p className=" dark:text-white text-sm md:text-[17px] text-cyan-900 mb-6">
        I have also collaborated with other web developers on open source projects, where I added functionality to web application, wrote tests, and participated in code reviews to ensure
        adherence to best practices and coding standards.
      </p>
       */}
      
      <Subtitle label="Hobbies:"/>
      <p className=" text-white text-sm md:text-[17px] mb-6">
        Beyond my professional life, I have a range of interests which include
        reading, writing stories, playing the piano and listening to music. I am also an ardent follower of sports, particularly tennis, football and track and field athletics. I also have a keen interest in history.
      </p>
      </div>
    </Wrapper>
  );
};

export default About;
