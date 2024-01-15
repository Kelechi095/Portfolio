import Nav from "../components/Nav";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const About = () => {
  return (
    <Wrapper>
      <Nav />
      <Title label="ABOUT MYSELF" />
      <Subtitle label="Basic Info:"/>
      <p className="dark:text-white font-normal text-emerald-900 mb-6">
        I am a fullstack web developer fron Nigeria.  I am goal-driven, ambitious, and seasoned developer with experience in
        shipping features for large-scale and real-time applications, as well as
        building consumer-facing products. I am actively seeking a frontend role
        in a growing company where I can apply my creative mindset and keen
        ability to work on diverse projects.
      </p>
      
      <Subtitle label="Work Experience:"/>
      <p className=" dark:text-white font-normal text-emerald-900 mb-6">
        With my experience in the industry, I have developed strong
        problem-solving skills, attention to detail, and the ability to work
        independently. I am confident in my ability to tackle complex challenges
        and complete projects to a high standard and within deadlines. My
        goal-driven attitude and passion for delivering high-quality work make
        me an ideal candidate for any team in need of a dynamic and
        result-oriented individual.
      </p>
      <p className=" dark:text-white font-normal text-emerald-900 mb-6">
        I am currently working as a freelancer. In this role, I have been responsible for architecting and
        building the frontend of new features, integrating data from various
        backend services and databases into responsive web apps, translating
        design solutions into high-quality, scalable code, optimizing
        applications for maximum performance across different web-capable
        devices and browsers, collaborating with team members to implement user
        stories and write tests, and participating in code reviews to ensure
        adherence to best practices and coding standards.
      </p>
      <p className=" dark:text-white font-normal text-emerald-900 mb-6">
        My technical skills include HTML, CSS, JavaScript, TypeScript, React.js,
        Next.js, MongoDB, Tailwind CSS, Git, Firebase, Redux/Redux-Toolkit,
        React-Query, Zod, and Next-Auth/Auth.js. These skills cover a broad
        range of frontend development technologies and frameworks, showcasing my
        versatility and ability to adapt to different projects and environments.
      </p>
      
      <Subtitle label="Hobbies:"/>
      <p className=" dark:text-white font-normal text-emerald-900 mb-6">
        Beyond my professional life, I have a range of interests which includes
        reading, traveling, and listening to music. I have obtained
        certifications in Responsive Web Design and Frontend Development
        Libraries. Additionally, I have completed Jobberman Soft Skills Training
        Certification, I believe these certifications will further enhance my
        professional skill set.
      </p>
    </Wrapper>
  );
};

export default About;
