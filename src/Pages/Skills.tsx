import { BsFillPauseBtnFill } from "react-icons/bs";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";



const Skills = () => {
  return (
    <Wrapper>
      <Nav />
      <Title label="SKILLS" />
      {/*  */}

      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white py-2 px-6 dark:bg-zinc-950 shadow-sm rounded">
          <Subtitle label="Frontend" />
          <ul>
            <ListItem text="HTML5" icon={FaHtml5} />
            <ListItem text="CSS3" icon={IoLogoCss3} />
            <ListItem text="JavaScript(es6+)" icon={IoLogoJavascript} />
            <ListItem text="TypeScript" icon={SiTypescript} />
            <ListItem text="ReactJs" icon={FaReact} />
            <ListItem text="NextJs" icon={TbBrandNextjs} />
          </ul>
        </div>

        <div className="bg-white py-2 px-6 dark:bg-zinc-950 shadow-sm roundex">
          <Subtitle label="Backend" />
          <ul>
            <ListItem text="NodeJs" icon={BsFillPauseBtnFill} />
            <ListItem text="Express" icon={BsFillPauseBtnFill} />
            <ListItem text="PostgreSQL" icon={BsFillPauseBtnFill} />
            <ListItem text="MongoDB" icon={BsFillPauseBtnFill} />
            <ListItem text="Prisma" icon={BsFillPauseBtnFill} />
          </ul>
        </div>

        <div className="bg-white py-2 px-6 dark:bg-zinc-950 shadow-sm rounded">
          <Subtitle label="Technologies/Libraries" />
          <ul>
            <ListItem text="React Query" icon={BsFillPauseBtnFill} />
            <ListItem text="Redux tool kit" icon={BsFillPauseBtnFill} />
            <ListItem text="Tailwind CSS" icon={BsFillPauseBtnFill} />
            <ListItem text="Axios" icon={BsFillPauseBtnFill} />
            <ListItem text="Git" icon={BsFillPauseBtnFill} />
            <ListItem text="NPM" icon={BsFillPauseBtnFill} />
            <ListItem text="Jest" icon={BsFillPauseBtnFill} />
          </ul>
        </div>

        <div className="bg-white py-2 px-6 dark:bg-zinc-950 shadow-sm roundex">
          <Subtitle label="Soft Skills" />
          <ul>
            <ListItem text="Good communication skills" icon={GiSkills} />
            <ListItem text="Critical thinking and problem solving" icon={GiSkills} />
            <ListItem text="Team work and collaboration" icon={GiSkills} />
            <ListItem text="Professionalism and storng work ethic" icon={GiSkills} />
            <ListItem text="Flexibility and adaptability" icon={GiSkills} />
            <ListItem text="Time management skills" icon={GiSkills} />
          </ul>
        </div>

        
      </section>
    </Wrapper>
  );
};

export default Skills;
