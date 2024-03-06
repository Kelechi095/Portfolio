import ListItem from "../components/ListItem";
import Subtitle from "../components/Subtitle";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const Skills = () => {
  return (
    <Wrapper>
      <Title label="Skills" />

      <section className="grid grid-cols-1 gap-8 mb-8 w-full px-2">
        <div className="py-2">
          <Subtitle label="Frontend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="HTML5" icon={FaHtml5} />
            <ListItem text="CSS3" icon={IoLogoCss3} />
            <ListItem text="JavaScript" icon={IoLogoJavascript} />
            <ListItem text="TypeScript" icon={SiTypescript} />
            <ListItem text="React.js" icon={FaReact} />
            <ListItem text="Next.js" icon={TbBrandNextjs} />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Backend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="Node.js" icon={FaNodeJs} />
            <ListItem text="Express" icon={SiExpress} />
            <ListItem text="PostgreSQL" icon={SiPostgresql} />
            <ListItem text="MongoDB" icon={DiMongodb} />
            <ListItem text="Prisma" icon={SiPrisma} />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Tools & Libraries" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="React Query" icon={SiReactquery} />
            <ListItem text="Redux" icon={SiRedux} />
            <ListItem text="Tailwind" icon={SiTailwindcss} />
            <ListItem text="Axios" icon={SiAxios} />
            <ListItem text="Git" icon={FaGitAlt} />
            <ListItem text="Github" icon={FaGithub} />
            <ListItem text="NPM" icon={FaNpm} />
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
